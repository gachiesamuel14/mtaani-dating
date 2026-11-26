# Mtaani — Kenya Location-Based Dating

Connect with people near you across Kenya. County-based matching, safety-first, made for Kenyans.

## Features (MVP)

- **Landing page** with clear value prop
- **Auth** — Login & multi-step registration (name, county, preferences)
- **Discover** — Card swipe UI with county filters (Nairobi, Kiambu, Mombasa, Kisumu, etc.)
- **Matches** — New matches + conversation list
- **Chat** — Real-time style messaging UI + safety banner
- **Profile** — Basic profile hub
- **Safety Centre** — Report/block guidance, meet-in-public tips, anti-scam advice

## Tech

- Next.js 16 (App Router) + TypeScript
- Tailwind CSS 4
- Ready for Supabase (auth, DB, storage) and Netlify deploy

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Demo mode

Login/register currently skip real auth and take you straight to Discover with mock Kenyan profiles.

## Next steps

1. Connect Supabase (auth + profiles + matches + messages)
2. GPS / geolocation for true distance ranking
3. Photo upload + verification flow
4. M-Pesa for premium (optional)
5. Deploy to Netlify via GitHub

## Branding

Working name: **Mtaani** (Swahili for neighbourhood / the area).  
Alternatives from earlier work: Karibu, Jirani, Pamoja, Hapa.

---

Made for Kenya 🇰🇪
