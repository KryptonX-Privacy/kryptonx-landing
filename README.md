# KryptonX — Official Landing Page

> Website resmi KryptonX: **[kryptonx.xyz](https://kryptonx.xyz)**  
> Official GitHub: [KryptonX-Privacy/kryptonx-landing](https://github.com/KryptonX-Privacy/kryptonx-landing)

---

## Tentang KryptonX

**KryptonX** adalah token kripto berbasis **Solana** yang mengutamakan privasi transaksi. Dibangun untuk siapa saja yang ingin bertransaksi secara anonim, aman, dan cepat — tanpa bisa dilacak.

Repository ini adalah **source code website resmi KryptonX** di [kryptonx.xyz](https://kryptonx.xyz), dibangun dengan React + Tailwind CSS.

---

## Fitur Website

| Fitur | Keterangan |
|---|---|
| **Splash Screen** | Animasi loading saat pertama buka website |
| **Hero Section** | Landing utama dengan info token KryptonX |
| **Token Info Bar** | Bar CA, Pump.fun, dan DexScreener |
| **Privacy Builder** | Tool interaktif untuk privacy transaction pipeline |
| **Privacy Dock** | Dashboard pengaturan privasi wallet |
| **Tech Stack Demo** | Visualisasi teknologi yang dipakai KryptonX |
| **Transaction Flow** | Animasi alur transaksi privat |
| **Phone Mockup** | Preview tampilan mobile app |
| **Browser Mockup** | Demo ekstensi privasi browser |
| **Smartwatch Mockup** | Preview tampilan smartwatch |
| **Whitepaper** | Whitepaper lengkap KryptonX |
| **Roadmap** | Peta jalan pengembangan Q1–Q4 2026 |
| **Community** | Link X, Telegram, dan Discord |

---

## Tech Stack

| Layer | Teknologi |
|---|---|
| Framework | React 18 |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Animasi | Motion (Framer Motion v12) |
| Build Tool | Vite 6 |
| Icons | Lucide React |
| UI Primitives | Radix UI |
| Package Manager | pnpm |

---

## Struktur Project

```
src/
├── app/
│   ├── App.tsx                         # Root & page router
│   └── components/
│       ├── SplashScreen.tsx            # Splash screen loading
│       ├── AnimatedNavigation.tsx      # Navbar animasi
│       ├── TokenInfoBar.tsx            # Bar info token (CA, Pump.fun, Dex)
│       ├── CoreFeatures.tsx            # Section fitur utama
│       ├── TechStackPro.tsx            # Visualisasi tech stack
│       ├── TransactionFlowViz.tsx      # Alur transaksi privat
│       ├── InteractivePhoneMockup.tsx  # Mockup mobile app
│       ├── PrivacyBrowserMockup.tsx    # Demo ekstensi browser
│       ├── SmartWatchMockup.tsx        # Mockup smartwatch
│       ├── WalletPrivacyDemo.tsx       # Demo wallet privasi
│       ├── PrivacyBuilder.tsx          # Privacy pipeline builder
│       ├── PrivacyDock.tsx             # Dashboard privasi
│       ├── AutoDemo.tsx                # Demo otomatis transaksi
│       ├── DownloadApp.tsx             # Section download app
│       ├── Whitepaper.tsx              # Whitepaper viewer
│       ├── Documentation.tsx           # Halaman dokumentasi
│       ├── Examples.tsx                # Contoh penggunaan
│       ├── KryptonXLogo.tsx            # Logo SVG KryptonX
│       ├── KryptonXRobot.tsx           # Maskot robot interaktif
│       ├── ErrorBoundary.tsx           # Error handler global
│       └── ...komponen animasi lainnya
├── imports/                            # Aset gambar & SVG
└── styles/
    ├── fonts.css                       # Import font
    └── theme.css                       # Token warna & CSS variables
```

---

## Halaman & Navigasi

| Halaman | Deskripsi |
|---|---|
| **Home** | Halaman utama — hero, fitur, teknologi, roadmap, komunitas |
| **Builder** | Privacy transaction pipeline builder |
| **Dock** | Dashboard manajemen privasi wallet |
| **Documentation** | Dokumentasi teknis & API |
| **Examples** | Contoh penggunaan KryptonX |
| **Whitepaper** | Whitepaper resmi KryptonX |

---

## Roadmap

### Phase 1 — Foundation `Q1 2026` ✅
- Launch website resmi kryptonx.xyz
- Pembentukan komunitas & media sosial
- Launch di Pump.fun
- Integrasi DexScreener

### Phase 2 — Growth `Q2 2026` 🔄
- Testnet dengan fitur privasi inti
- Integrasi smart contract
- Security audit oleh firma terkemuka
- Aplikasi mobile wallet (iOS & Android)
- Listing di exchange besar
- Cross-chain bridge
- Launch community governance

### Phase 3 — Expansion `Q3 2026` 🔜
- Integrasi Privacy DEX
- Solusi Layer 2 scaling
- Kemitraan enterprise
- Fitur privasi quantum-resistant

### Phase 4 — Global Adoption `Q4 2026` 🔜
- Solusi pembayaran merchant
- Ekspansi ekosistem DeFi
- Kampanye marketing global
- Lisensi protokol privasi

---

## Komunitas

| Platform | Link |
|---|---|
| Website | [kryptonx.xyz](https://kryptonx.xyz) |
| X (Twitter) | [@kryptonxprivacy](https://x.com/kryptonxprivacy?s=11) |
| Telegram | [KryptonX_Privacy](https://t.me/KryptonX_Privacy) |
| GitHub | [KryptonX-Privacy](https://github.com/KryptonX-Privacy/kryptonx-landing) |

---

## Cara Menjalankan

```bash
# Clone repository
git clone https://github.com/KryptonX-Privacy/kryptonx-landing.git
cd kryptonx-landing

# Install dependencies
pnpm install

# Jalankan dev server
pnpm dev

# Build production
pnpm build
```

> Butuh Node.js 18+ dan pnpm 8+.

---

## Lisensi

Lihat [LICENSE](./LICENSE) untuk detail.

---

<p align="center">
  <strong>KryptonX</strong> · Privacy First · Security Always · Decentralized Forever<br/>
  © 2026 KryptonX · <a href="https://kryptonx.xyz">kryptonx.xyz</a>
</p>
