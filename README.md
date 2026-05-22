# Homezy

![Next.js](https://img.shields.io/badge/Next.js_16-000000?style=flat-square&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React_19-20232A?style=flat-square&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_v4-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)
![Leaflet](https://img.shields.io/badge/Leaflet-199900?style=flat-square&logo=leaflet&logoColor=white)

A learning project for Next.js 16, TypeScript, and Tailwind CSS v4.

## Tech Stack

- **Next.js 16** (App Router + Turbopack)
- **React 19**
- **TypeScript 5**
- **Tailwind CSS v4**
- **Leaflet + React-Leaflet** — Interactive maps
- **clsx + tailwind-merge** — className utilities
- **@svgr/webpack** — SVG as React components
- **Google Fonts** — Syne (heading) & Hanken Grotesk (body)

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

## Features

### Completed Pages

- **Homepage** — Hero, Featured, Benefits, Categories, Cities, Agents, Testimonials, CTA
- **Properties** — Property listing with filters, pagination, and map

## Architecture

| Layer | Directory | Description |
|-------|-----------|-------------|
| Hooks | `lib/hooks/` | Custom React hooks (`usePropertyFilters`, `useOutsideClick`, etc.) |
| Utils | `lib/utils/` | Helper functions (`cn`, `filters`, `pagination`, etc.) |
| Types | `lib/types/` | TypeScript type definitions |
| Data | `lib/data/` | Static data files |

## Components

### UI Primitives

All primitives support `forwardRef` and extend native HTML attributes.

| Component | Description |
|-----------|-------------|
| `Button` | Button with fill/outline/toggle variants |
| `ButtonText` | Text button with arrow indicator |
| `Container` | Layout wrapper, polymorphic (`as` prop) |
| `Select` | Dropdown with keyboard navigation & a11y |
| `CarouselControls` | Prev/Next controls for carousels |

### Shared Components

| Component | Description |
|-----------|-------------|
| `PropertyCard` | Property listing card with multiple layouts |
| `AgentCard` | Agent profile with social links |
| `AgentMiniCard` | Compact agent card variant |
| `BrowseFilterItem` | Filter dropdown for search |
| `FilterBarBase` | Search filter bar |
| `Pagination` | Page navigation component |
| `Map` | Interactive Leaflet map |
| `CategoryCard` | Property category card |
| `CitiesCard` | City showcase card |
| `BenefitCard` | Feature highlight card |
| `TestimonialCard` | Customer review card |
| `SocialIconLink` | Social media icon link |

### Section Components

| Component | Description |
|-----------|-------------|
| `Header` | Navigation header |
| `Hero` | Hero banner with search filters |
| `Featured` | Featured property listings |
| `Benefits` | Key benefits showcase |
| `Categories` | Property categories |
| `Cities` | Popular cities showcase |
| `Agents` | Agent profiles grid |
| `Testimonials` | Customer reviews carousel |
| `CTA` | Newsletter subscription |
| `PropertySearch` | Property search page section |
| `Footer` | Site footer with links |

## Project Structure

```
homezy/
├── app/                  # Next.js App Router
├── assets/               # Images, SVG icons
│   ├── agents/
│   ├── cities/
│   ├── icons/
│   └── properties/
├── components/
│   ├── sections/         # Page-level sections
│   ├── shared/           # Reusable components
│   └── ui/               # UI primitives
├── lib/
│   ├── hooks/            # Custom React hooks
│   ├── utils/            # Helper functions
│   ├── types/            # TypeScript types
│   └── data/             # Static data
└── config/
    └── navigation.ts     # Navigation config
```

## Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Lavender | `#B592FF` | Primary accent |
| Carnation | `#FDA5D6` | Secondary accent |
| Minion | `#FFE76C` | Yellow highlight |
| Smith | `#A8EB9E` | Success / Green |
| Dark | `#191A23` | Text & foreground |
| Background | `#FBFAFF` | Page background |

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
