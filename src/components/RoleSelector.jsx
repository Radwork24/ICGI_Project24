import './RoleSelector.css';

const RoleSelector = ({ onRoleSelect }) => {
  return (
    <div className="role-selector">
      {/* Header */}
      <header className="role-header">
        <div className="role-brand">
          <div className="role-logo">ICGI</div>
          <div className="role-subtitle">Indian Cancer Genome Intelligence</div>
        </div>
      </header>

      {/* Main Content */}
      <main className="role-main">
        <div className="role-content">
          {/* Welcome Section */}
          <div className="role-welcome">
            <div className="role-date">December 2024 • Platform</div>
            <h1 className="role-title">Welcome to ICGI</h1>
            <p className="role-description">
              Select your role to access personalized cancer genomics intelligence and AI-powered patient analysis tools.
            </p>
          </div>

          {/* Role Selection Cards */}
          <div className="role-cards">
            <div className="role-card" onClick={() => onRoleSelect('doctor')}>
              <div className="role-card-icon">👨‍⚕️</div>
              <h3 className="role-card-title">Doctor</h3>
              <p className="role-card-description">
                Access comprehensive patient profiles, genomic analysis, treatment recommendations, and AI-powered clinical insights.
              </p>
              <div className="role-card-button">
                <span>Access Doctor Portal</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>

            <div className="role-card" onClick={() => onRoleSelect('patient')}>
              <div className="role-card-icon">👤</div>
              <h3 className="role-card-title">Patient</h3>
              <p className="role-card-description">
                View your personalized genomic profile, treatment progress, and get answers to your cancer-related questions.
              </p>
              <div className="role-card-button">
                <span>Access Patient Portal</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div className="role-features">
            <h2 className="role-features-title">Platform Features</h2>
            <div className="role-features-grid">
              <div className="role-feature">
                <div className="role-feature-icon">🧬</div>
                <h4>Genomic Analysis</h4>
                <p>Advanced cancer genome sequencing and mutation analysis</p>
              </div>
              <div className="role-feature">
                <div className="role-feature-icon">🤖</div>
                <h4>AI-Powered Insights</h4>
                <p>Intelligent treatment recommendations and prognosis analysis</p>
              </div>
              <div className="role-feature">
                <div className="role-feature-icon">📊</div>
                <h4>Patient Management</h4>
                <p>Comprehensive patient profiles and treatment tracking</p>
              </div>
              <div className="role-feature">
                <div className="role-feature-icon">🔬</div>
                <h4>Research Tools</h4>
                <p>Access to latest cancer research and clinical trials</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="role-footer">
        <div className="role-footer-content">
          <p>© 2024 ICGI - Indian Cancer Genome Intelligence Platform</p>
          <div className="role-footer-links">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default RoleSelector;
