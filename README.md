# Nathan Web Studio — Redesign

This is a redesigned Vite + React website for your small-business website service.

The goal of this version is to avoid the generic SaaS/AI-template look by using:

- A more distinctive editorial/studio layout
- Stronger shapes and asymmetric card styling
- A warmer professional colour palette
- A website audit-style hero visual
- Case-study style work pages instead of basic cards
- A maintenance dashboard visual to help sell monthly care plans
- Clearer positioning around local businesses

## Run in GitHub Codespaces

```bash
npm install
npm run dev
```

Open the forwarded port, usually `5173`.

## Project structure

```txt
src/
├── App.jsx
├── main.jsx
├── assets/
├── components/
│   ├── layout/
│   │   ├── Header.jsx
│   │   └── Footer.jsx
│   └── ui/
│       ├── CaseStudyCard.jsx
│       ├── FeaturePanel.jsx
│       ├── PackageCard.jsx
│       ├── PageIntro.jsx
│       └── SectionHeading.jsx
├── data/
│   └── siteData.js
├── pages/
│   ├── AboutPage.jsx
│   ├── ContactPage.jsx
│   ├── HomePage.jsx
│   ├── MaintenancePage.jsx
│   ├── PricingPage.jsx
│   ├── ServicesPage.jsx
│   └── WorkPage.jsx
└── styles/
    └── global.css
```

## What to edit first

### 1. Business name

Edit:

- `src/components/layout/Header.jsx`
- `src/components/layout/Footer.jsx`
- `index.html`

### 2. Contact details

Edit:

- `src/pages/ContactPage.jsx`
- `src/components/layout/Footer.jsx`

### 3. Pricing/content

Edit:

- `src/data/siteData.js`

### 4. Images

Add images to:

- `src/assets/`

The design currently uses placeholder panels so it works without images.

## Contact form note

The contact form is front-end only. Before publishing, connect it to one of:

- Formspree
- Netlify Forms
- EmailJS
- A small FastAPI backend
- Another form handling service
