import FadeIn from "../ui/FadeIn";
import { SERVICES, SERVICES_META } from "../../data/siteData";

export default function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      style={{
        background: "var(--ivory)",
        padding: "clamp(72px, 10vw, 128px) clamp(24px, 6vw, 80px)",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>

        {/* Header */}
        <FadeIn>
          <div style={{ textAlign: "center", marginBottom: "72px" }}>
            <span className="overline">{SERVICES_META.overline}</span>
            <h2
              id="services-heading"
              className="section-heading"
              style={{ fontSize: "clamp(36px, 4vw, 52px)" }}
            >
              {SERVICES_META.headingLine1}
              <br />
              <em style={{ color: "var(--terra)", fontStyle: "italic" }}>
                {SERVICES_META.headingLine2}
              </em>
            </h2>
          </div>
        </FadeIn>

        {/* Cards grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "24px",
          }}
        >
          {SERVICES.map((service, i) => (
            <FadeIn key={service.title} delay={`${i * 0.1}s`}>
              <article className="service-card">
                {/* Icon box */}
                <div
                  style={{
                    width: "52px", height: "52px",
                    background: "var(--warm-bg)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    marginBottom: "22px",
                    transition: "background 0.3s ease",
                  }}
                >
                  <svg
                    width="24" height="24"
                    fill="none"
                    stroke="var(--terra)"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d={service.icon} />
                  </svg>
                </div>

                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "26px", fontWeight: 600,
                    marginBottom: "12px", color: "var(--warm-dark)",
                  }}
                >
                  {service.title}
                </h3>

                <p
                  style={{
                    fontSize: "15px", lineHeight: 1.78,
                    color: "var(--warm-mid)", fontWeight: 300,
                  }}
                >
                  {service.desc}
                </p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}