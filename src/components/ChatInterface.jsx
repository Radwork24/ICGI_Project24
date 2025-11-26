import { useState, useRef, useEffect } from 'react';
import './ChatInterface.css';

const ChatInterface = ({ patients, onSendMessage }) => {
  const [message, setMessage] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const [mentionStart, setMentionStart] = useState(-1);
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'ai',
      content: 'Hello! I\'m your ICGI AI assistant. You can ask me anything about cancer genomics, patient analysis, or treatment recommendations. Try mentioning a patient with @ to get personalized insights!',
      timestamp: new Date()
    }
  ]);
  const textareaRef = useRef(null);
  const suggestionsRef = useRef(null);

  // Handle @ mention detection
  const handleInputChange = (e) => {
    const value = e.target.value;
    const cursorPosition = e.target.selectionStart;
    
    setMessage(value);
    
    // Find @ mentions
    const mentionMatch = value.substring(0, cursorPosition).match(/@(\w*)$/);
    
    if (mentionMatch) {
      const query = mentionMatch[1].toLowerCase();
      setMentionStart(cursorPosition - mentionMatch[0].length);
      
      // Filter patients based on query
      const filteredPatients = patients.filter(patient => 
        patient.name.toLowerCase().includes(query)
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
    const beforeMention = message.substring(0, mentionStart);
    const afterCursor = message.substring(textareaRef.current.selectionStart);
    
    const newMessage = beforeMention + `@${patient.name}` + afterCursor;
    setMessage(newMessage);
    setShowSuggestions(false);
    setSuggestions([]);
    
    // Focus back to textarea
    setTimeout(() => {
      textareaRef.current.focus();
      textareaRef.current.setSelectionRange(
        beforeMention.length + patient.name.length + 1,
        beforeMention.length + patient.name.length + 1
      );
    }, 0);
  };

  // Handle message sending
  const handleSendMessage = async () => {
    if (!message.trim()) return;

    const userMessage = {
      id: Date.now(),
      type: 'user',
      content: message,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setMessage('');

    // Extract mentioned patients
    const mentionedPatients = message.match(/@(\w+(?:\s+\w+)*)/g);
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
          message: message,
          mentionedPatients: mentionedPatientData
        })
      });

      const data = await response.json();

      const aiMessage = {
        id: Date.now() + 1,
        type: 'ai',
        content: data.response,
        timestamp: new Date(),
        mentionedPatients: mentionedPatientData
      };

      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
      
      const errorMessage = {
        id: Date.now() + 1,
        type: 'ai',
        content: 'Sorry, I encountered an error. Please make sure the server is running.',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, errorMessage]);
    }
  };

  // Handle Enter key
  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  // Close suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (suggestionsRef.current && !suggestionsRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="chat-interface">
      {/* Messages */}
      <div className="chat-messages">
        {messages.map((msg) => (
          <div key={msg.id} className={`message ${msg.type}`}>
            <div className="message-content">
              <div className="message-header">
                <span className="message-sender">
                  {msg.type === 'ai' ? '🤖 ICGI AI' : '👤 You'}
                </span>
                <span className="message-time">
                  {msg.timestamp.toLocaleTimeString()}
                </span>
              </div>
              <div className="message-text">
                {msg.content.split(/(@\w+(?:\s+\w+)*)/).map((part, index) => {
                  if (part.startsWith('@')) {
                    const patientName = part.substring(1);
                    const patient = patients.find(p => p.name === patientName);
                    return (
                      <span key={index} className="mentioned-patient">
                        {part}
                        {patient && (
                          <span className="patient-tooltip">
                            {patient.cancer} • {patient.stage} • Score: {patient.score}%
                          </span>
                        )}
                      </span>
                    );
                  }
                  return part;
                })}
              </div>
              {msg.mentionedPatients && msg.mentionedPatients.length > 0 && (
                <div className="message-context">
                  <div className="context-label">Referenced Patients:</div>
                  {msg.mentionedPatients.map((patient, index) => (
                    <div key={index} className="context-patient">
                      <strong>{patient.name}</strong> - {patient.cancer} ({patient.stage})
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Input Area */}
      <div className="chat-input-container">
        {showSuggestions && suggestions.length > 0 && (
          <div ref={suggestionsRef} className="patient-suggestions">
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
        
        <div className="chat-input-wrapper">
          <textarea
            ref={textareaRef}
            className="chat-input"
            placeholder="Ask me anything about cancer genomics... Try @Rajesh Kumar or @Priya Sharma"
            value={message}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
            rows="3"
          />
          <button
            className="chat-send-button"
            onClick={handleSendMessage}
            disabled={!message.trim()}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;
