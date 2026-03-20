import { useState, useEffect, useCallback } from "react";
import { NAV_LINKS } from "../../data/siteData";

export default function Navbar() {
  const [scrolled, setScrolled]     = useState(false);
  const [menuOpen, setMenuOpen]     = useState(false);
  const [activeSection, setActive]  = useState("");

  // ── Scroll detection ──────────────────────────────────────────────────────
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ── Active section via IntersectionObserver ───────────────────────────────
  useEffect(() => {
    const sections = NAV_LINKS.map(l => document.getElementById(l.toLowerCase())).filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    sections.forEach(s => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // ── Body scroll lock when mobile menu open ────────────────────────────────
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  // ── Close mobile menu on resize to desktop ────────────────────────────────
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 769) setMenuOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // ── Smooth scroll helper ──────────────────────────────────────────────────
  const scrollTo = useCallback((id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  }, []);

  return (
    <>
      {/* ── Main bar ── */}
      <nav
        aria-label="Main navigation"
        style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
          padding: "0 clamp(24px, 6vw, 80px)",
          height: "68px",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          background: scrolled ? "rgba(253,250,246,0.95)" : "transparent",
          backdropFilter: scrolled ? "blur(14px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(14px)" : "none",
          borderBottom: scrolled ? "1px solid var(--border)" : "none",
          transition: "background 0.35s ease, border-color 0.35s ease, backdrop-filter 0.35s ease",
        }}
      >
        {/* Brand */}
        <a
          href="/"
          aria-label="Evalyne Maina — Home"
          style={{
            fontFamily: "var(--font-display, 'Cormorant Garamond', serif)",
            fontSize: "22px", fontWeight: 700, letterSpacing: "0.02em",
            color: "var(--warm-dark)", textDecoration: "none",
          }}
        >
          Evalyne<span style={{ color: "var(--terra)" }}>.</span>
        </a>

        {/* Desktop nav */}
        <div
          className="desktop-only"
          style={{ display: "flex", gap: "36px", alignItems: "center" }}
          role="menubar"
        >
          {NAV_LINKS.map(link => (
            <span
              key={link}
              role="menuitem"
              tabIndex={0}
              className={`nav-link ${activeSection === link.toLowerCase() ? "active" : ""}`}
              onClick={() => scrollTo(link)}
              onKeyDown={e => e.key === "Enter" && scrollTo(link)}
            >
              {link}
            </span>
          ))}
          <button
            className="btn-primary"
            style={{ padding: "10px 24px", fontSize: "12px" }}
            onClick={() => scrollTo("Contact")}
          >
            Hire Me
          </button>
        </div>

        {/* Hamburger — mobile only */}
        <button
          className="mobile-only"
          style={{
            display: "none", flexDirection: "column", gap: "5px",
            background: "none", border: "none", cursor: "pointer",
            padding: "6px", zIndex: 110,
          }}
          onClick={() => setMenuOpen(prev => !prev)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          <span
            className="hamburger-line"
            style={{ transform: menuOpen ? "translateY(6.5px) rotate(45deg)" : "none" }}
          />
          <span className="hamburger-line" style={{ opacity: menuOpen ? 0 : 1 }} />
          <span
            className="hamburger-line"
            style={{ transform: menuOpen ? "translateY(-6.5px) rotate(-45deg)" : "none" }}
          />
        </button>
      </nav>

      {/* ── Mobile overlay menu ── */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        style={{
          position: "fixed", inset: 0, zIndex: 90,
          background: "var(--ivory)",
          display: "flex", flexDirection: "column",
          alignItems: "center", justifyContent: "center",
          gap: "44px",
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "auto" : "none",
          transition: "opacity 0.35s ease",
        }}
      >
        {NAV_LINKS.map((link, i) => (
          <span
            key={link}
            onClick={() => scrollTo(link)}
            tabIndex={menuOpen ? 0 : -1}
            onKeyDown={e => e.key === "Enter" && scrollTo(link)}
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(38px, 10vw, 56px)",
              fontWeight: 600,
              color: activeSection === link.toLowerCase() ? "var(--terra)" : "var(--warm-dark)",
              cursor: "pointer",
              transition: "color 0.2s ease, transform 0.3s ease",
              transform: menuOpen ? "translateY(0)" : "translateY(20px)",
              transitionDelay: menuOpen ? `${i * 0.06}s` : "0s",
              opacity: menuOpen ? 1 : 0,
            }}
          >
            {link}
          </span>
        ))}
        <button
          className="btn-primary"
          style={{ marginTop: "8px" }}
          tabIndex={menuOpen ? 0 : -1}
          onClick={() => scrollTo("Contact")}
        >
          Hire Me
        </button>
      </div>
    </>
  );
}