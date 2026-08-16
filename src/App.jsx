import './App.css'
import { useState, useEffect } from 'react'
import { API_URL } from './config/api.js'
import PatientDetail from './components/PatientDetail.jsx'
import Landing from './components/Landing.jsx'

function App() {
  const [query, setQuery] = useState('')
  const [patients, setPatients] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [selectedPatient, setSelectedPatient] = useState(null)
  const [fullPatientData, setFullPatientData] = useState(null)
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [suggestions, setSuggestions] = useState([])
  const [mentionStart, setMentionStart] = useState(-1)
  const [referencedPatient, setReferencedPatient] = useState(null)
  const [aiResponse, setAiResponse] = useState('')
  const [showApp, setShowApp] = useState(false)
  const isSendDisabled = query.trim().length === 0 && !referencedPatient

  // Load patients from Render backend (MongoDB)
  useEffect(() => {
    const loadPatients = async () => {
      try {
        setLoading(true)
        setError(null)

        const response = await fetch(`${API_URL}/api/patients`)
        if (!response.ok) {
          throw new Error(`Failed to load patients (${response.status})`)
        }

        const result = await response.json()
        if (!result.success || !Array.isArray(result.data)) {
          throw new Error(result.error || 'Invalid response from server')
        }

        setPatients(result.data)
      } catch (err) {
        console.error('Error loading patients:', err)
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    loadPatients()
  }, [])

  // Handle @ mention detection in query input
  const handleQueryChange = (e) => {
    const value = e.target.value;
    const cursorPosition = e.target.selectionStart;

    setQuery(value);

    // Find @ mentions - look for @ followed by word characters or spaces
    // match last occurrence of @
    const lastAt = value.lastIndexOf('@', cursorPosition);
    if (lastAt !== -1) {
      const textAfterAt = value.substring(lastAt + 1, cursorPosition);
      // Verify it's not part of an email (preceded by whitespace or start)
      const isStart = lastAt === 0;
      const isPrecededBySpace = lastAt > 0 && /\s/.test(value[lastAt - 1]);

      if (isStart || isPrecededBySpace) {
        setMentionStart(lastAt);
        const queryText = textAfterAt.toLowerCase().trim();

        // Filter patients based on query
        const filteredPatients = patients.filter(patient =>
          patient.name.toLowerCase().includes(queryText)
        );

        setSuggestions(filteredPatients);
        setShowSuggestions(filteredPatients.length > 0);
        return;
      }
    }

    setShowSuggestions(false);
    setSuggestions([]);
  };

  // Handle suggestion selection
  const handleSuggestionClick = async (patient) => {
    try {
      const response = await fetch(`${API_URL}/api/patients/${patient.id}`)
      const result = await response.json()

      if (result.success) {
        setReferencedPatient({ ...patient, fullData: result.data })
      } else {
        setReferencedPatient(patient)
      }
    } catch (err) {
      console.error('Error loading patient for mention:', err)
      setReferencedPatient(patient)
    }

    const value = query;
    const beforeMention = value.substring(0, mentionStart);

    setQuery(beforeMention);
    setShowSuggestions(false);
    setSuggestions([]);

    setTimeout(() => {
      document.querySelector('.composer-input-display')?.focus();
    }, 0);
  };

  // Call AI via Render backend (Groq key stays on server only)
  const generateGroqResponse = async (userMessage, mentionedPatients = []) => {
    try {
      const response = await fetch(`${API_URL}/api/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: userMessage,
          mentionedPatients,
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || `Chat request failed (${response.status})`);
      }

      return data.response || "I apologize, but I couldn't generate a response.";
    } catch (err) {
      console.error('Chat API error:', err);
      return 'I encountered an error connecting to the AI service. Please try again.';
    }
  };

  // Handle sending query to AI
  const handleSendQuery = async () => {
    if (!query.trim() && !referencedPatient) return;

    // UI Updates
    setAiResponse(''); // Clear previous
    setLoading(true);
    setAiResponse('🤖 Analyzing patient data and generating response...');

    const currentQuery = query;
    const currentReferencedPatient = referencedPatient;

    // Clear input immediately
    setQuery('');

    try {
      const mentionedPatients = currentReferencedPatient?.fullData
        ? [currentReferencedPatient.fullData]
        : [];

      const responseText = await generateGroqResponse(currentQuery, mentionedPatients);
      setAiResponse(responseText);

    } catch (error) {
      console.error('Error sending query:', error);
      setAiResponse('Sorry, I encountered an error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Fetch full patient details when a patient is selected
  const handlePatientClick = async (patientId) => {
    try {
      setLoading(true)
      setError(null)

      const response = await fetch(`${API_URL}/api/patients/${patientId}`)
      const result = await response.json()

      if (result.success) {
        setFullPatientData(result.data)
        setSelectedPatient(result.data)
      } else {
        setError('Patient not found')
      }
    } catch (err) {
      console.error('Error loading patient:', err)
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  // Close patient detail panel
  const handleClosePatientDetail = () => {
    setSelectedPatient(null)
    setFullPatientData(null)
  }

  // Landing CTA → enter app
  const handleEnterApp = () => {
    setShowApp(true)
  }

  // Show landing page first
  if (!showApp) {
    return <Landing onEnter={handleEnterApp} />
  }

  return (
    <div className="icgi-app">
      <aside className="sidebar">
        <div className="brand">
          <div className="brand-mark">ICGI</div>
          <div className="brand-sub">Cancer Genome AI</div>
        </div>

        <div className="sidebar-section">PATIENT PROFILES</div>

        <div className="patient-list">
          {loading ? (
            <div className="loading">Loading patients...</div>
          ) : error ? (
            <div className="error">Error: {error}</div>
          ) : patients.length === 0 ? (
            <div className="no-data">No patients found</div>
          ) : (
            patients.map((patient) => (
              <div
                key={patient.id}
                className="patient-card clickable"
                onClick={() => handlePatientClick(patient.id)}
                title="Click to view full details"
              >
                < div className="patient-name" > {patient.name}</div >
                <div className="patient-meta">Age: {patient.age}</div>
                <div className="patient-meta">{patient.cancer}</div>
                <div className="patient-meta">{patient.tag}</div>
                <div className="patient-badges">
                  <span className="badge stage">{patient.stage}</span>
                  <span className="badge score">{patient.score}%</span>
                </div>
              </div >
            ))
          )
          }
        </div >
      </aside >

      <main className="content">
        <header className="topbar">
          <div className="topbar-title">AI Answers</div>
        </header>

        <section className="welcome">
          {!aiResponse && (
            <>
              <h1 className="title">Welcome to ICGI V1.1</h1>
              <p className="subtitle">Indian Cancer Genome Intelligence AI System</p>
              <p className="hint">Ask me anything about cancer genomics, patient analysis, or treatment recommendations. Try mentioning a patient with @ to get personalized insights!</p>
            </>
          )}

          {/* AI Response Display - inside welcome section for scrolling */}
          {aiResponse && (
            <div className="ai-response">
              <div className="ai-response-content">
                <h3>AI Response</h3>
                <div className="ai-response-text">
                  {(() => {
                    // Simple markdown parser for better formatting
                    const formatResponse = (text) => {
                      if (!text) return '';

                      // Split into lines
                      const lines = text.split('\n');
                      const formatted = [];
                      let i = 0;

                      while (i < lines.length) {
                        const line = lines[i];

                        // Detect markdown table
                        if (line.trim().startsWith('|') && line.trim().endsWith('|')) {
                          const tableLines = [line];
                          i++;

                          // Collect all table lines
                          while (i < lines.length && (lines[i].trim().startsWith('|') || lines[i].trim().match(/^[\|\-\s:]+$/))) {
                            tableLines.push(lines[i]);
                            i++;
                          }

                          // Render table
                          if (tableLines.length >= 3) {
                            const parseRow = (row) => row.split('|').map(cell => cell.trim()).filter(cell => cell.length > 0);
                            const headers = parseRow(tableLines[0]);
                            const dataRows = tableLines.slice(2).map(parseRow);

                            formatted.push(
                              <div key={`table-${i}`} style={{ overflowX: 'auto', margin: '1.5rem 0' }}>
                                <table style={{
                                  width: '100%',
                                  borderCollapse: 'collapse',
                                  background: '#1a1a1a',
                                  border: '1px solid #333',
                                  borderRadius: '8px',
                                  overflow: 'hidden'
                                }}>
                                  <thead>
                                    <tr style={{ background: '#252525' }}>
                                      {headers.map((cell, idx) => (
                                        <th key={idx} style={{
                                          padding: '0.75rem 1rem',
                                          textAlign: 'left',
                                          borderBottom: '2px solid #00d9ff',
                                          color: '#00d9ff',
                                          fontWeight: '600',
                                          fontSize: '0.9rem'
                                        }}>
                                          {cell}
                                        </th>
                                      ))}
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {dataRows.map((row, rowIdx) => (
                                      <tr key={rowIdx} style={{ borderBottom: '1px solid #2a2a2a' }}>
                                        {row.map((cell, cellIdx) => (
                                          <td key={cellIdx} style={{
                                            padding: '0.75rem 1rem',
                                            color: '#d0d0d0',
                                            fontSize: '0.9rem'
                                          }}>
                                            {cell}
                                          </td>
                                        ))}
                                      </tr>
                                    ))}
                                  </tbody>
                                </table>
                              </div>
                            );
                          }
                          continue;
                        }

                        // Handle headings (# or ##)
                        if (line.startsWith('#')) {
                          const level = line.match(/^#+/)[0].length;
                          const text = line.replace(/^#+\s*/, '');
                          const fontSize = level === 1 ? '1.3rem' : '1.1rem';
                          formatted.push(
                            <h4 key={i} style={{
                              color: '#00d9ff',
                              fontSize: fontSize,
                              fontWeight: '600',
                              marginTop: '1.5rem',
                              marginBottom: '0.75rem',
                              borderBottom: '1px solid #333',
                              paddingBottom: '0.5rem'
                            }}>
                              {text}
                            </h4>
                          );
                        }
                        // Handle bold+italic (***text***)
                        else if (line.includes('***')) {
                          const parts = line.split(/(\*\*\*.*?\*\*\*)/g);
                          formatted.push(
                            <p key={i} style={{ marginBottom: '0.75rem', lineHeight: '1.8' }}>
                              {parts.map((part, idx) => {
                                if (part.startsWith('***') && part.endsWith('***')) {
                                  return <strong key={idx} style={{ color: '#00d9ff', fontWeight: '700', fontStyle: 'italic' }}>{part.slice(3, -3)}</strong>;
                                }
                                return part;
                              })}
                            </p>
                          );
                        }
                        // Handle bold text (**text**)
                        else if (line.includes('**')) {
                          const parts = line.split(/(\*\*.*?\*\*)/g);
                          formatted.push(
                            <p key={i} style={{ marginBottom: '0.75rem', lineHeight: '1.8' }}>
                              {parts.map((part, idx) => {
                                if (part.startsWith('**') && part.endsWith('**')) {
                                  return <strong key={idx} style={{ color: '#fff', fontWeight: '600' }}>{part.slice(2, -2)}</strong>;
                                }
                                return part;
                              })}
                            </p>
                          );
                        }
                        // Handle italic text (*text*)
                        else if (line.includes('*') && !line.trim().startsWith('*')) {
                          const parts = line.split(/(\*.*?\*)/g);
                          formatted.push(
                            <p key={i} style={{ marginBottom: '0.75rem', lineHeight: '1.8' }}>
                              {parts.map((part, idx) => {
                                if (part.startsWith('*') && part.endsWith('*') && !part.startsWith('**')) {
                                  return <em key={idx} style={{ color: '#e0e0e0', fontStyle: 'italic' }}>{part.slice(1, -1)}</em>;
                                }
                                return part;
                              })}
                            </p>
                          );
                        }
                        // Handle numbered lists
                        else if (/^\d+\./.test(line)) {
                          formatted.push(
                            <div key={i} style={{ marginLeft: '1.5rem', marginBottom: '0.5rem', paddingLeft: '0.5rem', borderLeft: '2px solid #333' }}>
                              {line}
                            </div>
                          );
                        }
                        // Handle bullet points
                        else if (line.trim().startsWith('-')) {
                          formatted.push(
                            <div key={i} style={{ marginLeft: '1.5rem', marginBottom: '0.5rem' }}>
                              {line}
                            </div>
                          );
                        }
                        // Regular text
                        else if (line.trim()) {
                          formatted.push(
                            <p key={i} style={{ marginBottom: '0.75rem', lineHeight: '1.8' }}>
                              {line}
                            </p>
                          );
                        }
                        // Empty line
                        else {
                          formatted.push(<br key={i} />);
                        }

                        i++;
                      }

                      return formatted;
                    };

                    // Check if response contains patient cards
                    if (aiResponse.includes('<patient_cards>')) {
                      // Extract markdown content before patient cards
                      const beforeCards = aiResponse.split('<patient_cards>')[0];

                      // Extract patient cards data
                      const cardsSection = aiResponse.split('<patient_cards>')[1].split('</patient_cards>')[0];
                      const patientCardsData = [];

                      // Parse each patient card
                      const cardRegex = /<patient_card id="([^"]+)">([\s\S]*?)<\/patient_card>/g;
                      let cardMatch;

                      while ((cardMatch = cardRegex.exec(cardsSection)) !== null) {
                        const cardId = cardMatch[1];
                        const cardContent = cardMatch[2];

                        // Extract patient details
                        const getName = (content) => {
                          const match = /<name>(.*?)<\/name>/.exec(content);
                          return match ? match[1] : 'Unknown';
                        };

                        const getAge = (content) => {
                          const match = /<age>(.*?)<\/age>/.exec(content);
                          return match ? match[1] : '';
                        };

                        const getCancerType = (content) => {
                          const match = /<cancer_type>(.*?)<\/cancer_type>/.exec(content);
                          return match ? match[1] : '';
                        };

                        const getStage = (content) => {
                          const match = /<stage>(.*?)<\/stage>/.exec(content);
                          return match ? match[1] : '';
                        };

                        const getGrade = (content) => {
                          const match = /<grade>(.*?)<\/grade>/.exec(content);
                          return match ? match[1] : '';
                        };

                        const getScore = (content) => {
                          const match = /<score>(.*?)<\/score>/.exec(content);
                          return match ? match[1] : '';
                        };

                        patientCardsData.push({
                          id: cardId,
                          name: getName(cardContent),
                          age: getAge(cardContent),
                          cancer: getCancerType(cardContent),
                          stage: getStage(cardContent),
                          grade: getGrade(cardContent),
                          score: getScore(cardContent)
                        });
                      }

                      // Extract markdown content after patient cards
                      const afterCards = aiResponse.split('</patient_cards>')[1];

                      // Render the response with patient cards
                      return (
                        <>
                          <div>{beforeCards}</div>

                          <div className="patient-list response-patient-list">
                            {patientCardsData.map((patient) => (
                              <div
                                key={patient.id}
                                className="patient-card clickable"
                                onClick={() => handlePatientClick(patient.id)}
                                title="Click to view full details"
                              >
                                <div className="patient-name">{patient.name}</div>
                                <div className="patient-meta">Age: {patient.age}</div>
                                <div className="patient-meta">{patient.cancer}</div>
                                <div className="patient-meta">{patient.grade}</div>
                                <div className="patient-badges">
                                  <span className="badge stage">{patient.stage}</span>
                                  <span className="badge score">{patient.score}%</span>
                                </div>
                              </div>
                            ))}
                          </div>

                          <div>{afterCards}</div>
                        </>
                      );
                    } else {
                      // Regular response without patient cards - use formatter
                      return formatResponse(aiResponse);
                    }
                  })()}
                </div>
              </div>
            </div>
          )}
        </section>


        <div className="composer">
          <div className="composer">
            {/* Patient Suggestions */}
            {showSuggestions && suggestions.length > 0 && (
              <div className="patient-suggestions">
                {suggestions.map((patient, index) => (
                  <div
                    key={patient.id}
                    className="suggestion-item"
                    onClick={() => handleSuggestionClick(patient)}
                  >
                    <div className="suggestion-name">{patient.name}</div>
                    <div className="suggestion-details">
                      {patient.cancer} • {patient.stage} • {patient.score}%
                    </div>
                  </div>
                ))}
              </div>
            )}

            <div className="composer-input-container">
              {/* Referenced Patient Context Bar */}
              {referencedPatient && (
                <div className="reference-context-bar">
                  <span className="context-label">Analyzing:</span>
                  <div className="context-chip">
                    {referencedPatient.name}
                    <button
                      className="remove-context"
                      onClick={() => {
                        setReferencedPatient(null);
                        // Optional: focus input back
                        document.querySelector('.composer-input-display')?.focus();
                      }}
                      title="Remove reference"
                    >
                      ×
                    </button>
                  </div>
                </div>
              )}

              <input
                className="composer-input-display"
                value={query}
                onChange={handleQueryChange}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !isSendDisabled) {
                    e.preventDefault();
                    handleSendQuery();
                  }
                }}
                placeholder={referencedPatient ? "Ask a question about this patient..." : "Ask about cancer genomics or type @ to analyze a patient..."}
              />
            </div>
            <button
              type="button"
              className="composer-send"
              aria-label="Send"
              disabled={isSendDisabled && !referencedPatient}
              title={isSendDisabled && !referencedPatient ? 'Type a query' : 'Send'}
              onClick={handleSendQuery}
            >
              {/* arrow drawn via CSS ::before for maximal compatibility */}
            </button>
          </div>
        </div>
      </main >

      {/* Patient Detail Panel */}
      {
        selectedPatient && (
          <PatientDetail
            patient={selectedPatient}
            onClose={handleClosePatientDetail}
          />
        )
      }
    </div >
  )
}

export default App
