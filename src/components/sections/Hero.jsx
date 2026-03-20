import { HERO, STATS } from "../../data/siteData";

export default function Hero() {
  const scrollTo = (id) =>
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      aria-label="Hero"
      style={{ minHeight: "100vh", paddingTop: "68px", background: "var(--ivory)" }}
    >
      <div
        style={{
          display: "flex", minHeight: "calc(100vh - 68px)",
          flexWrap: "wrap",
        }}
      >
        {/* ── Text side ── */}
        <div
          style={{
            flex: "1 1 55%", minWidth: "300px",
            padding: "clamp(48px, 8vw, 100px) clamp(24px, 6vw, 80px)",
            display: "flex", flexDirection: "column", justifyContent: "center",
          }}
        >
          {/* Overline */}
          <p className="overline hero-animate-1">{HERO.overline}</p>

          {/* Heading */}
          <h1
            className="section-heading hero-animate-2"
            style={{ fontSize: "clamp(52px, 7vw, 88px)", marginBottom: "28px" }}
          >
            {HERO.headingLine1}
            <br />
            <em style={{ color: "var(--terra)", fontStyle: "italic" }}>
              {HERO.headingLine2}
            </em>
            <br />
            {HERO.headingLine3}
          </h1>

          {/* Bio */}
          <p
            className="hero-animate-3"
            style={{
              fontSize: "17px", lineHeight: 1.78,
              color: "var(--warm-mid)", fontWeight: 300,
              maxWidth: "480px", marginBottom: "40px",
            }}
          >
            {HERO.bio}
          </p>

          {/* CTAs */}
          <div
            className="hero-animate-4"
            style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}
          >
            <button className="btn-primary" onClick={() => scrollTo("Contact")}>
              {HERO.ctaPrimary}
            </button>
            <button className="btn-outline-dark" onClick={() => scrollTo("About")}>
              {HERO.ctaSecondary}
            </button>
          </div>

          {/* Stats strip */}
          <div
            className="hero-animate-5"
            style={{
              display: "flex", gap: "32px", marginTop: "56px",
              paddingTop: "32px",
              borderTop: "1px solid var(--border)",
              flexWrap: "wrap",
            }}
          >
            {STATS.map(s => (
              <div key={s.label}>
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "38px", fontWeight: 700,
                    color: "var(--terra)", lineHeight: 1,
                  }}
                >
                  {s.value}
                </div>
                <div
                  style={{
                    fontSize: "11px", color: "var(--warm-gray)",
                    letterSpacing: "0.1em", marginTop: "4px",
                    textTransform: "uppercase",
                  }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Image side ── */}
        <div
          className="hero-img-animate"
          style={{
            flex: "1 1 40%", minWidth: "280px",
            position: "relative", overflow: "hidden", minHeight: "480px",
          }}
        >
          <img
            src={HERO.image}
            alt={HERO.imageAlt}
            style={{
              width: "100%", height: "100%",
              objectFit: "cover", objectPosition: "center top",
              display: "block",
            }}
          />

          {/* Availability badge */}
          <div
            style={{
              position: "absolute", bottom: "32px", left: "32px",
              background: "#ffffff",
              padding: "20px 24px",
              boxShadow: "0 8px 32px rgba(0,0,0,0.14)",
              maxWidth: "220px",
              animation: "heroFadeUp 0.9s ease both",
              animationDelay: "0.9s",
            }}
          >
            <div
              style={{
                fontSize: "10px", letterSpacing: "0.18em",
                textTransform: "uppercase", color: "var(--terra)", fontWeight: 600,
              }}
            >
              {HERO.badgeLabel}
            </div>
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "20px", fontWeight: 600,
                marginTop: "4px", color: "var(--warm-dark)",
              }}
            >
              {HERO.badgeText}
            </div>
          </div>

          {/* Decorative terra accent bar */}
          <div
            style={{
              position: "absolute", top: 0, right: 0,
              width: "6px", height: "100%",
              background: "linear-gradient(to bottom, var(--terra), var(--terra-light))",
            }}
          />
        </div>
      </div>
    </section>
  );
}