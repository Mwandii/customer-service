# Evalyne Maina — Portfolio Website

Personal portfolio site for **Evalyne Maina**, Customer Experience Specialist based in Nairobi, Kenya.

Built as a spec project by [Athanas Muinde](https://github.com/your-handle) — production-grade, fully responsive, and Vercel-ready.

---

## Tech Stack

| Layer       | Technology                          |
|-------------|-------------------------------------|
| Framework   | React 18                            |
| Build tool  | Vite 5                              |
| Styling     | Tailwind CSS v4 (`@tailwindcss/vite`) |
| Routing     | React Router v6                     |
| Email       | Resend                              |
| Deployment  | Vercel (serverless functions)       |

---

## Project Structure

```
evalyne-site/
├── api/
│   └── contact.js              # Resend serverless handler
├── src/
│   ├── data/
│   │   └── siteData.js         # Single source of truth for all content
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx      # Fixed navbar, blur-on-scroll, active section, mobile menu
│   │   │   └── Footer.jsx
│   │   ├── sections/
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Services.jsx
│   │   │   ├── StatsBanner.jsx
│   │   │   ├── Testimonials.jsx
│   │   │   └── Contact.jsx
│   │   └── ui/
│   │       └── FadeIn.jsx      # IntersectionObserver scroll animation
│   ├── pages/
│   │   └── Home.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css               # Design tokens (@theme {}), global styles, utility classes
├── .env.example
├── eslint.config.js
├── index.html
├── package.json
├── vercel.json
└── vite.config.js
```

---

## Getting Started

```bash
# 1. Clone & install
npm install

# 2. Set up environment variables
cp .env.example .env
# Fill in RESEND_API_KEY and CONTACT_EMAIL

# 3. Start dev server
npm run dev

# 4. Build for production
npm run build
```

---

## Environment Variables

| Variable        | Description                                        |
|-----------------|----------------------------------------------------|
| `RESEND_API_KEY` | API key from [resend.com](https://resend.com)     |
| `CONTACT_EMAIL` | Email address that receives contact form messages  |

> ⚠️ Never commit `.env` — it is listed in `.gitignore`.

---

## Deployment (Vercel)

1. Push to GitHub
2. Import the repo in [Vercel](https://vercel.com)
3. Add the environment variables in **Project → Settings → Environment Variables**
4. Deploy — `vercel.json` handles SPA routing and the `/api` serverless function automatically

---

## Design System

All design tokens live in `src/index.css` inside `@theme {}` and `:root {}`:

| Token            | Value      | Usage                      |
|------------------|------------|----------------------------|
| `--terra`        | `#C2622F`  | Primary accent, CTAs       |
| `--terra-light`  | `#E8895C`  | Hover states, stat numbers |
| `--ivory`        | `#FDFAF6`  | Main background            |
| `--warm-dark`    | `#1C1208`  | Headings, footer bg        |
| `--warm-mid`     | `#6B4C2A`  | Body text                  |
| `--warm-bg`      | `#F5EFE6`  | Alternate section bg       |
| `--border`       | `#E2D5C3`  | Card borders, dividers     |

Fonts: **Cormorant Garamond** (display) + **DM Sans** (body) via Google Fonts.

---

## License

Built for client use. All rights reserved — Evalyne Maina.