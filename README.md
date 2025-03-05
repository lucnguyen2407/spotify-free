# spotify-free
Try to create a clone of spotify using Nextjs
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

Project Structure

/my-app
│── app/                     # Next.js App Router (Main Pages)
│   ├── layout.tsx           # Root Layout (Includes Navbar, Providers)
│   ├── page.tsx             # Homepage (Displays Playlists)
│   ├── login/               # Login Page (Spotify OAuth)
│   │   ├── page.tsx
│   ├── library/             # Library Page (User's Saved Playlists)
│   │   ├── page.tsx
│   ├── api/                 # Next.js API Routes
│   │   ├── auth/            # NextAuth.js (Spotify OAuth)
│   │   │   ├── route.ts
│   ├── actions/             # Server Actions (Data Fetching)
│   │   ├── getUser.ts       # Fetch Spotify User Data
│   │   ├── getPlaylists.ts  # Fetch User's Playlists
│── components/              # Reusable UI Components
│   ├── Navbar.tsx           # Navbar (Handles Auth)
│   ├── MusicPlayer.tsx      # Music Player Component
│── providers/               # Context Providers
│   ├── AuthProvider.tsx     # NextAuth Session Provider
│── styles/                  # Global Styles
│   ├── globals.css          # Tailwind Styles
│── public/                  # Static Assets (Images, Logos, etc.)
│── .env.local               # Environment Variables (API Keys)
│── tailwind.config.js       # Tailwind Configuration
│── next.config.mjs          # Next.js Configuration
│── tsconfig.json            # TypeScript Configuration
│── package.json             # Project Dependencies
│── README.md                # Documentation
