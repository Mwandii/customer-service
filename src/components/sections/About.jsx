import FadeIn from "../ui/FadeIn";
import { ABOUT } from "../../data/siteData";

export default function About() {
  const scrollTo = (id) =>
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      style={{
        background: "var(--warm-bg)",
        padding: "clamp(72px, 10vw, 128px) clamp(24px, 6vw, 80px)",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div
          style={{
            display: "flex", gap: "clamp(40px, 6vw, 80px)",
            alignItems: "center", flexWrap: "wrap-reverse",
          }}
        >
          {/* ── Image column ── */}
          <FadeIn direction="left" style={{ flex: "1 1 42%", minWidth: "280px" }}>
            <div style={{ position: "relative" }}>
              <img
                src={ABOUT.image}
                alt={ABOUT.imageAlt}
                style={{
                  width: "100%", height: "520px",
                  objectFit: "cover", display: "block",
                }}
              />
              {/* Floating badge */}
              <div
                style={{
                  position: "absolute", bottom: "-24px", right: "-24px",
                  background: "var(--terra)", color: "#ffffff",
                  padding: "28px 32px",
                  fontFamily: "var(--font-display)",
                  boxShadow: "0 12px 32px rgba(194,98,47,0.3)",
                }}
              >
                <div style={{ fontSize: "52px", fontWeight: 700, lineHeight: 1 }}>6+</div>
                <div style={{ fontSize: "13px", fontWeight: 400, marginTop: "4px", opacity: 0.9 }}>
                  Years of Excellence
                </div>
              </div>
            </div>
          </FadeIn>

          {/* ── Text column ── */}
          <div style={{ flex: "1 1 50%", minWidth: "280px" }}>
            <FadeIn direction="right">
              <span className="overline">{ABOUT.overline}</span>
            </FadeIn>

            <FadeIn direction="right" delay="0.1s">
              <h2
                id="about-heading"
                className="section-heading"
                style={{ fontSize: "clamp(36px, 4vw, 52px)", marginBottom: "24px" }}
              >
                {ABOUT.headingLine1}
                <br />
                {ABOUT.headingLine2}
              </h2>
            </FadeIn>

            <FadeIn direction="right" delay="0.2s">
              <p
                style={{
                  fontSize: "16px", lineHeight: 1.88,
                  color: "var(--warm-mid)", fontWeight: 300, marginBottom: "18px",
                }}
              >
                {ABOUT.para1}
              </p>
            </FadeIn>

            <FadeIn direction="right" delay="0.3s">
              <p
                style={{
                  fontSize: "16px", lineHeight: 1.88,
                  color: "var(--warm-mid)", fontWeight: 300, marginBottom: "36px",
                }}
              >
                {ABOUT.para2}
              </p>
            </FadeIn>

            {/* Skill chips */}
            <FadeIn direction="right" delay="0.4s">
              <div
                style={{
                  display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "36px",
                }}
              >
                {ABOUT.skills.map(skill => (
                  <span
                    key={skill}
                    style={{
                      padding: "7px 16px",
                      border: "1px solid var(--border)",
                      fontSize: "12px", color: "var(--warm-mid)",
                      background: "#ffffff", letterSpacing: "0.04em",
                      transition: "border-color 0.2s ease, color 0.2s ease",
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.borderColor = "var(--terra)";
                      e.currentTarget.style.color = "var(--terra)";
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.borderColor = "var(--border)";
                      e.currentTarget.style.color = "var(--warm-mid)";
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </FadeIn>

            <FadeIn direction="right" delay="0.5s">
              <button className="btn-primary" onClick={() => scrollTo("Contact")}>
                {ABOUT.cta}
              </button>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}