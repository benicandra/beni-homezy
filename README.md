# Homezy

![Next.js](https://img.shields.io/badge/Next.js_16-000000?style=flat-square&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React_19-20232A?style=flat-square&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_v4-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)
![Leaflet](https://img.shields.io/badge/Leaflet-199900?style=flat-square&logo=leaflet&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=flat-square&logo=framer&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint_9-4B32C3?style=flat-square&logo=eslint&logoColor=white)
![SVGR](https://img.shields.io/badge/SVGR-FFD4FF?style=flat-square&logo=webpack&logoColor=black)

Property listing platform — users browse, search, and filter properties with interactive maps.

## Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| Next.js | 16.2.4 | Framework (App Router + Turbopack) |
| React | 19.2.4 | UI library |
| TypeScript | ^5 | Type safety |
| Tailwind CSS | v4 | Styling |
| Framer Motion | ^12 | Animations |
| Leaflet + React-Leaflet | ^5 | Interactive maps |
| clsx + tailwind-merge | latest | Class name utility (`cn()`) |
| @svgr/webpack | ^8 | SVG as React components |

**Fonts:** Syne (headings) · Hanken Grotesk (body)

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

| Command | Description |
|---|---|
| `npm run dev` | Development server |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## Project Structure

```
homezy/
├── app/                          # Next.js App Router pages
│   ├── layout.tsx                # Root layout (Header + Footer)
│   ├── page.tsx                  # Homepage
│   ├── error.tsx                 # Error boundary
│   ├── loading.tsx               # Global loading
│   ├── not-found.tsx             # 404 page
│   ├── [...slug]/page.tsx        # Catch-all → "Coming Soon"
│   ├── properties/page.tsx       # Property listing + filters + map
│   └── property-details/page.tsx # Single property detail
│
├── components/
│   ├── ui/                       # Primitives (Button, Select, Container, etc.)
│   ├── shared/                   # Reusable (PropertyCard, Map, Pagination, etc.)
│   └── sections/                 # Page-level (Header, Hero, Footer, etc.)
│
├── lib/
│   ├── types/                    # TypeScript interfaces
│   ├── data/                     # Static/mock data (will be replaced by API)
│   ├── hooks/                    # Custom React hooks
│   └── utils/                    # Helpers (cn, filters, pagination, urlParams)
│
├── config/
│   └── navigation.ts             # Nav links + social links
│
├── assets/                       # Images, SVGs (bundled via webpack)
│   ├── agents/ · cities/ · interiors/ · properties/ · icons/
│
└── public/                       # Static files served as-is
```

## Routing & Page Status

| Route | Status | Description |
|---|---|---|
| `/` | **Done** | Homepage (Hero, Featured, Benefits, Categories, Cities, Agents, Testimonials, CTA) |
| `/properties` | **Done** | Property listing with filters, pagination, map |
| `/property-details` | **Done** | Single property detail page |
| `/agents` | Coming Soon | Agent listing |
| `/about` | Coming Soon | About us |
| `/contact` | Coming Soon | Contact us |
| `/sign-in` · `/sign-up` | Coming Soon | Auth pages |
| `/faq` | Coming Soon | FAQ page |
| `/*` | Coming Soon | Catch-all placeholder |

## Components

### UI Primitives

All primitives support `forwardRef` and extend native HTML attributes.

| Component | Description |
|---|---|
| `Button` | Button with fill/outline/toggle variants |
| `ButtonText` | Text button with arrow indicator |
| `Container` | Layout wrapper, polymorphic (`as` prop) |
| `Select` | Dropdown with keyboard navigation & a11y |
| `CarouselControls` | Prev/Next controls for carousels |
| `MotionSection` | Framer Motion animation wrapper |

### Shared Components

| Component | Description |
|---|---|
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
| `PropertySummaryStats` | Property statistics summary |

### Section Components

| Component | Description |
|---|---|
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
| `PropertyDetails` | Property detail page section |
| `Footer` | Site footer with links |

## Custom Hooks

| Hook | File | Purpose |
|---|---|---|
| `usePropertyFilters` | `lib/hooks/usePropertyFilters.ts` | Property search, filter, pagination, URL sync |
| `useModalBehavior` | `lib/hooks/useModalBehavior.ts` | Modal open/close state |
| `useOutsideClick` | `lib/hooks/useOutsideClick.ts` | Detect clicks outside element |

## API Contract (Backend Reference)

> Currently all data is static in `lib/data/`. Backend needs to provide these endpoints.

### Required Endpoints

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/properties` | List properties with filters & pagination |
| `GET` | `/api/properties/:id` | Single property detail |
| `GET` | `/api/properties/featured` | Featured property |
| `GET` | `/api/agents` | List agents |
| `GET` | `/api/cities` | List cities |
| `GET` | `/api/testimonials` | List testimonials |

### `GET /api/properties` — Query Parameters

| Param | Type | Default | Description |
|---|---|---|---|
| `location` | string | `"All"` | City name from address |
| `price` | string | `"all"` | Range: `"0-2000"`, `"2000-5000"`, `"5000-10000"`, `"10000+"` |
| `type` | string | `"all-types"` | Property type slug |
| `listingType` | string | `"all"` | `"sale"` or `"rent"` |
| `category` | string | `""` | Property type filter |
| `beds` | string | `""` | Min beds: `"1"`, `"2"`, ... `"5+"` |
| `baths` | string | `""` | Min baths: `"1"`, `"2"`, ... `"4+"` |
| `floorArea` | string | `""` | Range: `"Under 30 m²"`, `"30 - 50 m²"`, etc. |
| `minYear` | string | `""` | Min year built |
| `maxYear` | string | `""` | Max year built |
| `page` | number | `1` | Page number |
| `limit` | number | `3` | Items per page |

### Expected Response Format

```json
{
  "data": [],
  "pagination": {
    "page": 1,
    "limit": 3,
    "total": 20,
    "totalPages": 7
  }
}
```

### Filter Reference

**Price Ranges:** `all` · `0-2000` · `2000-5000` · `5000-10000` · `10000+`

**Property Types:** `Apartment` · `House` · `Villa` · `Studio` · `Penthouse` · `Townhouse` · `Modern Loft`

**Listing Types:** `sale` · `rent`

## Color Palette

| Token | Hex | Usage |
|---|---|---|
| `--color-lavender` | `#B592FF` | Primary accent |
| `--color-lavender-20` | `#F7F2FF` | Light bg |
| `--color-lavender-40` | `#E2D4FF` | Borders |
| `--color-lavender-80` | `#C1A5FF` | Hover |
| `--color-carnation` | `#FDA5D6` | Secondary accent |
| `--color-carnation-20` | `#FFF1F9` | Light bg |
| `--color-carnation-40` | `#FFE1F2` | Borders |
| `--color-minion` | `#FFE76C` | Highlight |
| `--color-smith` | `#A8EB9E` | Success |
| `--color-dark` | `#191A23` | Text & foreground |
| `--color-background` | `#FBFAFF` | Page background |

### Typography

| Role | Font | Weights |
|---|---|---|
| Heading | Syne | 400, 500, 600, 700, 800 |
| Body | Hanken Grotesk | 300, 400, 500, 600, 700 |

## Environment Variables

Create `.env.local` for backend integration:

```env
NEXT_PUBLIC_API_URL=http://localhost:8000/api
NEXT_PUBLIC_MAP_TILE_URL=https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png
```

> Currently no env vars are used — all data is static. These will be needed when backend is integrated.

## Architecture Notes

- **Static-first:** All data lives in `lib/data/` as typed arrays. Replace with API calls when backend is ready.
- **App Router:** Uses Next.js App Router (not Pages Router). All pages are Server Components by default; client logic uses `"use client"`.
- **Dynamic imports:** Heavy sections on homepage use `next/dynamic` + `Suspense` for code splitting.
- **URL-synced filters:** Property search filters are synced to URL query params via `usePropertyFilters` hook.
- **Path alias:** `@/*` maps to project root (configured in `tsconfig.json`).
- **SVG loading:** Configured via `@svgr/webpack` in `next.config.ts` Turbopack rules.
