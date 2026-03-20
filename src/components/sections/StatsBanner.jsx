import FadeIn from "../ui/FadeIn";
import { STATS } from "../../data/siteData";

export default function StatsBanner() {
  return (
    <section
      aria-label="Key statistics"
      style={{
        background: "var(--warm-dark)",
        padding: "clamp(48px, 7vw, 72px) clamp(24px, 6vw, 80px)",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
            gap: "32px",
          }}
        >
          {STATS.map((stat, i) => (
            <FadeIn key={stat.label} delay={`${i * 0.1}s`}>
              <div style={{ textAlign: "center" }}>
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(44px, 5vw, 64px)",
                    fontWeight: 700,
                    color: "var(--terra-light)",
                    lineHeight: 1,
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontSize: "11px",
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.45)",
                    marginTop: "10px",
                  }}
                >
                  {stat.label}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}