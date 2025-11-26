import './App.css'
import { useState, useEffect } from 'react'
import PatientDetail from './components/PatientDetail.jsx'
import Landing from './components/Landing.jsx'

function App() {
  const [query, setQuery] = useState('')
  const [patients, setPatients] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [selectedPatient, setSelectedPatient] = useState(null)
  const [fullPatientData, setFullPatientData] = useState(null)
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [suggestions, setSuggestions] = useState([])
  const [mentionStart, setMentionStart] = useState(-1)
  const [aiResponse, setAiResponse] = useState('')
  const [showApp, setShowApp] = useState(false)
  const isSendDisabled = query.trim().length === 0

  // Fetch patients from API
  useEffect(() => {
    const fetchPatients = async () => {
      try {
        setLoading(true)
        const response = await fetch('http://localhost:5000/api/patients')
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        
        const data = await response.json()
        
        if (data.success) {
          setPatients(data.data)
        } else {
          throw new Error(data.error || 'Failed to fetch patients')
        }
      } catch (err) {
        console.error('Error fetching patients:', err)
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchPatients()
  }, [])

  // Handle @ mention detection in query input
  const handleQueryChange = (e) => {
    const value = e.target.value;
    const cursorPosition = e.target.selectionStart;
    
    setQuery(value);
    
    // Find @ mentions - look for @ followed by word characters or spaces
    const mentionMatch = value.substring(0, cursorPosition).match(/@([\w\s]*)$/);
    
    if (mentionMatch) {
      const queryText = mentionMatch[1].toLowerCase().trim();
      setMentionStart(cursorPosition - mentionMatch[0].length);
      
      // Filter patients based on query
      const filteredPatients = patients.filter(patient => 
        patient.name.toLowerCase().includes(queryText)
      );
      
      setSuggestions(filteredPatients);
      setShowSuggestions(filteredPatients.length > 0);
    } else {
      setShowSuggestions(false);
      setSuggestions([]);
    }
  };

  // Handle suggestion selection
  const handleSuggestionClick = (patient) => {
    // Get the current input element
    const input = document.querySelector('.composer-input-hidden');
    if (!input) return;
    
    const currentValue = input.value;
    const cursorPos = input.selectionStart;
    
    // Find the @mention that triggered the suggestions
    const beforeCursor = currentValue.substring(0, cursorPos);
    const mentionMatch = beforeCursor.match(/@[\w\s]*$/);
    
    if (mentionMatch) {
      // Replace the @mention with @patientname
      const beforeMention = currentValue.substring(0, cursorPos - mentionMatch[0].length);
      const afterCursor = currentValue.substring(cursorPos);
      const newValue = beforeMention + `@${patient.name} ` + afterCursor;
      
      setQuery(newValue);
      setShowSuggestions(false);
      setSuggestions([]);
      
      // Set cursor position after the mention
      setTimeout(() => {
        const newCursorPos = beforeMention.length + patient.name.length + 2; // +2 for @ and space
        input.focus();
        input.setSelectionRange(newCursorPos, newCursorPos);
      }, 0);
    }
  };

  // Handle sending query to AI
  const handleSendQuery = async () => {
    if (!query.trim()) return;

    // Extract mentioned patients
    const mentionedPatients = query.match(/@(\w+(?:\s+\w+)*)/g);
    const patientNames = mentionedPatients ? mentionedPatients.map(m => m.substring(1)) : [];

    // Find full patient data for mentioned patients
    const mentionedPatientData = patients.filter(patient => 
      patientNames.includes(patient.name)
    );

    try {
      const response = await fetch('http://localhost:5000/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: query,
          mentionedPatients: mentionedPatientData
        })
      });

      const data = await response.json();
      
      // Clear any existing response first
      setAiResponse('');
      
      // Set the new response after a small delay to ensure UI updates properly
      setTimeout(() => {
        setAiResponse(data.response);
      }, 50);
      
      // Clear input after sending
      setQuery('');
    } catch (error) {
      console.error('Error sending query:', error);
      setAiResponse('Sorry, I encountered an error. Please make sure the server is running.');
    }
  };

  // Fetch full patient details when a patient is selected
  const handlePatientClick = async (patientId) => {
    try {
      const response = await fetch(`http://localhost:5000/api/patients/${patientId}`)
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      
      const data = await response.json()
      
      if (data.success) {
        setFullPatientData(data.data)
        setSelectedPatient(data.data)
      } else {
        throw new Error(data.error || 'Failed to fetch patient details')
      }
    } catch (err) {
      console.error('Error fetching patient details:', err)
      setError(err.message)
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
                <div className="patient-name">{patient.name}</div>
                <div className="patient-meta">Age: {patient.age}</div>
                <div className="patient-meta">{patient.cancer}</div>
                <div className="patient-meta">{patient.tag}</div>
                <div className="patient-badges">
                  <span className="badge stage">{patient.stage}</span>
                  <span className="badge score">{patient.score}%</span>
                </div>
              </div>
            ))
          )}
        </div>
      </aside>

      <main className="content">
        <header className="topbar">
          <div className="topbar-title">AI Answers</div>
        </header>

        <section className="welcome">
          <h1 className="title">Welcome to ICGI</h1>
          <p className="subtitle">Indian Cancer Genome Intelligence AI System</p>
          <p className="hint">Ask me anything about cancer genomics, patient analysis, or treatment recommendations. Try mentioning a patient with @ to get personalized insights!</p>
        </section>

        {/* AI Response Display */}
        {aiResponse && (
          <div className="ai-response">
            <div className="ai-response-content">
              <h3>🤖 AI Response:</h3>
              <div className="ai-response-text">
                {(() => {
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
                    // Regular response without patient cards
                    return aiResponse;
                  }
                })()}
              </div>
            </div>
          </div>
        )}

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
            <div className="composer-input-display">
              {query.split(/(@\w+(?:\s+\w+)*)/).map((part, index) => {
                if (part.startsWith('@')) {
                  const patientName = part.substring(1);
                  const patient = patients.find(p => p.name === patientName);
                  return (
                    <span key={index} className="mentioned-patient-chip">
                      {part}
                      {patient && (
                        <span className="patient-chip-tooltip">
                          {patient.cancer} • {patient.stage} • Score: {patient.score}%
                        </span>
                      )}
                    </span>
                  );
                }
                return part;
              })}
              {query.length === 0 && (
                <span className="composer-placeholder">
                  Ask me anything about cancer genomics... Try @Rajesh Kumar or @Priya Sharma
                </span>
              )}
            </div>
            <input
              className="composer-input-hidden"
              value={query}
              onChange={handleQueryChange}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !isSendDisabled) {
                  e.preventDefault();
                  handleSendQuery();
                }
              }}
              placeholder=""
            />
          </div>
          <button
            type="button"
            className="composer-send"
            aria-label="Send"
            disabled={isSendDisabled}
            title={isSendDisabled ? 'Type a query to enable' : 'Send'}
            onClick={handleSendQuery}
          >
            {/* arrow drawn via CSS ::before for maximal compatibility */}
          </button>
        </div>
      </main>

      {/* Patient Detail Panel */}
      {selectedPatient && (
        <PatientDetail 
          patient={selectedPatient} 
          onClose={handleClosePatientDetail} 
        />
      )}
    </div>
  )
}

export default App
