import FadeIn from "../ui/FadeIn";
import { TESTIMONIALS, TESTIMONIALS_META } from "../../data/siteData";

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      style={{
        background: "var(--warm-bg)",
        padding: "clamp(72px, 10vw, 128px) clamp(24px, 6vw, 80px)",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>

        {/* Header */}
        <FadeIn>
          <div style={{ textAlign: "center", marginBottom: "72px" }}>
            <span className="overline">{TESTIMONIALS_META.overline}</span>
            <h2
              id="testimonials-heading"
              className="section-heading"
              style={{ fontSize: "clamp(36px, 4vw, 52px)" }}
            >
              {TESTIMONIALS_META.heading}
            </h2>
          </div>
        </FadeIn>

        {/* Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "24px",
          }}
        >
          {TESTIMONIALS.map((t, i) => (
            <FadeIn key={t.name} delay={`${i * 0.12}s`}>
              <blockquote className="testimonial-card">
                <p
                  style={{
                    fontSize: "15px", lineHeight: 1.88,
                    color: "var(--warm-mid)", fontWeight: 300,
                    marginBottom: "28px",
                    position: "relative", zIndex: 1,
                  }}
                >
                  {t.quote}
                </p>

                <footer style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                  <img
                    src={t.img}
                    alt={t.name}
                    width={48}
                    height={48}
                    style={{ borderRadius: "50%", objectFit: "cover", flexShrink: 0 }}
                  />
                  <div>
                    <cite
                      style={{
                        fontStyle: "normal",
                        fontWeight: 600, fontSize: "15px",
                        color: "var(--warm-dark)", display: "block",
                      }}
                    >
                      {t.name}
                    </cite>
                    <span style={{ fontSize: "13px", color: "var(--warm-gray)" }}>
                      {t.role}
                    </span>
                  </div>
                </footer>
              </blockquote>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}