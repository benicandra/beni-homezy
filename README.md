# Homezy

![Next.js](https://img.shields.io/badge/Next.js_16-000000?style=flat-square&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React_19-20232A?style=flat-square&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_v4-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)

A learning project for Next.js 16, TypeScript, and Tailwind CSS v4.

## Tech Stack

- **Next.js 16** (App Router + Turbopack) — React framework for production
- **React 19** — UI library
- **TypeScript 5** — Type-safe JavaScript
- **Tailwind CSS v4** — Utility-first CSS framework
- **@svgr/webpack** — Import SVG files as React components
- **Google Fonts** — Syne (heading) & Hanken Grotesk (body)

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Features

### ✅ Homepage Sections

- **Hero** — Hero banner with property search filters
- **Featured** — Featured property listings
- **Benefits** — Key selling points / advantages
- **Categories** — Property category browser
- **Cities** — Popular cities showcase
- **Agents** — Meet our agents grid
- **Testimonials** — Customer reviews carousel (overflow peek pattern)
- **CTA** — Call to action section for newsletter subscription
- **Header** — Navigation header (via layout)
- **Footer** — Site footer (via layout)

### 📋 Planned Pages

- Properties listing page (v1 & v2)
- Property detail page (v1 & v2)
- Agents listing page (v1 & v2)
- Agent detail page (v1 & v2)
- About Us page (v1 & v2)
- Contact Us page (v1 & v2)
- FAQ page
- Auth pages (Sign In, Sign Up, Forgot Password, Reset Password)
- Style Guides & Licenses

## Components

### Section Components

| Component      | Description                              |
|----------------|------------------------------------------|
| `Header`       | Navigation header with nav links         |
| `Hero`         | Hero banner with property search filters |
| `Featured`     | Featured property listings grid          |
| `Benefits`     | Key features / benefit cards             |
| `Categories`   | Property category cards                  |
| `Cities`       | City showcase cards                      |
| `Agents`       | Agent profile grid                       |
| `Testimonials` | Customer reviews carousel                |
| `CTA`          | Call to action banner                    |
| `Footer`       | Site footer with links                   |

### Shared / Card Components

| Component          | Description                              |
|--------------------|------------------------------------------|
| `PropertyCard`     | Reusable property listing card           |
| `AgentCard`        | Agent profile card with social links     |
| `AgentMiniCard`    | Compact agent card variant               |
| `TestimonialCard`  | Customer review card with star rating    |
| `CategoryCard`     | Property category card with icon         |
| `CitiesCard`       | City image card                          |
| `BenefitCard`      | Feature / benefit highlight card         |
| `BrowseFilterItem` | Filter toggle item for search            |
| `SocialIconLink`   | Social media icon link                   |

### UI Primitives

| Component   | Description                               |
|-------------|-------------------------------------------|
| `Button`    | Primary button with fill/outline variants |
| `ButtonText`| Text-only button with arrow indicator     |
| `Container` | Layout wrapper with responsive padding    |

## Data Layer

### Type Definitions (`lib/types/`)

| Type | Description |
|------|-------------|
| `Agent` | Agent profile with social links |
| `Property` | Property listing data |
| `FeaturedProperty` | Extended property with agent info |
| `City` | City showcase data |
| `Testimonial` | Customer review data |
| `Benefit` | Feature/benefit data |
| `SocialLink` | Social media link with icon |

### Data Files (`lib/data/`)

| File | Description |
|------|-------------|
| `agents.ts` | Agent profiles (6 items) |
| `properties.ts` | Featured property + property cards (4 items) |
| `cities.ts` | City showcase data (3 items) |
| `testimonials.ts` | Customer reviews (4 items) |
| `benefits.ts` | Key benefits (3 items) |
| `social.ts` | Default social links configuration |

## Color Palette

| Color        | Hex       | Usage             |
|--------------|-----------|-------------------|
| Lavender     | `#B592FF` | Primary accent    |
| Lavender 20  | `#F7F2FF` | Light lavender    |
| Lavender 40  | `#E2D4FF` | Medium lavender   |
| Carnation    | `#FDA5D6` | Secondary accent  |
| Carnation 20 | `#FFF1F9` | Light carnation   |
| Carnation 40 | `#FFE1F2` | Medium carnation  |
| Minion       | `#FFE76C` | Yellow highlight  |
| Smith        | `#A8EB9E` | Green / success   |
| Dark         | `#191A23` | Text & foreground |
| Background   | `#FBFAFF` | Page background   |

## Project Structure

```
homezy/
├── app/                  # Next.js App Router (layout, page, globals.css)
├── assets/               # Static assets (images, SVG icons)
│   ├── agents/
│   ├── cities/
│   ├── icons/
│   └── properties/
├── components/
│   ├── sections/         # Page-level section components (10 sections)
│   ├── shared/           # Reusable card components (9 components)
│   └── ui/               # Primitive UI components (Button, Container, etc.)
├── lib/
│   ├── types/            # TypeScript type definitions
│   └── data/             # Centralized data files
└── config/
    └── navigation.ts     # Nav items & social link data
```

## Scripts

- `npm run dev` — Start development server (Turbopack)
- `npm run build` — Build for production
- `npm run start` — Start production server
- `npm run lint` — Run ESLint
