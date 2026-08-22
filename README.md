# GharFix

> Trusted home services, done right.

GharFix is a home services platform for booking verified professionals in Vadodara and Vaghodia, Gujarat. Customers can browse transparent pricing for AC repair, electrical work, and deep cleaning, then book a service directly through WhatsApp.

## Features

- AC repair and service, including gas refills, cleaning, installation, and maintenance plans
- Electrician services, including wiring, fan and light installation, and switchboard repairs
- Deep home cleaning for homes, kitchens, bathrooms, sofas, and carpets
- Transparent service pricing with estimated completion times
- WhatsApp booking from the home page, service listings, and floating booking widget
- Verified professionals, same-day service, OTP-based job completion, and a 30-day service guarantee
- Responsive pages for the home, services, about, contact, and how-it-works sections

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- Lucide React for icons

## Getting Started

### Prerequisites

- Node.js 20 or newer
- npm

### Installation

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the local development server |
| `npm run build` | Create a production build |
| `npm run start` | Start the production server |
| `npm run lint` | Run ESLint |

## Project Structure

```text
src/
├── app/
│   ├── about/          # About page
│   ├── contact/        # Contact page
│   ├── how-it-works/   # Booking process page
│   ├── services/       # Service catalog and pricing
│   ├── globals.css     # Global styles and design tokens
│   ├── layout.tsx      # Shared layout, navigation, footer, and metadata
│   └── page.tsx        # Home page
└── components/
	├── Footer.tsx
	├── Navbar.tsx
	└── WABookingWidget.tsx
```

## Booking Flow

Bookings currently open WhatsApp with the selected service and a pre-filled message. Update the WhatsApp number in `src/app/page.tsx`, `src/app/services/page.tsx`, and `src/components/WABookingWidget.tsx` if the business contact changes.

## Deployment

The project can be deployed as a standard Next.js application on Vercel or any platform that supports Node.js and Next.js:

```bash
npm run build
npm run start
```

No database or environment variables are required for the current static frontend implementation.
