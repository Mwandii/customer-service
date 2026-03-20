import { FOOTER, NAV_LINKS } from "../../data/siteData";

const SOCIALS = [
  {
    name: "LinkedIn",
    href: "https://linkedin.com",
    icon: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z",
  },
  {
    name: "Email",
    href: "mailto:evelyneminor@gmail.com",
    icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/254740673394",
    icon: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.978-1.418A9.96 9.96 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z",
  },
];

export default function Footer() {
  const scrollTo = (id) =>
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer
      role="contentinfo"
      style={{
        background: "var(--warm-dark)",
        padding: "72px clamp(24px, 6vw, 80px) 0",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>

        {/* ── Top grid ── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.8fr 1fr 1fr",
            gap: "clamp(32px, 5vw, 80px)",
            paddingBottom: "56px",
            borderBottom: "1px solid rgba(255,255,255,0.08)",
          }}
        >

          {/* Col 1 — Brand + tagline */}
          <div>
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "32px",
                fontWeight: 700,
                color: "#ffffff",
                marginBottom: "16px",
                letterSpacing: "0.01em",
              }}
            >
              Evalyne<span style={{ color: "var(--terra-light)" }}>.</span>
            </div>
            <p
              style={{
                fontSize: "14px",
                lineHeight: 1.8,
                color: "rgba(255,255,255,0.45)",
                fontWeight: 300,
                maxWidth: "280px",
              }}
            >
              Customer Experience Specialist based in Nairobi, Kenya — turning every interaction into a lasting impression.
            </p>

            {/* Terra accent line */}
            <div
              style={{
                width: "40px",
                height: "2px",
                background: "var(--terra)",
                marginTop: "28px",
              }}
            />
          </div>

          {/* Col 2 — Navigation */}
          <div>
            <p
              style={{
                fontSize: "10px",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                fontWeight: 600,
                color: "rgba(255,255,255,0.3)",
                marginBottom: "24px",
              }}
            >
              Navigation
            </p>
            <nav aria-label="Footer navigation">
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "14px" }}>
                {NAV_LINKS.map(link => (
                  <li key={link}>
                    <span
                      onClick={() => scrollTo(link)}
                      tabIndex={0}
                      onKeyDown={e => e.key === "Enter" && scrollTo(link)}
                      role="link"
                      style={{
                        fontSize: "14px",
                        color: "rgba(255,255,255,0.55)",
                        cursor: "pointer",
                        transition: "color 0.2s ease",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "8px",
                      }}
                      onMouseEnter={e => (e.currentTarget.style.color = "#ffffff")}
                      onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.55)")}
                    >
                      <span
                        style={{
                          display: "inline-block",
                          width: "16px",
                          height: "1px",
                          background: "var(--terra)",
                          flexShrink: 0,
                        }}
                      />
                      {link}
                    </span>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Col 3 — Socials */}
          <div>
            <p
              style={{
                fontSize: "10px",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                fontWeight: 600,
                color: "rgba(255,255,255,0.3)",
                marginBottom: "24px",
              }}
            >
              Connect
            </p>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "14px" }}>
              {SOCIALS.map(s => (
                <li key={s.name}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.name}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "12px",
                      fontSize: "14px",
                      color: "rgba(255,255,255,0.55)",
                      textDecoration: "none",
                      transition: "color 0.2s ease",
                    }}
                    onMouseEnter={e => (e.currentTarget.style.color = "var(--terra-light)")}
                    onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.55)")}
                  >
                    <svg
                      width="18" height="18"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      style={{ flexShrink: 0 }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d={s.icon} />
                    </svg>
                    {s.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "12px",
            padding: "20px 0",
          }}
        >
          <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.25)" }}>
            {FOOTER.copy}
          </p>
          <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.25)" }}>
            Nairobi, Kenya
          </p>
        </div>

      </div>
    </footer>
  );
}