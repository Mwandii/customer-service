import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, message } = req.body ?? {};

  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required." });
  }

  if (!/\S+@\S+\.\S+/.test(email)) {
    return res.status(400).json({ error: "Invalid email address." });
  }

  try {
    await resend.emails.send({
      from: "Evalyne Site <onboarding@resend.dev>",
      to:      process.env.CONTACT_EMAIL,
      replyTo: email,
      subject: `New message from ${name}`,
      html: `
        <h2 style="font-family:sans-serif;color:#1C1208">New contact form submission</h2>
        <p style="font-family:sans-serif"><strong>Name:</strong> ${name}</p>
        <p style="font-family:sans-serif"><strong>Email:</strong> ${email}</p>
        <p style="font-family:sans-serif"><strong>Message:</strong></p>
        <p style="font-family:sans-serif;white-space:pre-wrap">${message}</p>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("[contact] Resend error:", err);
    return res.status(500).json({ error: "Failed to send email." });
  }
}