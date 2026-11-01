const ads = [
  {
    id: 1,
    name: "Aile Jewelry",
    logo: "/images/aile.jpeg",
    instagram: "https://www.instagram.com/ailejewlery/",
  },
  {
    id: 2,
    name: "La Viva Health",
    logo: "/images/laviva.jpeg",
    facebook: "https://www.facebook.com/LaVivaHealthinc/",
  },
];

function InstagramIcon() {
  return (
    <svg
      className="social-icon"
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
  );
}

function FacebookIcon() {
  return (
    <svg
      className="social-icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function Ad() {
  return (
    <section className="ad-page">
      <h1 className="ad-page-title">Advertisements</h1>

      <div className="ad-list">
        {ads.map((ad) => (
          <div className="ad-card" key={ad.id}>
            <div className="ad-logo-wrap">
              <img src={ad.logo} alt={`${ad.name} Logo`} className="ad-logo" />
            </div>

            <h2>{ad.name}</h2>
            <span className="ad-divider"></span>

            <div className="ad-links">
              {ad.instagram && (
                <a
                  href={ad.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="instagram-link"
                >
                  <InstagramIcon />
                  <span>Visit our Instagram page</span>
                </a>
              )}

              {ad.facebook && (
                <a
                  href={ad.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="instagram-link facebook-link"
                >
                  <FacebookIcon />
                  <span>Visit our Facebook page</span>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Ad;