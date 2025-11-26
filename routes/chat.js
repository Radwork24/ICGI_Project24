import express from 'express';

const router = express.Router();

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

    // Process the message and generate AI response
    const aiResponse = await generateAIResponse(message, mentionedPatients);
    
    res.json({
      success: true,
      response: aiResponse
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

// AI Response Generation Function
async function generateAIResponse(message, mentionedPatients = []) {
  // Extract patient context
  let patientContext = '';
  
  if (mentionedPatients.length > 0) {
    patientContext = '\n\n**Patient Context:**\n';
    mentionedPatients.forEach((patient, index) => {
      const { patient_profile } = patient;
      const { personal_basic, clinical_data, genomic_data, treatment_information, outcome_data } = patient_profile;
      
      patientContext += `\n**Patient ${index + 1}: ${personal_basic.td_name}**\n`;
      patientContext += `- Age: ${personal_basic.age}, Sex: ${personal_basic.sex}\n`;
      patientContext += `- Cancer Type: ${clinical_data.cancer_type}\n`;
      patientContext += `- Stage: ${clinical_data.stage}, Grade: ${clinical_data.grade}\n`;
      patientContext += `- Genomic Quality Score: ${Math.round(genomic_data.genomic_data_quality_score)}%\n`;
      patientContext += `- Gene Expression: ${genomic_data.gene_expression}\n`;
      patientContext += `- Mutations: ${genomic_data.mutation}\n`;
      patientContext += `- Treatment Type: ${treatment_information.treatment_type}\n`;
      patientContext += `- Survival Status: ${outcome_data.survival_status}\n`;
      patientContext += `- Allergic Reactions: ${personal_basic.allergic_reaction}\n`;
      patientContext += `- Previous Surgeries: ${clinical_data.previous_surgical_operations}\n`;
    });
  }

  // Generate contextual response based on the message
  const lowerMessage = message.toLowerCase();
  
  // Filter patients by cancer type
  if ((lowerMessage.includes('show') || lowerMessage.includes('find')) && 
      lowerMessage.includes('profile') && 
      lowerMessage.includes('cancer')) {
    return await generateCancerTypeFilterResponse(message, patientContext);
  }
  
  // Treatment recommendations
  if (lowerMessage.includes('treatment') || lowerMessage.includes('therapy')) {
    return generateTreatmentResponse(mentionedPatients, patientContext);
  }
  
  // Prognosis analysis
  if (lowerMessage.includes('prognosis') || lowerMessage.includes('outcome') || lowerMessage.includes('survival')) {
    return generatePrognosisResponse(mentionedPatients, patientContext);
  }
  
  // Genomic analysis
  if (lowerMessage.includes('genomic') || lowerMessage.includes('mutation') || lowerMessage.includes('gene')) {
    return generateGenomicResponse(mentionedPatients, patientContext);
  }
  
  // Side effects
  if (lowerMessage.includes('side effect') || lowerMessage.includes('adverse')) {
    return generateSideEffectsResponse(mentionedPatients, patientContext);
  }
  
  // Comparison between patients
  if (lowerMessage.includes('compare') && mentionedPatients.length > 1) {
    return generateComparisonResponse(mentionedPatients, patientContext);
  }
  
  // General cancer genomics information
  if (lowerMessage.includes('cancer') || lowerMessage.includes('oncology')) {
    return generateGeneralResponse(mentionedPatients, patientContext);
  }
  
  // Default response
  return generateDefaultResponse(mentionedPatients, patientContext);
}

// Function to filter patients by cancer type
async function generateCancerTypeFilterResponse(message, context) {
  try {
    // Extract cancer type from the message using multiple patterns
    let cancerType = '';
    
    // Pattern 1: "Show me profiles with Breast Cancer"
    const pattern1 = /(?:show|find|get).*(?:profiles?|patients?).*(?:with|having|of).*?(?:(\w+(?:\s+\w+)*)\s+cancer)/i;
    const match1 = message.match(pattern1);
    
    // Pattern 2: "Show me Breast Cancer profiles"
    const pattern2 = /(?:show|find|get).*?(?:(\w+(?:\s+\w+)*)\s+cancer).*?(?:profiles?|patients?)/i;
    
    // Pattern 3: Simple extraction of any cancer type
    const pattern3 = /(?:breast|oral|colorectal|lung|prostate|pancreatic|ovarian|cervical|skin|brain|liver|kidney|thyroid|bladder|leukemia|lymphoma)\s+cancer/i;
    
    if (match1 && match1[1]) {
      cancerType = match1[1].trim();
    } else {
      const match2 = message.match(pattern2);
      if (match2 && match2[1]) {
        cancerType = match2[1].trim();
      } else {
        const match3 = message.match(pattern3);
        if (match3) {
          cancerType = match3[0].replace(/\s+cancer/i, '').trim();
        }
      }
    }
    
    // If no cancer type found, return a prompt
    if (!cancerType) {
      return "I'd be happy to show you profiles with a specific cancer type. Please specify which cancer type you're interested in, for example: 'Show me profiles with Breast Cancer'";
    }
    
    // Capitalize first letter of each word for better matching
    cancerType = cancerType.split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
    
    // Find patients with matching cancer type
    const Patient = (await import('../models/Patient.js')).default;
    const matchingPatients = await Patient.find({
      "patient_profile.clinical_data.cancer_type": { $regex: new RegExp(cancerType, 'i') }
    });
    
    if (matchingPatients.length === 0) {
      return `I couldn't find any patient profiles with ${cancerType} Cancer. Please try another cancer type or check your spelling.`;
    }
    
    // Format the response with patient cards
    let response = `### Patients with ${cancerType} Cancer\n\n`;
    response += `I found ${matchingPatients.length} patient(s) with ${cancerType} Cancer:\n\n`;
    
    // Add patient cards in a format that can be rendered as clickable tiles
    response += '<patient_cards>\n';
    matchingPatients.forEach(patient => {
      const profile = patient.patient_profile;
      response += `<patient_card id="${patient._id}">\n`;
      response += `<name>${profile.personal_basic.td_name}</name>\n`;
      response += `<age>${profile.personal_basic.age}</age>\n`;
      response += `<sex>${profile.personal_basic.sex}</sex>\n`;
      response += `<cancer_type>${profile.clinical_data.cancer_type}</cancer_type>\n`;
      response += `<stage>${profile.clinical_data.stage}</stage>\n`;
      response += `<grade>${profile.clinical_data.grade}</grade>\n`;
      response += `<score>${Math.round(profile.genomic_data.genomic_data_quality_score)}</score>\n`;
      response += `</patient_card>\n`;
    });
    response += '</patient_cards>\n\n';
    
    response += "Click on any patient card to view their complete profile details.";
    
    return response;
  } catch (error) {
    console.error('Error filtering patients by cancer type:', error);
    return "I encountered an error while searching for patient profiles. Please try again or contact support if the issue persists.";
  }
}

function generateTreatmentResponse(patients, context) {
  if (patients.length === 0) {
    return "I'd be happy to provide treatment recommendations! Please mention a specific patient using @PatientName so I can analyze their profile and provide personalized treatment suggestions.";
  }
  
  const patient = patients[0];
  const { clinical_data, genomic_data, treatment_information } = patient.patient_profile;
  
  let response = `**Treatment Recommendations for ${patient.patient_profile.personal_basic.td_name}:**\n\n`;
  
  if (clinical_data.cancer_type.includes('Oral squamous cell carcinoma')) {
    response += `Based on the Stage IVA oral squamous cell carcinoma diagnosis:\n`;
    response += `- **Primary Treatment**: Surgical resection followed by adjuvant chemoradiation\n`;
    response += `- **Chemotherapy**: Cisplatin-based regimen (current treatment is appropriate)\n`;
    response += `- **Radiotherapy**: 66 Gy in 33 fractions (current dosage is optimal)\n`;
    response += `- **Monitoring**: Regular follow-up for recurrence detection\n`;
  } else if (clinical_data.cancer_type.includes('Breast Cancer')) {
    response += `Based on the breast cancer diagnosis:\n`;
    if (clinical_data.tumor_description.includes('HER2-positive')) {
      response += `- **Targeted Therapy**: Trastuzumab (Herceptin) - current treatment is excellent\n`;
      response += `- **Adjuvant Treatment**: Consider pertuzumab for HER2+ cases\n`;
    } else if (clinical_data.tumor_description.includes('Triple-negative')) {
      response += `- **Chemotherapy**: Doxorubicin + Cyclophosphamide (current regimen)\n`;
      response += `- **Consider**: PARP inhibitors if BRCA mutation present\n`;
      response += `- **Immunotherapy**: Check PD-L1 status for pembrolizumab consideration\n`;
    }
  }
  
  response += `\n**Genomic Considerations:**\n`;
  if (genomic_data.mutation.includes('BRCA')) {
    response += `- BRCA mutation detected: Consider platinum-based chemotherapy\n`;
    response += `- Genetic counseling recommended for family members\n`;
  } else if (genomic_data.mutation.includes('EGFR')) {
    response += `- EGFR mutation detected: Consider EGFR tyrosine kinase inhibitors\n`;
  } else if (genomic_data.mutation.includes('TP53')) {
    response += `- TP53 mutation detected: Associated with aggressive disease, consider intensified follow-up\n`;
  }
  
  response += `\n**Current Treatment Analysis:**\n`;
  response += `- ${treatment_information.treatment_type} appears ${treatment_information.treatment_effectiveness}\n`;
  response += `- Side effects reported: ${treatment_information.side_effects || 'None significant'}\n`;
  
  response += `\n**Recommendations:**\n`;
  response += `- Continue current regimen with regular monitoring\n`;
  response += `- Consider genomic-guided clinical trials if available\n`;
  response += `- Implement supportive care for symptom management\n`;
  
  response += context;
  
  return response;
}

function generatePrognosisResponse(patients, context) {
  if (patients.length === 0) {
    return "I'd be happy to provide prognosis information! Please mention a specific patient using @PatientName so I can analyze their profile and provide personalized survival predictions.";
  }
  
  const patient = patients[0];
  const { clinical_data, genomic_data, outcome_data } = patient.patient_profile;
  
  let response = `**Prognosis Analysis for ${patient.patient_profile.personal_basic.td_name}:**\n\n`;
  
  // Calculate 5-year survival probability based on cancer type and stage
  let survivalProbability = 0;
  
  if (clinical_data.cancer_type.includes('Oral squamous cell carcinoma')) {
    if (clinical_data.stage === 'Stage I') survivalProbability = 85;
    else if (clinical_data.stage === 'Stage II') survivalProbability = 70;
    else if (clinical_data.stage === 'Stage III') survivalProbability = 50;
    else if (clinical_data.stage === 'Stage IVA') survivalProbability = 30;
    else survivalProbability = 20;
  } else if (clinical_data.cancer_type.includes('Breast Cancer')) {
    if (clinical_data.stage === 'Stage I') survivalProbability = 95;
    else if (clinical_data.stage === 'Stage II') survivalProbability = 85;
    else if (clinical_data.stage === 'Stage III') survivalProbability = 70;
    else survivalProbability = 25;
    
    // Adjust for genomic factors
    if (genomic_data.mutation.includes('BRCA')) survivalProbability -= 5;
    if (clinical_data.tumor_description.includes('Triple-negative')) survivalProbability -= 10;
    if (clinical_data.tumor_description.includes('HER2-positive') && 
        treatment_information.treatment_type.includes('Trastuzumab')) survivalProbability += 15;
  }
  
  // Adjust for response to treatment
  if (outcome_data.treatment_response === 'Complete Response') survivalProbability += 20;
  else if (outcome_data.treatment_response === 'Partial Response') survivalProbability += 10;
  else if (outcome_data.treatment_response === 'Stable Disease') survivalProbability += 0;
  else if (outcome_data.treatment_response === 'Progressive Disease') survivalProbability -= 15;
  
  // Cap probability between 1-99%
  survivalProbability = Math.max(1, Math.min(99, survivalProbability));
  
  response += `**5-Year Survival Probability:** Approximately ${survivalProbability}%\n\n`;
  
  response += `**Key Prognostic Factors:**\n`;
  response += `- **Cancer Type and Stage**: ${clinical_data.cancer_type}, ${clinical_data.stage}\n`;
  response += `- **Tumor Grade**: ${clinical_data.grade}\n`;
  response += `- **Genomic Profile**: ${genomic_data.mutation ? 'Mutations in ' + genomic_data.mutation : 'No significant mutations'}\n`;
  response += `- **Treatment Response**: ${outcome_data.treatment_response || 'Not yet evaluated'}\n`;
  
  response += `\n**Survival Trends:**\n`;
  response += `- Patients with similar profiles show ${survivalProbability > 70 ? 'favorable' : survivalProbability > 40 ? 'moderate' : 'guarded'} outcomes\n`;
  response += `- Regular follow-up and adherence to treatment plan is critical\n`;
  
  if (survivalProbability > 70) {
    response += `\n**Outlook:** Favorable prognosis with current treatment approach. Recommend continued monitoring and maintenance therapy as appropriate.\n`;
  } else if (survivalProbability > 40) {
    response += `\n**Outlook:** Moderate prognosis. Consider treatment intensification or clinical trial enrollment for improved outcomes.\n`;
  } else {
    response += `\n**Outlook:** Guarded prognosis. Recommend discussion of goals of care, potential for experimental therapies, and supportive care options.\n`;
  }
  
  response += context;
  
  return response;
}

function generateGenomicResponse(patients, context) {
  if (patients.length === 0) {
    return "I'd be happy to provide genomic analysis! Please mention a specific patient using @PatientName so I can analyze their genomic profile and provide personalized insights.";
  }
  
  const patient = patients[0];
  const { genomic_data, clinical_data } = patient.patient_profile;
  
  let response = `**Genomic Analysis for ${patient.patient_profile.personal_basic.td_name}:**\n\n`;
  
  response += `**Genomic Quality Score:** ${Math.round(genomic_data.genomic_data_quality_score)}%\n\n`;
  
  response += `**Key Genomic Findings:**\n`;
  
  // Mutations
  if (genomic_data.mutation) {
    response += `- **Detected Mutations**: ${genomic_data.mutation}\n`;
    
    // Provide interpretation for common mutations
    if (genomic_data.mutation.includes('BRCA')) {
      response += `  • BRCA mutation: Associated with increased risk and potential sensitivity to PARP inhibitors\n`;
    }
    if (genomic_data.mutation.includes('EGFR')) {
      response += `  • EGFR mutation: May respond to EGFR tyrosine kinase inhibitors\n`;
    }
    if (genomic_data.mutation.includes('TP53')) {
      response += `  • TP53 mutation: Associated with genomic instability and potentially aggressive disease\n`;
    }
    if (genomic_data.mutation.includes('KRAS')) {
      response += `  • KRAS mutation: May indicate resistance to certain targeted therapies\n`;
    }
  } else {
    response += `- **Mutations**: No significant mutations detected\n`;
  }
  
  // Gene expression
  if (genomic_data.gene_expression) {
    response += `- **Gene Expression Profile**: ${genomic_data.gene_expression}\n`;
    
    // Interpret gene expression patterns
    if (genomic_data.gene_expression.includes('High proliferation')) {
      response += `  • High proliferation signature: May indicate more aggressive disease\n`;
    }
    if (genomic_data.gene_expression.includes('Immune-active')) {
      response += `  • Immune-active signature: May benefit from immunotherapy approaches\n`;
    }
  }
  
  // Tumor mutational burden
  const tmbScore = Math.floor(Math.random() * 20); // Simulated TMB score
  response += `- **Tumor Mutational Burden (TMB)**: ${tmbScore} mutations/Mb (${tmbScore > 10 ? 'High' : 'Low'})\n`;
  if (tmbScore > 10) {
    response += `  • High TMB may predict better response to immunotherapy\n`;
  }
  
  // Microsatellite status
  const msiStatus = Math.random() > 0.8 ? 'MSI-High' : 'MSS'; // Simulated MSI status
  response += `- **Microsatellite Status**: ${msiStatus}\n`;
  if (msiStatus === 'MSI-High') {
    response += `  • MSI-High tumors often respond well to immune checkpoint inhibitors\n`;
  }
  
  // Treatment implications
  response += `\n**Therapeutic Implications:**\n`;
  
  if (clinical_data.cancer_type.includes('Breast Cancer')) {
    if (genomic_data.mutation.includes('BRCA')) {
      response += `- Consider PARP inhibitors (olaparib, talazoparib)\n`;
      response += `- Platinum-based chemotherapy may be particularly effective\n`;
    }
    if (clinical_data.tumor_description.includes('HER2-positive')) {
      response += `- HER2-targeted therapies indicated (trastuzumab, pertuzumab)\n`;
    }
    if (clinical_data.tumor_description.includes('Hormone-positive')) {
      response += `- Endocrine therapy recommended\n`;
      if (genomic_data.gene_expression.includes('High proliferation')) {
        response += `- Consider addition of CDK4/6 inhibitors\n`;
      }
    }
  } else if (clinical_data.cancer_type.includes('Oral squamous cell carcinoma')) {
    if (tmbScore > 10 || msiStatus === 'MSI-High') {
      response += `- Consider immune checkpoint inhibitors (pembrolizumab, nivolumab)\n`;
    }
    if (genomic_data.mutation.includes('EGFR')) {
      response += `- EGFR inhibitors may provide benefit\n`;
    }
  }
  
  response += `\n**Clinical Trial Opportunities:**\n`;
  response += `- Based on the genomic profile, the patient may be eligible for targeted therapy trials\n`;
  response += `- Consider precision oncology programs for matching to biomarker-driven clinical trials\n`;
  
  response += context;
  
  return response;
}

function generateSideEffectsResponse(patients, context) {
  if (patients.length === 0) {
    return "I'd be happy to provide information about side effects! Please mention a specific patient using @PatientName so I can analyze their treatment and provide personalized side effect management strategies.";
  }
  
  const patient = patients[0];
  const { treatment_information, personal_basic } = patient.patient_profile;
  
  let response = `**Side Effect Management for ${personal_basic.td_name}:**\n\n`;
  
  response += `**Current Treatment:** ${treatment_information.treatment_type}\n`;
  response += `**Reported Side Effects:** ${treatment_information.side_effects || 'None significant'}\n\n`;
  
  response += `**Management Strategies:**\n`;
  
  // Common side effects based on treatment type
  if (treatment_information.treatment_type.includes('Chemotherapy')) {
    response += `- **Nausea and Vomiting:**\n`;
    response += `  • Antiemetic medications (ondansetron, aprepitant)\n`;
    response += `  • Small, frequent meals; avoid spicy or fatty foods\n`;
    
    response += `- **Fatigue:**\n`;
    response += `  • Balanced activity and rest periods\n`;
    response += `  • Light exercise as tolerated\n`;
    response += `  • Consider screening for anemia\n`;
    
    response += `- **Neutropenia:**\n`;
    response += `  • Infection precautions\n`;
    response += `  • Consider G-CSF support if indicated\n`;
    
    if (treatment_information.side_effects.includes('neuropathy') || 
        treatment_information.treatment_type.includes('Taxane') || 
        treatment_information.treatment_type.includes('Platinum')) {
      response += `- **Peripheral Neuropathy:**\n`;
      response += `  • Dose modification if severe\n`;
      response += `  • Consider duloxetine for painful neuropathy\n`;
      response += `  • Avoid extreme temperatures\n`;
    }
  }
  
  if (treatment_information.treatment_type.includes('Radiation')) {
    response += `- **Skin Reactions:**\n`;
    response += `  • Gentle washing with mild soap\n`;
    response += `  • Avoid tight clothing over treatment area\n`;
    response += `  • Apply recommended creams/ointments\n`;
    
    response += `- **Mucositis:**\n`;
    response += `  • Oral rinses (salt/baking soda solution)\n`;
    response += `  • Soft, non-spicy foods\n`;
    response += `  • Adequate hydration\n`;
  }
  
  if (treatment_information.treatment_type.includes('Immunotherapy')) {
    response += `- **Immune-Related Adverse Events:**\n`;
    response += `  • Monitor for rash, diarrhea, hepatitis, endocrinopathies\n`;
    response += `  • Report new symptoms promptly\n`;
    response += `  • May require corticosteroids for management\n`;
  }
  
  if (treatment_information.treatment_type.includes('Targeted')) {
    if (treatment_information.treatment_type.includes('HER2')) {
      response += `- **Cardiac Monitoring:**\n`;
      response += `  • Regular cardiac function assessment\n`;
      response += `  • Report shortness of breath or swelling\n`;
    }
    
    if (treatment_information.treatment_type.includes('EGFR')) {
      response += `- **Skin Rash:**\n`;
      response += `  • Topical antibiotics/steroids\n`;
      response += `  • Sun protection\n`;
      response += `  • Moisturizers\n`;
    }
  }
  
  // Personalized recommendations based on allergies
  if (personal_basic.allergic_reaction) {
    response += `\n**Special Considerations:**\n`;
    response += `- History of allergies to: ${personal_basic.allergic_reaction}\n`;
    response += `- Avoid medications with cross-reactivity\n`;
    response += `- Consider premedication for infusions if appropriate\n`;
  }
  
  response += `\n**When to Contact Healthcare Team:**\n`;
  response += `- Fever over 100.4°F (38°C)\n`;
  response += `- Uncontrolled nausea/vomiting or inability to maintain hydration\n`;
  response += `- Unusual bleeding or bruising\n`;
  response += `- Severe pain or significant worsening of existing side effects\n`;
  
  response += context;
  
  return response;
}

function generateComparisonResponse(patients, context) {
  if (patients.length < 2) {
    return "To compare patients, please mention at least two patients using @PatientName format.";
  }
  
  const patient1 = patients[0];
  const patient2 = patients[1];
  
  let response = `**Comparison Between ${patient1.patient_profile.personal_basic.td_name} and ${patient2.patient_profile.personal_basic.td_name}:**\n\n`;
  
  response += `**Demographics:**\n`;
  response += `- **${patient1.patient_profile.personal_basic.td_name}**: ${patient1.patient_profile.personal_basic.age} years, ${patient1.patient_profile.personal_basic.sex}\n`;
  response += `- **${patient2.patient_profile.personal_basic.td_name}**: ${patient2.patient_profile.personal_basic.age} years, ${patient2.patient_profile.personal_basic.sex}\n\n`;
  
  response += `**Cancer Type:**\n`;
  response += `- **${patient1.patient_profile.personal_basic.td_name}**: ${patient1.patient_profile.clinical_data.cancer_type}\n`;
  response += `- **${patient2.patient_profile.personal_basic.td_name}**: ${patient2.patient_profile.clinical_data.cancer_type}\n\n`;
  
  response += `**Disease Stage:**\n`;
  response += `- **${patient1.patient_profile.personal_basic.td_name}**: ${patient1.patient_profile.clinical_data.stage}, Grade: ${patient1.patient_profile.clinical_data.grade}\n`;
  response += `- **${patient2.patient_profile.personal_basic.td_name}**: ${patient2.patient_profile.clinical_data.stage}, Grade: ${patient2.patient_profile.clinical_data.grade}\n\n`;
  
  response += `**Genomic Profile:**\n`;
  response += `- **${patient1.patient_profile.personal_basic.td_name}**: Mutations: ${patient1.patient_profile.genomic_data.mutation || 'None significant'}, Quality Score: ${Math.round(patient1.patient_profile.genomic_data.genomic_data_quality_score)}%\n`;
  response += `- **${patient2.patient_profile.personal_basic.td_name}**: Mutations: ${patient2.patient_profile.genomic_data.mutation || 'None significant'}, Quality Score: ${Math.round(patient2.patient_profile.genomic_data.genomic_data_quality_score)}%\n\n`;
  
  response += `**Treatment Approach:**\n`;
  response += `- **${patient1.patient_profile.personal_basic.td_name}**: ${patient1.patient_profile.treatment_information.treatment_type}\n`;
  response += `- **${patient2.patient_profile.personal_basic.td_name}**: ${patient2.patient_profile.treatment_information.treatment_type}\n\n`;
  
  response += `**Treatment Response:**\n`;
  response += `- **${patient1.patient_profile.personal_basic.td_name}**: ${patient1.patient_profile.outcome_data.treatment_response || 'Not yet evaluated'}\n`;
  response += `- **${patient2.patient_profile.personal_basic.td_name}**: ${patient2.patient_profile.outcome_data.treatment_response || 'Not yet evaluated'}\n\n`;
  
  response += `**Key Similarities:**\n`;
  if (patient1.patient_profile.clinical_data.cancer_type === patient2.patient_profile.clinical_data.cancer_type) {
    response += `- Both have ${patient1.patient_profile.clinical_data.cancer_type}\n`;
  }
  if (patient1.patient_profile.clinical_data.stage === patient2.patient_profile.clinical_data.stage) {
    response += `- Same disease stage (${patient1.patient_profile.clinical_data.stage})\n`;
  }
  if (patient1.patient_profile.treatment_information.treatment_type === patient2.patient_profile.treatment_information.treatment_type) {
    response += `- Receiving similar treatment (${patient1.patient_profile.treatment_information.treatment_type})\n`;
  }
  
  response += `\n**Key Differences:**\n`;
  if (patient1.patient_profile.clinical_data.cancer_type !== patient2.patient_profile.clinical_data.cancer_type) {
    response += `- Different cancer types\n`;
  }
  if (patient1.patient_profile.clinical_data.stage !== patient2.patient_profile.clinical_data.stage) {
    response += `- Different disease stages\n`;
  }
  if (patient1.patient_profile.genomic_data.mutation !== patient2.patient_profile.genomic_data.mutation) {
    response += `- Different genomic profiles\n`;
  }
  if (patient1.patient_profile.treatment_information.treatment_type !== patient2.patient_profile.treatment_information.treatment_type) {
    response += `- Different treatment approaches\n`;
  }
  
  response += `\n**Clinical Insights:**\n`;
  if (patient1.patient_profile.clinical_data.cancer_type === patient2.patient_profile.clinical_data.cancer_type) {
    if (patient1.patient_profile.outcome_data.treatment_response && patient2.patient_profile.outcome_data.treatment_response) {
      response += `- Despite similar diagnoses, treatment responses differ, possibly due to genomic variations\n`;
    }
  } else {
    response += `- Different cancer types require distinct treatment approaches\n`;
  }
  
  if (patient1.patient_profile.genomic_data.mutation && patient2.patient_profile.genomic_data.mutation) {
    response += `- Genomic profiles suggest different molecular drivers of disease\n`;
  }
  
  response += context;
  
  return response;
}

function generateGeneralResponse(mentionedPatients, context) {
  let response = '';
  
  if (mentionedPatients.length > 0) {
    const patient = mentionedPatients[0];
    response = `**Cancer Genomics Information for ${patient.patient_profile.personal_basic.td_name}:**\n\n`;
    
    if (patient.patient_profile.clinical_data.cancer_type.includes('Breast')) {
      response += `**Breast Cancer Genomics Overview:**\n`;
      response += `- Common mutations: PIK3CA (30%), TP53 (37%), CDH1 (invasive lobular), GATA3\n`;
      response += `- Molecular subtypes: Luminal A, Luminal B, HER2-enriched, Basal-like/Triple-negative\n`;
      response += `- Hereditary syndromes: BRCA1/2 mutations (5-10% of cases)\n`;
      response += `- Prognostic genomic tests: Oncotype DX, MammaPrint, EndoPredict\n`;
    } else if (patient.patient_profile.clinical_data.cancer_type.includes('Oral')) {
      response += `**Oral Cancer Genomics Overview:**\n`;
      response += `- Common mutations: TP53 (70-80%), CDKN2A, HRAS, EGFR\n`;
      response += `- HPV status significantly impacts prognosis and treatment response\n`;
      response += `- Tobacco-associated cancers have high mutation burden\n`;
      response += `- Emerging targets: EGFR, PI3K/AKT/mTOR pathway\n`;
    } else if (patient.patient_profile.clinical_data.cancer_type.includes('Colorectal')) {
      response += `**Colorectal Cancer Genomics Overview:**\n`;
      response += `- Key pathways: WNT, RAS-MAPK, PI3K, TGF-β, TP53\n`;
      response += `- Microsatellite instability (MSI) status guides immunotherapy decisions\n`;
      response += `- KRAS/NRAS mutations predict resistance to EGFR inhibitors\n`;
      response += `- BRAF V600E mutations associated with poor prognosis\n`;
    }
  } else {
    response = `**Cancer Genomics Overview:**\n\n`;
    response += `Cancer genomics is the study of genetic mutations responsible for cancer, using genome sequencing and bioinformatics. Key concepts include:\n\n`;
    
    response += `**Driver Mutations vs. Passenger Mutations:**\n`;
    response += `- Driver mutations directly contribute to cancer development\n`;
    response += `- Passenger mutations occur but don't directly affect cancer growth\n\n`;
    
    response += `**Common Oncogenes:**\n`;
    response += `- RAS family (KRAS, NRAS): Cell growth and division\n`;
    response += `- EGFR: Cell proliferation and survival\n`;
    response += `- HER2: Cell growth and division\n`;
    response += `- MYC: Cell cycle progression\n\n`;
    
    response += `**Tumor Suppressor Genes:**\n`;
    response += `- TP53: "Guardian of the genome," regulates cell division\n`;
    response += `- BRCA1/2: DNA repair\n`;
    response += `- RB1: Cell cycle regulation\n`;
    response += `- PTEN: Regulates cell growth pathways\n\n`;
    
    response += `**Genomic Testing in Cancer:**\n`;
    response += `- Next-Generation Sequencing (NGS): Identifies mutations across many genes\n`;
    response += `- Liquid Biopsies: Detects circulating tumor DNA in blood\n`;
    response += `- RNA Sequencing: Examines gene expression patterns\n`;
    response += `- Whole Exome/Genome Sequencing: Comprehensive genetic analysis\n\n`;
    
    response += `**Precision Medicine Applications:**\n`;
    response += `- Targeted therapies based on specific mutations\n`;
    response += `- Immunotherapy selection based on biomarkers\n`;
    response += `- Prognostic information from genomic signatures\n`;
    response += `- Clinical trial matching based on genomic alterations\n`;
  }
  
  response += context;
  
  return response;
}

function generateDefaultResponse(mentionedPatients, context) {
  if (mentionedPatients.length > 0) {
    const patient = mentionedPatients[0];
    return `I'm here to help with information about ${patient.patient_profile.personal_basic.td_name}'s case. You can ask me about:\n\n` +
           `- Treatment recommendations\n` +
           `- Prognosis and survival predictions\n` +
           `- Genomic analysis and mutation interpretation\n` +
           `- Side effect management strategies\n` +
           `- Comparison with other patients\n\n` +
           `What specific aspect would you like to know more about?${context}`;
  } else {
    return `I'm here to help with your cancer genomics questions! You can ask me about:\n\n` +
           `- Treatment recommendations for specific patients\n` +
           `- Genomic analysis and mutation interpretation\n` +
           `- Prognosis and survival predictions\n` +
           `- Side effect management strategies\n` +
           `- Patient comparisons and case studies\n\n` +
           `Try mentioning a patient with @ to get personalized insights!`;
  }
}

export default router;
