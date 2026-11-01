function Ad() {
  return (
    <section className="ad-page">
      <h1 className="ad-page-title">Advertisements</h1>

      <div className="ad-card">
        <div className="ad-logo-wrap">
          <img
            src="/images/aile.jpeg"
            alt="Aile Jewelry Logo"
            className="ad-logo"
          />
        </div>

        <h2>Aile Jewelry</h2>
        <span className="ad-divider"></span>

        <a
          href="https://www.instagram.com/ailejewlery/"
          target="_blank"
          rel="noopener noreferrer"
          className="instagram-link"
        >
          <svg
            className="instagram-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="3" y="3" width="18" height="18" rx="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
          </svg>
          <span>Visit our Instagram page</span>
        </a>
      </div>
    </section>
  );
}

export default Ad;