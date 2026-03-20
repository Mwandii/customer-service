import { useState } from "react";
import FadeIn from "../ui/FadeIn";
import { CONTACT } from "../../data/siteData";

const INITIAL_FORM = { name: "", email: "", message: "" };

export default function Contact() {
  const [formData, setFormData]   = useState(INITIAL_FORM);
  const [formStatus, setStatus]   = useState("idle"); // "idle" | "loading" | "success" | "error"
  const [errors, setErrors]       = useState({});

  // ── Validation ──────────────────────────────────────────────────────────
  const validate = () => {
    const e = {};
    if (!formData.name.trim())    e.name    = "Name is required.";
    if (!formData.email.trim())   e.email   = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) e.email = "Enter a valid email.";
    if (!formData.message.trim()) e.message = "Message is required.";
    return e;
  };

  // ── Submit ───────────────────────────────────────────────────────────────
  const handleSubmit = async () => {
    const e = validate();
    if (Object.keys(e).length) { setErrors(e); return; }
    setErrors({});
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error("Server error");
      setStatus("success");
      setFormData(INITIAL_FORM);
    } catch {
      setStatus("error");
    }
  };

  const handleChange = (field) => (e) => {
    setFormData(prev => ({ ...prev, [field]: e.target.value }));
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: "" }));
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      style={{
        background: "var(--ivory)",
        padding: "clamp(72px, 10vw, 128px) clamp(24px, 6vw, 80px)",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div
          style={{
            display: "flex", gap: "clamp(40px, 6vw, 80px)",
            flexWrap: "wrap",
          }}
        >

          {/* ── Left — info ── */}
          <div style={{ flex: "1 1 40%", minWidth: "280px" }}>
            <FadeIn direction="left">
              <span className="overline">{CONTACT.overline}</span>
            </FadeIn>

            <FadeIn direction="left" delay="0.1s">
              <h2
                id="contact-heading"
                className="section-heading"
                style={{ fontSize: "clamp(36px, 4vw, 52px)", marginBottom: "24px" }}
              >
                {CONTACT.headingLine1}
                <br />
                {CONTACT.headingLine2}
                <br />
                <em style={{ color: "var(--terra)", fontStyle: "italic" }}>
                  {CONTACT.headingLine3}
                </em>
              </h2>
            </FadeIn>

            <FadeIn direction="left" delay="0.2s">
              <p
                style={{
                  fontSize: "16px", lineHeight: 1.88,
                  color: "var(--warm-mid)", fontWeight: 300, marginBottom: "44px",
                }}
              >
                {CONTACT.body}
              </p>
            </FadeIn>

            <FadeIn direction="left" delay="0.3s">
              <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
                {CONTACT.details.map(item => (
                  <div key={item.label} style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                    {/* Icon */}
                    <div
                      style={{
                        width: "44px", height: "44px",
                        background: "var(--warm-bg)",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <svg
                        width="20" height="20"
                        fill="none" stroke="var(--terra)"
                        strokeWidth="1.5" viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                      </svg>
                    </div>
                    <div>
                      <div
                        style={{
                          fontSize: "10px", letterSpacing: "0.16em",
                          textTransform: "uppercase", color: "var(--warm-gray)",
                          marginBottom: "2px",
                        }}
                      >
                        {item.label}
                      </div>
                      <div style={{ fontSize: "15px", color: "var(--warm-dark)", fontWeight: 500 }}>
                        {item.value}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* ── Right — form ── */}
          <FadeIn direction="right" delay="0.15s" style={{ flex: "1 1 50%", minWidth: "280px" }}>
            {formStatus === "success" ? (
              /* Success state */
              <div
                style={{
                  height: "100%", minHeight: "400px",
                  display: "flex", flexDirection: "column",
                  alignItems: "center", justifyContent: "center",
                  textAlign: "center", padding: "48px 40px",
                  background: "var(--warm-bg)",
                }}
              >
                <div
                  style={{
                    width: "64px", height: "64px",
                    background: "var(--terra)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    marginBottom: "24px",
                  }}
                >
                  <svg width="28" height="28" fill="none" stroke="#fff" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "34px", fontWeight: 600, marginBottom: "12px",
                  }}
                >
                  {CONTACT.successTitle}
                </h3>
                <p style={{ color: "var(--warm-mid)", marginBottom: "28px" }}>
                  {CONTACT.successBody}
                </p>
                <button
                  className="btn-outline-dark"
                  onClick={() => setStatus("idle")}
                >
                  {CONTACT.successCta}
                </button>
              </div>
            ) : (
              /* Form */
              <div
                role="form"
                aria-label="Contact form"
                style={{ display: "flex", flexDirection: "column", gap: "18px" }}
              >
                {/* Name */}
                <div>
                  <label className="form-label" htmlFor="contact-name">Your Name</label>
                  <input
                    id="contact-name"
                    className="form-input"
                    type="text"
                    placeholder="Jane Wanjiku"
                    value={formData.name}
                    onChange={handleChange("name")}
                    disabled={formStatus === "loading"}
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "name-error" : undefined}
                  />
                  {errors.name && (
                    <p id="name-error" role="alert" style={{ fontSize: "12px", color: "var(--terra)", marginTop: "4px" }}>
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="form-label" htmlFor="contact-email">Email Address</label>
                  <input
                    id="contact-email"
                    className="form-input"
                    type="email"
                    placeholder="jane@company.com"
                    value={formData.email}
                    onChange={handleChange("email")}
                    disabled={formStatus === "loading"}
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-error" : undefined}
                  />
                  {errors.email && (
                    <p id="email-error" role="alert" style={{ fontSize: "12px", color: "var(--terra)", marginTop: "4px" }}>
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label className="form-label" htmlFor="contact-message">Message</label>
                  <textarea
                    id="contact-message"
                    className="form-input"
                    placeholder="Tell me about your project or role..."
                    rows={6}
                    value={formData.message}
                    onChange={handleChange("message")}
                    disabled={formStatus === "loading"}
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? "message-error" : undefined}
                    style={{ resize: "vertical" }}
                  />
                  {errors.message && (
                    <p id="message-error" role="alert" style={{ fontSize: "12px", color: "var(--terra)", marginTop: "4px" }}>
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Server error */}
                {formStatus === "error" && (
                  <p role="alert" style={{ fontSize: "13px", color: "var(--terra)" }}>
                    Something went wrong. Please try again or email directly.
                  </p>
                )}

                <button
                  className="btn-primary"
                  style={{
                    alignSelf: "flex-start",
                    opacity: formStatus === "loading" ? 0.7 : 1,
                    cursor: formStatus === "loading" ? "not-allowed" : "pointer",
                  }}
                  onClick={handleSubmit}
                  disabled={formStatus === "loading"}
                  aria-busy={formStatus === "loading"}
                >
                  {formStatus === "loading" ? "Sending…" : "Send Message"}
                </button>
              </div>
            )}
          </FadeIn>
        </div>
      </div>
    </section>
  );
}