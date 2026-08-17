# SWP — Plastic Injection Molding & Mold Development

Production-ready Next.js website for SWP Company Limited, a Thailand-based ISO 9001 certified plastic injection molding and mold development company.

---

## Technology Stack

| Layer | Technology | Reason |
|---|---|---|
| Framework | Next.js 15 (App Router) | React-based, static generation, fast, Vercel-native |
| Language | TypeScript | Type safety, maintainability |
| Styling | Tailwind CSS v3 | Utility-first, no runtime CSS |
| Font | Manrope (Google Fonts) | Clean, modern, loaded via next/font |
| Hosting | Vercel | GitHub auto-deploy, free SSL, global CDN, custom domain |
| Database | **None** | Corporate website — no login, CRUD, or dynamic DB needed |
| Backend | **None** | Static site — no API routes required |
| CMS | **None** | Products managed via `src/data/products.ts` |
| Version Control | Git + GitHub | Backup, collaboration, CI/CD trigger |

> **Why no database or CMS?** This is a corporate brochure website. Products and content are managed directly in code files. This keeps the stack simple, fast, and maintenance-free. A CMS can be added later if needed.

---

## Project Structure

```
swp-website/
├── public/
│   ├── assets/
│   │   ├── images/           # Static images (logo, product photos, etc.)
│   │   └── brochures/        # ← Place PDF brochures here
│   │       ├── swp-company-brochure.pdf
│   │       └── swp-capabilities-guide.pdf
│   └── favicon.ico
├── src/
│   ├── app/
│   │   ├── about/            # About Us page (/about)
│   │   │   ├── components/
│   │   │   └── page.tsx
│   │   ├── brochure/         # Download Brochure page (/brochure)
│   │   │   ├── components/
│   │   │   │   └── BrochureSection.tsx  ← Edit brochure list here
│   │   │   └── page.tsx
│   │   ├── capabilities/     # Capabilities page (/capabilities)
│   │   │   ├── components/
│   │   │   └── page.tsx
│   │   ├── contact/          # Contact page (/contact)
│   │   │   ├── components/
│   │   │   └── page.tsx
│   │   ├── products/         # Products page (/products)
│   │   │   ├── components/
│   │   │   │   ├── ProductCard.tsx
│   │   │   │   └── ProductsGrid.tsx
│   │   │   └── page.tsx
│   │   ├── components/       # Home page sections
│   │   │   ├── HeroSection.tsx
│   │   │   ├── FeatureStrip.tsx
│   │   │   ├── IndustriesSection.tsx
│   │   │   └── HomeCTASection.tsx
│   │   │   ├── layout.tsx        # Root layout (fonts, metadata)
│   │   ├── page.tsx          # Home page (/)
│   │   └── not-found.tsx     # 404 page
│   ├── components/
│   │   ├── Header.tsx        # Global navigation
│   │   ├── Footer.tsx        # Global footer
│   │   ├── Breadcrumb.tsx    # Breadcrumb navigation
│   │   └── ui/               # Reusable UI primitives
│   ├── data/
│   │   └── products.ts       # ← All product data lives here
│   └── styles/
│       ├── tailwind.css      # Tailwind directives + CSS variables
│       └── index.css         # Global base styles
├── .env.example              # Environment variable template (no secrets)
├── .gitignore                # Git ignore rules
├── next.config.mjs           # Next.js configuration
├── tailwind.config.js        # Tailwind configuration
├── tsconfig.json             # TypeScript configuration
└── package.json              # Dependencies and scripts
```

---

## A. Local Development

### Prerequisites

- Node.js 18.x or later
- npm 9.x or later

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/YOUR_USERNAME/swp-website.git
cd swp-website

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.example .env.local
# Edit .env.local — set NEXT_PUBLIC_SITE_URL=http://localhost:3000 for local dev

# 4. Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

```bash
npm run dev       # Start development server (hot reload)
npm run build     # Create production build
npm run start     # Start production server locally
npm run lint      # Run ESLint
```

---

## B. Environment Variables

Copy `.env.example` to `.env.local` and fill in the values:

| Variable | Required | Description |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | ✅ Yes | Full production URL (e.g. `https://www.yourdomain.co.th`) |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Optional | Google Analytics 4 ID — add when ready |

> ⚠️ **NEVER commit `.env.local` or `.env` to Git.** These files are in `.gitignore`.

> ⚠️ Variables prefixed with `NEXT_PUBLIC_` are visible in the browser. Never put secret keys in `NEXT_PUBLIC_` variables.

---

## C. How to Edit Website Content

### Edit Company Name / Tagline

File: `src/components/Header.tsx` — update the `SWP` text and tagline in the Logo section.

### Edit Navigation Links

File: `src/components/Header.tsx`

Find the `navLinks` array at the top of the file and edit the labels or hrefs.

### Edit Footer Content / Contact Info

File: `src/components/Footer.tsx`

Edit the address, phone, email, and social links directly in the file.

### Edit Home Page

| Section | File |
|---|---|
| Hero (headline, subtext, CTA) | `src/app/components/HeroSection.tsx` |
| Feature strip (4 key points) | `src/app/components/FeatureStrip.tsx` |
| Industries section | `src/app/components/IndustriesSection.tsx` |
| Bottom CTA | `src/app/components/HomeCTASection.tsx` |

### Edit About Us Page

Files in: `src/app/about/components/`
- `AboutHero.tsx` — company description and main image
- `StatsSection.tsx` — numbers (years, customers, projects, staff)
- `VisionMissionSection.tsx` — vision and mission text

### Edit Capabilities Page

Files in: `src/app/capabilities/components/`
- `CapabilitiesHero.tsx` — headline and intro text
- `CapabilityCards.tsx` — 4 capability cards (title, image, bullet points)
- `DifferentiatorsStrip.tsx` — 4 differentiator items

### Edit Contact Page

File: `src/app/contact/components/ContactSection.tsx`

Edit the `contactDetails` array at the top of the file to update address, phone, email, and working hours.

---

## D. How to Add / Edit / Delete Products

All product data is in **one file**: `src/data/products.ts`

You do **not** need to touch any component or page file to manage products.

### Add a Product

Open `src/data/products.ts` and add a new object to the `products` array:

```ts
{
  id: 'unique-product-id',           // Must be unique
  name: 'Product Name',
  category: 'Automotive',            // Must match a value in PRODUCT_CATEGORIES
  shortDescription: 'One-line summary shown on the card.',
  description: 'Longer description.',
  image: '/assets/images/products/your-image.jpg',  // or external URL
  imageAlt: 'Descriptive alt text for accessibility',
  specs: [
    { label: 'Material', value: 'ABS' },
    { label: 'Tolerance', value: '±0.05 mm' },
  ],
  featured: true,  // optional
},
```

### Edit a Product

Find the product by its `id` in `src/data/products.ts` and change any field.

### Delete a Product

Remove the entire product object from the `products` array in `src/data/products.ts`.

### Add a Category

Add a new string to the `PRODUCT_CATEGORIES` array in `src/data/products.ts`:

```ts
export const PRODUCT_CATEGORIES = [
  'All',
  'Automotive',
  'Electronics',
  'Consumer Goods',
  'Industrial',
  'Your New Category',   // ← add here
] as const;
```

### Add Product Images

Place images in: `public/assets/images/products/`

Reference in products.ts as: `image: '/assets/images/products/your-image.jpg'`

---

## E. How to Change / Add Brochures

### Change the Brochure PDF

1. Place your new PDF in: `public/assets/brochures/`
2. Open `src/app/brochure/components/BrochureSection.tsx`
3. Find the `BROCHURES` array at the top of the file
4. Update the `href` field:

```ts
href: '/assets/brochures/your-new-brochure.pdf',
```

5. Update `name`, `description`, `fileSize`, and `language` as needed.

### Add a New Brochure

Add a new object to the `BROCHURES` array in `BrochureSection.tsx`:

```ts
{
  id: 'unique-id',
  name: 'New Brochure Name',
  description: 'What this brochure covers.',
  href: '/assets/brochures/new-brochure.pdf',
  fileSize: 'PDF',
  language: 'English',
},
```

> ⚠️ **Important**: The PDF file must exist in `public/assets/brochures/` before you deploy. If the file is missing, the download link will return a 404 error.

---

## F. GitHub Setup

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Initial commit
git commit -m "Initial commit: SWP production-ready website"

# Create a new repository on GitHub, then:
git remote add origin https://github.com/YOUR_USERNAME/swp-website.git
git branch -M main
git push -u origin main
```

### What NOT to commit

The `.gitignore` already excludes:
- `.env`, `.env.local`, `.env*.local` — environment secrets
- `node_modules/` — dependencies (reinstalled via `npm install`)
- `.next/` — build output

---

## G. Deploy to Vercel

### Option 1: Vercel Dashboard (Recommended)

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click **"Add New Project"**
3. Import your `swp-website` repository
4. Add environment variables (Settings → Environment Variables):
   - `NEXT_PUBLIC_SITE_URL` = `https://www.yourdomain.co.th`
5. Click **"Deploy"**

Vercel will automatically:
- Build your Next.js app
- Deploy to a global CDN
- Provision HTTPS/SSL automatically
- Re-deploy on every push to `main`

### Auto-Deploy Workflow

```
Edit code locally
     ↓
git add . && git commit -m "Your change"
     ↓
git push origin main
     ↓
Vercel detects push → builds → deploys automatically
     ↓
Production updated in ~1–2 minutes
```

> Your computer does **not** need to stay on. Vercel runs 24/7 on a global CDN.

---

## H. Custom Domain (.co.th)

### Step 1: Add Domain in Vercel

1. Go to your Vercel project → **Settings → Domains**
2. Add `yourdomain.co.th`
3. Add `www.yourdomain.co.th`

### Step 2: Configure DNS Records

Log in to your domain registrar and add:

**Root domain (`yourdomain.co.th`):**
```
Type:  A
Name:  @
Value: 76.76.21.21
TTL:   3600
```

**www subdomain (`www.yourdomain.co.th`):**
```
Type:  CNAME
Name:  www
Value: cname.vercel-dns.com
TTL:   3600
```

> DNS propagation can take 24–48 hours. Check at [dnschecker.org](https://dnschecker.org).

### Step 3: Update Environment Variable

After your domain is live, update in Vercel dashboard:
```
NEXT_PUBLIC_SITE_URL=https://www.yourdomain.co.th
```

Then trigger a redeploy.

### www vs non-www Redirect

Set your **primary domain** in Vercel → Settings → Domains. Vercel automatically redirects the other variant.

---

## I. SSL / HTTPS

Vercel automatically provisions and renews SSL certificates via **Let's Encrypt**.

### Verify HTTPS:

1. Open your domain in a browser — look for the 🔒 padlock
2. Test: `curl -I https://www.yourdomain.co.th` — should return `HTTP/2 200`

---

## J. Security Checklist

- ✅ No secrets in source code
- ✅ No `NEXT_PUBLIC_` variables used for secrets
- ✅ `.env` and `.env.local` excluded from Git
- ✅ No hardcoded domain or API keys
- ✅ Contact form has client-side validation
- ✅ No database exposed to frontend
- ✅ No admin routes or API routes with sensitive data
- ✅ Source maps disabled in production
- ✅ No SEO files (sitemap, robots.txt) — add when SEO is implemented

---

## K. Performance Notes

- **Images**: Use `AppImage` component (wraps `next/image`) — automatic WebP, lazy loading, size optimization
- **Fonts**: Loaded via `next/font/google` with `display: swap` — no layout shift
- **Code splitting**: Next.js App Router splits code per route automatically
- **Static generation**: All pages are statically generated at build time — no server needed at runtime
- **Source maps**: Disabled in production (`productionBrowserSourceMaps: false`)

---

## L. Architecture Overview

```
Code (local) → GitHub → Vercel (auto-build + deploy) → CDN → yourdomain.co.th → HTTPS → Users
```

1. **Code**: Write and test locally with `npm run dev`
2. **GitHub**: Push changes — version history, backup, triggers Vercel
3. **Vercel**: Builds and deploys automatically on every push to `main`
4. **Custom Domain**: DNS points `yourdomain.co.th` → Vercel's CDN
5. **HTTPS**: Vercel auto-provisions SSL — no manual certificate management
6. **Production**: Runs 24/7 — your computer does not need to be on

---

## M. What to Do Next (Production Checklist)

- [ ] Add real PDF brochures to `public/assets/brochures/`
- [ ] Update product data in `src/data/products.ts` with real products
- [ ] Replace placeholder images with real product photos
- [ ] Update contact info in `src/components/Footer.tsx` and `src/app/contact/components/ContactSection.tsx`
- [ ] Update company info in `src/app/about/components/AboutHero.tsx`
- [ ] Push code to GitHub
- [ ] Import repo on [vercel.com](https://vercel.com)
- [ ] Set `NEXT_PUBLIC_SITE_URL` in Vercel environment variables
- [ ] Add custom domain in Vercel → Settings → Domains
- [ ] Configure DNS records at your registrar
- [ ] Verify HTTPS is working (🔒 padlock in browser)
- [ ] Test all pages on mobile and desktop

---

## Dependencies

| Package | Version | Purpose |
|---|---|---|
| next | 15.x | React framework |
| react | 19.x | UI library |
| typescript | 5.x | Type safety |
| tailwindcss | 3.x | Utility-first CSS |
| @heroicons/react | 2.x | SVG icons |
| @tailwindcss/typography | 0.5.x | Typography plugin |

---

© 2025 SWP Company Limited. All rights reserved.