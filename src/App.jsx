import { useState, useEffect, useRef } from "react";

const NAV_LINKS = ["About", "Services", "Testimonials", "Contact"];

const SERVICES = [
  {
    title: "Customer Support",
    desc: "Responsive, empathetic support across email, chat, and phone — resolving issues on first contact.",
    icon: "M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z",
  },
  {
    title: "CRM Management",
    desc: "Proficient in Salesforce, Zendesk, and HubSpot — keeping every customer record clean and actionable.",
    icon: "M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
  },
  {
    title: "Conflict Resolution",
    desc: "Turning frustrated customers into loyal advocates through calm, structured de-escalation techniques.",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
  },
  {
    title: "Quality Assurance",
    desc: "Monitoring interactions and coaching teams to maintain consistently high service standards.",
    icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z",
  },
];

const TESTIMONIALS = [
  {
    quote: "Evalyne transformed our support team's approach entirely. Customer satisfaction scores jumped 40% in just three months under her guidance.",
    name: "David Ochieng",
    role: "Operations Manager, Safaricom",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face",
  },
  {
    quote: "Her ability to handle escalations with composure and empathy is unmatched. Every client interaction felt personal, not transactional.",
    name: "Amara Nwosu",
    role: "Head of CX, Jumia Kenya",
    img: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=80&h=80&fit=crop&crop=face",
  },
  {
    quote: "Working with Evalyne meant our team always had clear direction and reliable processes. She is the backbone of great customer experience.",
    name: "Peter Kamau",
    role: "Director, Kenya Commercial Bank",
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=80&h=80&fit=crop&crop=face",
  },
];

const STATS = [
  { value: "6+", label: "Years Experience" },
  { value: "98%", label: "Customer Satisfaction" },
  { value: "12K+", label: "Cases Resolved" },
  { value: "4", label: "Industries Served" },
];

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [formStatus, setFormStatus] = useState(null);
  const heroRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus("success");
  };

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: "#FDFAF6", color: "#1C1208", overflowX: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&family=DM+Sans:wght@300;400;500;600&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --terra: #C2622F;
          --terra-light: #E8895C;
          --ivory: #FDFAF6;
          --warm-dark: #1C1208;
          --warm-mid: #6B4C2A;
          --warm-gray: #9C8572;
          --warm-bg: #F5EFE6;
          --border: #E2D5C3;
        }

        html { scroll-behavior: smooth; }

        .nav-link {
          font-size: 13px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          font-weight: 500;
          color: var(--warm-dark);
          cursor: pointer;
          position: relative;
          text-decoration: none;
          transition: color 0.2s;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -2px; left: 0;
          width: 0; height: 1px;
          background: var(--terra);
          transition: width 0.3s ease;
        }
        .nav-link:hover { color: var(--terra); }
        .nav-link:hover::after { width: 100%; }

        .hero-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
        }

        .service-card {
          background: white;
          border: 1px solid var(--border);
          padding: 36px 28px;
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
          cursor: default;
        }
        .service-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 40px rgba(194,98,47,0.12);
          border-color: var(--terra-light);
        }

        .stat-item {
          text-align: center;
          padding: 24px 16px;
        }

        .testimonial-card {
          background: white;
          border: 1px solid var(--border);
          padding: 36px 32px;
          position: relative;
        }
        .testimonial-card::before {
          content: '"';
          font-family: 'Cormorant Garamond', serif;
          font-size: 96px;
          color: var(--terra-light);
          opacity: 0.3;
          position: absolute;
          top: 8px; left: 24px;
          line-height: 1;
        }

        .form-input {
          width: 100%;
          padding: 14px 16px;
          border: 1px solid var(--border);
          background: white;
          font-family: 'DM Sans', sans-serif;
          font-size: 15px;
          color: var(--warm-dark);
          outline: none;
          transition: border-color 0.2s;
        }
        .form-input:focus { border-color: var(--terra); }
        .form-input::placeholder { color: var(--warm-gray); }

        .btn-primary {
          display: inline-block;
          background: var(--terra);
          color: white;
          padding: 14px 36px;
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          border: none;
          cursor: pointer;
          transition: background 0.2s, transform 0.15s;
        }
        .btn-primary:hover { background: #A8501F; transform: translateY(-1px); }

        .btn-outline {
          display: inline-block;
          background: transparent;
          color: var(--warm-dark);
          padding: 13px 34px;
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          border: 1px solid var(--warm-dark);
          cursor: pointer;
          transition: background 0.2s, color 0.2s;
        }
        .btn-outline:hover { background: var(--warm-dark); color: white; }

        .section-label {
          font-size: 11px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          font-weight: 600;
          color: var(--terra);
          margin-bottom: 12px;
        }

        .display-heading {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 600;
          line-height: 1.1;
          color: var(--warm-dark);
        }

        .hamburger-line {
          display: block;
          width: 24px;
          height: 1.5px;
          background: var(--warm-dark);
          transition: all 0.3s ease;
          transform-origin: center;
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .fade-up { animation: fadeUp 0.8s ease forwards; }
        .delay-1 { animation-delay: 0.15s; opacity: 0; }
        .delay-2 { animation-delay: 0.3s; opacity: 0; }
        .delay-3 { animation-delay: 0.45s; opacity: 0; }
        .delay-4 { animation-delay: 0.6s; opacity: 0; }

        @media (max-width: 768px) {
          .hero-grid { flex-direction: column !important; }
          .hero-img-wrap { height: 380px !important; width: 100% !important; }
          .services-grid { grid-template-columns: 1fr !important; }
          .stats-grid { grid-template-columns: 1fr 1fr !important; }
          .testimonials-grid { grid-template-columns: 1fr !important; }
          .about-grid { flex-direction: column-reverse !important; }
          .contact-grid { flex-direction: column !important; }
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
          .hero-heading { font-size: clamp(52px, 12vw, 88px) !important; }
        }
      `}</style>

      {/* ── NAVBAR ── */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        padding: "0 40px",
        height: "68px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        background: scrolled ? "rgba(253,250,246,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid var(--border)" : "none",
        transition: "all 0.3s ease",
      }}>
        <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "22px", fontWeight: 700, letterSpacing: "0.02em", color: "var(--warm-dark)" }}>
          Evalyne<span style={{ color: "var(--terra)" }}>.</span>
        </div>

        {/* Desktop nav */}
        <div className="desktop-nav" style={{ display: "flex", gap: "36px", alignItems: "center" }}>
          {NAV_LINKS.map(link => (
            <span key={link} className="nav-link" onClick={() => scrollTo(link)}>{link}</span>
          ))}
          <button className="btn-primary" style={{ padding: "10px 24px", fontSize: "12px" }} onClick={() => scrollTo("Contact")}>
            Hire Me
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="mobile-menu-btn"
          style={{ display: "none", flexDirection: "column", gap: "5px", background: "none", border: "none", cursor: "pointer", padding: "4px" }}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className="hamburger-line" style={{ transform: menuOpen ? "translateY(6.5px) rotate(45deg)" : "none" }} />
          <span className="hamburger-line" style={{ opacity: menuOpen ? 0 : 1 }} />
          <span className="hamburger-line" style={{ transform: menuOpen ? "translateY(-6.5px) rotate(-45deg)" : "none" }} />
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div style={{
          position: "fixed", inset: 0, zIndex: 90,
          background: "var(--ivory)",
          display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
          gap: "40px",
        }}>
          {NAV_LINKS.map(link => (
            <span key={link} onClick={() => scrollTo(link)} style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "42px", fontWeight: 600,
              color: "var(--warm-dark)", cursor: "pointer",
              transition: "color 0.2s",
            }}
              onMouseEnter={e => e.target.style.color = "var(--terra)"}
              onMouseLeave={e => e.target.style.color = "var(--warm-dark)"}
            >{link}</span>
          ))}
        </div>
      )}

      {/* ── HERO ── */}
      <section id="home" style={{ minHeight: "100vh", paddingTop: "68px", background: "var(--ivory)" }}>
        <div className="hero-grid" style={{ display: "flex", minHeight: "calc(100vh - 68px)" }}>
          {/* Text side */}
          <div style={{
            flex: "1 1 55%", padding: "clamp(40px, 8vw, 100px) clamp(24px, 6vw, 80px)",
            display: "flex", flexDirection: "column", justifyContent: "center",
          }}>
            <p className="section-label fade-up">Customer Experience Specialist — Nairobi, Kenya</p>
            <h1
              className="display-heading hero-heading fade-up delay-1"
              style={{ fontSize: "clamp(52px, 7vw, 88px)", marginBottom: "28px" }}
            >
              Making Every<br />
              <em style={{ color: "var(--terra)", fontStyle: "italic" }}>Customer</em><br />
              Feel Heard.
            </h1>
            <p className="fade-up delay-2" style={{
              fontSize: "17px", lineHeight: "1.75", color: "var(--warm-mid)",
              maxWidth: "480px", marginBottom: "40px", fontWeight: 300,
            }}>
              I'm Evalyne Maina — a dedicated customer service professional with over 6 years of experience delivering exceptional support across fintech, retail, and telecoms.
            </p>
            <div className="fade-up delay-3" style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
              <button className="btn-primary" onClick={() => scrollTo("Contact")}>Work With Me</button>
              <button className="btn-outline" onClick={() => scrollTo("About")}>Learn More</button>
            </div>

            {/* Stats strip */}
            <div className="fade-up delay-4" style={{
              display: "flex", gap: "32px", marginTop: "60px",
              paddingTop: "32px", borderTop: "1px solid var(--border)",
              flexWrap: "wrap",
            }}>
              {STATS.map(s => (
                <div key={s.label}>
                  <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "36px", fontWeight: 700, color: "var(--terra)", lineHeight: 1 }}>{s.value}</div>
                  <div style={{ fontSize: "12px", color: "var(--warm-gray)", letterSpacing: "0.08em", marginTop: "4px", textTransform: "uppercase" }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Image side */}
          <div className="hero-img-wrap" style={{
            flex: "1 1 45%", position: "relative", overflow: "hidden", minHeight: "500px",
          }}>
            <img
              src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=900&h=1100&fit=crop&crop=top"
              alt="Evalyne Maina — Customer Service Specialist"
              className="hero-img"
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }}
            />
            {/* Overlay badge */}
            <div style={{
              position: "absolute", bottom: "32px", left: "32px",
              background: "white",
              padding: "20px 24px",
              boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
              maxWidth: "220px",
            }}>
              <div style={{ fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--terra)", fontWeight: 600 }}>Currently Available</div>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "20px", fontWeight: 600, marginTop: "4px", color: "var(--warm-dark)" }}>Open to New Roles</div>
            </div>

            {/* Decorative terra line */}
            <div style={{
              position: "absolute", top: 0, right: 0,
              width: "6px", height: "100%",
              background: "linear-gradient(to bottom, var(--terra), var(--terra-light))",
            }} />
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" style={{ background: "var(--warm-bg)", padding: "clamp(60px, 10vw, 120px) clamp(24px, 6vw, 80px)" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div className="about-grid" style={{ display: "flex", gap: "clamp(40px, 6vw, 80px)", alignItems: "center" }}>
            {/* Image */}
            <div style={{ flex: "1 1 45%", position: "relative" }}>
              <img
                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=700&h=800&fit=crop&crop=center"
                alt="Professional workspace"
                style={{ width: "100%", height: "500px", objectFit: "cover", display: "block" }}
              />
              <div style={{
                position: "absolute", bottom: "-20px", right: "-20px",
                background: "var(--terra)", color: "white",
                padding: "28px 32px",
                fontFamily: "'Cormorant Garamond', serif",
              }}>
                <div style={{ fontSize: "48px", fontWeight: 700, lineHeight: 1 }}>6+</div>
                <div style={{ fontSize: "13px", fontWeight: 400, marginTop: "4px", opacity: 0.9 }}>Years of Excellence</div>
              </div>
            </div>

            {/* Text */}
            <div style={{ flex: "1 1 55%" }}>
              <p className="section-label">About Me</p>
              <h2 className="display-heading" style={{ fontSize: "clamp(36px, 4vw, 52px)", marginBottom: "24px" }}>
                A Human Touch<br />in Every Interaction
              </h2>
              <p style={{ fontSize: "16px", lineHeight: "1.85", color: "var(--warm-mid)", marginBottom: "20px", fontWeight: 300 }}>
                Based in Nairobi, Kenya, I have built my career on one principle: people deserve to feel valued. Whether I am supporting a first-time customer or navigating a complex complaint, I bring patience, clarity, and genuine care to every conversation.
              </p>
              <p style={{ fontSize: "16px", lineHeight: "1.85", color: "var(--warm-mid)", marginBottom: "36px", fontWeight: 300 }}>
                I have worked across fast-paced environments in fintech, e-commerce, and telecommunications — consistently achieving top satisfaction scores and building processes that scale without losing the human element.
              </p>

              {/* Skills chips */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "36px" }}>
                {["Zendesk", "Salesforce", "HubSpot", "Live Chat", "Email Support", "Team Training", "SLA Management", "Voice Support"].map(skill => (
                  <span key={skill} style={{
                    padding: "7px 16px",
                    border: "1px solid var(--border)",
                    fontSize: "13px", color: "var(--warm-mid)",
                    background: "white", letterSpacing: "0.03em",
                  }}>{skill}</span>
                ))}
              </div>
              <button className="btn-primary" onClick={() => scrollTo("Contact")}>Get In Touch</button>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" style={{ background: "var(--ivory)", padding: "clamp(60px, 10vw, 120px) clamp(24px, 6vw, 80px)" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
            <p className="section-label">What I Offer</p>
            <h2 className="display-heading" style={{ fontSize: "clamp(36px, 4vw, 52px)" }}>
              Services Built Around<br />
              <em style={{ color: "var(--terra)", fontStyle: "italic" }}>Your Customers</em>
            </h2>
          </div>
          <div className="services-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
            {SERVICES.map((s) => (
              <div key={s.title} className="service-card">
                <div style={{
                  width: "48px", height: "48px",
                  background: "var(--warm-bg)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  marginBottom: "20px",
                }}>
                  <svg width="24" height="24" fill="none" stroke="var(--terra)" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d={s.icon} />
                  </svg>
                </div>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "24px", fontWeight: 600, marginBottom: "12px", color: "var(--warm-dark)" }}>
                  {s.title}
                </h3>
                <p style={{ fontSize: "15px", lineHeight: "1.75", color: "var(--warm-mid)", fontWeight: 300 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS BANNER ── */}
      <section style={{ background: "var(--warm-dark)", padding: "clamp(40px, 6vw, 64px) clamp(24px, 6vw, 80px)" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div className="stats-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "24px" }}>
            {STATS.map(s => (
              <div key={s.label} className="stat-item">
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "56px", fontWeight: 700, color: "var(--terra-light)", lineHeight: 1 }}>{s.value}</div>
                <div style={{ fontSize: "12px", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", marginTop: "8px" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section id="testimonials" style={{ background: "var(--warm-bg)", padding: "clamp(60px, 10vw, 120px) clamp(24px, 6vw, 80px)" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
            <p className="section-label">Kind Words</p>
            <h2 className="display-heading" style={{ fontSize: "clamp(36px, 4vw, 52px)" }}>
              What Clients Say
            </h2>
          </div>
          <div className="testimonials-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}>
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="testimonial-card">
                <p style={{ fontSize: "15px", lineHeight: "1.85", color: "var(--warm-mid)", marginBottom: "28px", fontWeight: 300, position: "relative", zIndex: 1, paddingTop: "16px" }}>
                  {t.quote}
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                  <img
                    src={t.img}
                    alt={t.name}
                    style={{ width: "48px", height: "48px", borderRadius: "50%", objectFit: "cover" }}
                  />
                  <div>
                    <div style={{ fontWeight: 600, fontSize: "15px", color: "var(--warm-dark)" }}>{t.name}</div>
                    <div style={{ fontSize: "13px", color: "var(--warm-gray)" }}>{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" style={{ background: "var(--ivory)", padding: "clamp(60px, 10vw, 120px) clamp(24px, 6vw, 80px)" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div className="contact-grid" style={{ display: "flex", gap: "clamp(40px, 6vw, 80px)" }}>
            {/* Left */}
            <div style={{ flex: "1 1 45%" }}>
              <p className="section-label">Let's Connect</p>
              <h2 className="display-heading" style={{ fontSize: "clamp(36px, 4vw, 52px)", marginBottom: "24px" }}>
                Ready to Elevate<br />Your Customer<br />
                <em style={{ color: "var(--terra)", fontStyle: "italic" }}>Experience?</em>
              </h2>
              <p style={{ fontSize: "16px", lineHeight: "1.85", color: "var(--warm-mid)", marginBottom: "40px", fontWeight: 300 }}>
                Whether you are building a support team from scratch or looking to improve your existing processes, I would love to discuss how I can help.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                {[
                  { label: "Email", value: "evalyne.maina@gmail.com", icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" },
                  { label: "Phone", value: "+254 712 345 678", icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" },
                  { label: "Location", value: "Nairobi, Kenya", icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" },
                ].map(item => (
                  <div key={item.label} style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                    <div style={{
                      width: "44px", height: "44px", background: "var(--warm-bg)",
                      display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                    }}>
                      <svg width="20" height="20" fill="none" stroke="var(--terra)" strokeWidth="1.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                      </svg>
                    </div>
                    <div>
                      <div style={{ fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--warm-gray)", marginBottom: "2px" }}>{item.label}</div>
                      <div style={{ fontSize: "15px", color: "var(--warm-dark)", fontWeight: 500 }}>{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <div style={{ flex: "1 1 55%" }}>
              {formStatus === "success" ? (
                <div style={{
                  height: "100%", display: "flex", flexDirection: "column",
                  alignItems: "center", justifyContent: "center", textAlign: "center",
                  padding: "40px", background: "var(--warm-bg)",
                }}>
                  <div style={{ width: "60px", height: "60px", background: "var(--terra)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "24px" }}>
                    <svg width="28" height="28" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "32px", fontWeight: 600, marginBottom: "12px" }}>Message Sent</h3>
                  <p style={{ color: "var(--warm-mid)", marginBottom: "24px" }}>Thank you for reaching out. Evalyne will get back to you within 24 hours.</p>
                  <button className="btn-outline" onClick={() => setFormStatus(null)}>Send Another</button>
                </div>
              ) : (
                <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                  <input className="form-input" placeholder="Your Name" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} />
                  <input className="form-input" type="email" placeholder="Email Address" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} />
                  <textarea className="form-input" placeholder="Tell me about your project or role..." rows={6} value={formData.message} onChange={e => setFormData({ ...formData, message: e.target.value })} style={{ resize: "vertical" }} />
                  <button className="btn-primary" onClick={handleSubmit} style={{ alignSelf: "flex-start" }}>Send Message</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{
        background: "var(--warm-dark)", color: "rgba(255,255,255,0.5)",
        padding: "32px clamp(24px, 6vw, 80px)",
        display: "flex", justifyContent: "space-between", alignItems: "center",
        flexWrap: "wrap", gap: "16px",
      }}>
        <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "20px", color: "white", fontWeight: 600 }}>
          Evalyne<span style={{ color: "var(--terra-light)" }}>.</span>
        </div>
        <div style={{ fontSize: "13px" }}>
          &copy; {new Date().getFullYear()} Evalyne Maina. All rights reserved.
        </div>
        <div style={{ display: "flex", gap: "20px" }}>
          {["LinkedIn", "Email", "WhatsApp"].map(s => (
            <span key={s} style={{ fontSize: "12px", letterSpacing: "0.1em", textTransform: "uppercase", cursor: "pointer", transition: "color 0.2s" }}
              onMouseEnter={e => e.target.style.color = "var(--terra-light)"}
              onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.5)"}
            >{s}</span>
          ))}
        </div>
      </footer>
    </div>
  );
}