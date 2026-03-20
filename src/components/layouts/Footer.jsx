import { FOOTER, NAV_LINKS } from "../../data/siteData";

export default function Footer() {
  const scrollTo = (id) =>
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer
      role="contentinfo"
      style={{
        background: "var(--warm-dark)",
        color: "rgba(255,255,255,0.45)",
        padding: "40px clamp(24px, 6vw, 80px)",
      }}
    >
      <div
        style={{
          maxWidth: "1100px", margin: "0 auto",
          display: "flex", justifyContent: "space-between",
          alignItems: "center", flexWrap: "wrap", gap: "20px",
        }}
      >
        {/* Brand */}
        <div
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "22px", color: "#fff", fontWeight: 700,
          }}
        >
          {FOOTER.brand}
          <span style={{ color: "var(--terra-light)" }}>.</span>
        </div>

        {/* Nav links */}
        <nav aria-label="Footer navigation">
          <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
            {NAV_LINKS.map(link => (
              <span
                key={link}
                onClick={() => scrollTo(link)}
                tabIndex={0}
                onKeyDown={e => e.key === "Enter" && scrollTo(link)}
                style={{
                  fontSize: "11px", letterSpacing: "0.14em",
                  textTransform: "uppercase", cursor: "pointer",
                  transition: "color 0.2s ease",
                  color: "rgba(255,255,255,0.45)",
                }}
                onMouseEnter={e => (e.target.style.color = "var(--terra-light)")}
                onMouseLeave={e => (e.target.style.color = "rgba(255,255,255,0.45)")}
              >
                {link}
              </span>
            ))}
          </div>
        </nav>

        {/* Copyright */}
        <p style={{ fontSize: "12px" }}>{FOOTER.copy}</p>

        {/* Socials */}
        <div style={{ display: "flex", gap: "20px" }}>
          {FOOTER.socials.map(s => (
            <span
              key={s}
              tabIndex={0}
              role="link"
              style={{
                fontSize: "11px", letterSpacing: "0.12em",
                textTransform: "uppercase", cursor: "pointer",
                transition: "color 0.2s ease",
                color: "rgba(255,255,255,0.45)",
              }}
              onMouseEnter={e => (e.target.style.color = "var(--terra-light)")}
              onMouseLeave={e => (e.target.style.color = "rgba(255,255,255,0.45)")}
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
}