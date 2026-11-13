
function Contact() {
  return (
    <main className="contact-page">
      {/* Page heading */}
      <header className="contact-header">
        <span className="issue-number">ISSUE #005</span>
        <h1>GET IN TOUCH</h1>
        <p>
          Have a project in mind? Let's make something
          amazing together.
        </p>
      </header>

      {/* Contact links */}
      <section className="contact-cards">
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=bien.manag@gmail.com"
          target="_blank"
          rel="noreferrer"
          className="contact-card email-card"
        >
          <span className="contact-icon">✉</span>
          <h2>EMAIL ME</h2>
          <p>bien.manag@gmail.com</p>
          <span className="contact-arrow">↗</span>
        </a>

        <a
          href="https://www.linkedin.com/in/bien-managbanag/"
          target="_blank"
          rel="noreferrer"
          className="contact-card linkedin-card"
        >
          <span className="contact-icon">in</span>
          <h2>LINKEDIN</h2>
          <p>Let's connect professionally.</p>
          <span className="contact-arrow">↗</span>
        </a>

        <a
          href="https://github.com/Bien-Managbanag"
          target="_blank"
          rel="noreferrer"
          className="contact-card github-card"
        >
          <span className="contact-icon">⌘</span>
          <h2>GITHUB</h2>
          <p>Check out my projects.</p>
          <span className="contact-arrow">↗</span>
        </a>
      </section>

      {/* Location and availability */}
      <section className="contact-info">
        <div className="info-panel location-panel">
          <span className="info-icon">📍</span>
          <h3>LOCATION</h3>
          <p>Dublin, Ireland</p>
        </div>

        <div className="info-panel availability-panel">
          <span className="info-icon">⚡</span>
          <h3>AVAILABILITY</h3>
          <p className="availability-label">
            CURRENTLY LOOKING FOR
          </p>
          <p>Graduate opportunities and software development roles.</p>
        </div>
      </section>
    </main>
  );
}

export default Contact;
