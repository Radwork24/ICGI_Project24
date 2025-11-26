import './Landing.css';

const Landing = ({ onEnter }) => {
  return (
    <div className="landing">
      <header className="landing-header">
        <div className="landing-brand">ICGI</div>
        <button className="landing-login">Log in</button>
      </header>

      <main className="landing-main">
        <div className="landing-meta">October 19, 2025 &nbsp;&nbsp; Product</div>
        <h1 className="landing-title">Introducing ICGI</h1>

        <div className="landing-cta-row">
          <button className="landing-cta" onClick={onEnter}>Try ICGI</button>
          <button className="landing-cta secondary" onClick={onEnter}>Try ICGI for Work</button>
        </div>

        <div className="landing-subtools">
          <button className="landing-listen">
            <span className="dot" /> Listen to article
          </button>
          <div className="landing-duration">0:04</div>
          <div className="landing-share">Share</div>
        </div>

        <section className="landing-body">
          <p>
            We've developed ICGI, a specialized cancer assistant that connects doctors, patients, and researchers.
            This interactive platform enables seamless sharing of medical insights, personalized treatment guidance,
            and access to the latest oncology research in a secure, collaborative environment.
          </p>
        </section>
      </main>
    </div>
  );
};

export default Landing;
