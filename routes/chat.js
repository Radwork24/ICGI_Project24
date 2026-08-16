import express from 'express';
import Groq from 'groq-sdk';
import { search } from 'duck-duck-scrape';
import dotenv from 'dotenv'; // Ensure dotenv is used if not already globally loaded, but server.js typically loads it. 

// Note: server.js loads dotenv, so valid here.
const router = express.Router();

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY
});

// AI Chat endpoint
router.post('/', async (req, res) => {
  try {
    const { message, mentionedPatients } = req.body;

    if (!message) {
      return res.status(400).json({
        success: false,
        error: 'Message is required'
      });
    }

    console.log('Processing request with:', { message, patientCount: mentionedPatients?.length });

    // 1. Construct Search Query
    let searchQuery = message;
    if (mentionedPatients && mentionedPatients.length > 0) {
      const patient = mentionedPatients[0].patient_profile; // Focus on primary patient for search
      // Combine strict medical terms from patient profile
      const conditions = [
        patient.clinical_data.cancer_type,
        patient.genomic_data.mutation
      ].filter(Boolean).join(' ');

      searchQuery = `${conditions} ${message}`;
    }

    console.log('Performing DDG Search for:', searchQuery);

    // 2. Perform DuckDuckGo Search
    let searchResults = [];
    try {
      const results = await search(searchQuery, {
        safeSearch: 0 // Moderate
      });

      if (results && results.results) {
        // Take top 3-5 results to avoid context overflow
        searchResults = results.results.slice(0, 4).map(r => ({
          title: r.title,
          url: r.url,
          description: r.description
        }));
      }
    } catch (searchErr) {
      console.error('DDG Search failed:', searchErr);
      // Continue without search results rather than failing
    }

    // 3. Construct LLM Context
    let patientContext = '';
    if (mentionedPatients && mentionedPatients.length > 0) {
      patientContext = '### PATIENT CONTEXT\n';
      mentionedPatients.forEach((patient, index) => {
        const p = patient.patient_profile;
        patientContext += `\n**Patient ${index + 1}: ${p.personal_basic.td_name}**\n`;
        patientContext += `- Diagnosis: ${p.clinical_data.cancer_type} (${p.clinical_data.stage})\n`;
        patientContext += `- Age/Sex: ${p.personal_basic.age}, ${p.personal_basic.sex}\n`;
        patientContext += `- Genomic: ${p.genomic_data.mutation || 'None reported'} (Score: ${Math.round(p.genomic_data.genomic_data_quality_score)}%)\n`;
        patientContext += `- Treatment: ${p.treatment_information.treatment_type}\n`;
        // Add more critical fields if needed
      });
    }

    let webContext = '';
    if (searchResults.length > 0) {
      webContext = '### WEB SEARCH RESULTS (Latest Medical Info)\n';
      searchResults.forEach((r, i) => {
        webContext += `[${i + 1}] ${r.title}\n${r.description}\nSource: ${r.url}\n\n`;
      });
    }

    const systemPrompt = `You are an expert Oncologist AI assistant (ICGI). 
You have access to patient profiles and real-time web search results.
- Use the PATIENT CONTEXT to provide personalized answers.
- Use the WEB SEARCH RESULTS to provide up-to-date medical info, clinical trials, or treatment guidelines effectively.
- If the new info from the web contradicts older knowledge, mention the source.
- Be precise, empathetic, and professional.
- Always answer the user's specific question using the provided context.`;

    const userPrompt = `
${patientContext}

${webContext}

USER QUERIES: "${message}"

Please respond to the user based on the above context.
`;

    // 4. Call Groq
    const chatCompletion = await groq.chat.completions.create({
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: userPrompt }
      ],
      model: 'qwen-2.5-32b', // Using closest available model on Groq
      temperature: 0.6,
      max_tokens: 1024,
    });

    const aiResponse = chatCompletion.choices[0]?.message?.content || "I apologize, but I couldn't generate a response at this moment.";

    res.json({
      success: true,
      response: aiResponse,
      // debug: { searchQuery, searchResultsCount: searchResults.length } // Optional debug info
    });

  } catch (error) {
    console.error('Error in chat endpoint:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to process chat message',
      message: error.message
    });
  }
});

export default router;
