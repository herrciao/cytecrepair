# 5 Axis Head Repair Website

> **Production-ready, SEO-focused lead generation site for independent aftermarket repair services**

Independent aftermarket repair and rebuild services for machines equipped with Cytec two-axis milling heads. This is a high-intent lead generation website designed to attract qualified inbound leads from global end users, distributors, and service partners.

**Domain:** www.5axisheadrepair.com

---

## 🎯 Project Overview

### Business Goal
Generate qualified inbound leads for independent aftermarket repair services for machines equipped with Cytec two-axis milling heads.

### Target Audience
- Global end users (non-China focus)
- Distributors / service partners
- People searching because the machine is already failing or stopped

### Core Services
1. **Spindle Rotary Union Leakage** - Oil/coolant leakage diagnosis and seal replacement
2. **Spindle Repair & Rebuild** - Bearing, encoder, and thermal issue resolution
3. **Hydraulic Aggregate Issues** - Pressure instability and clamping problems

---

## 🏗️ Technical Stack

- **Framework:** Next.js 15+ (App Router)
- **Language:** TypeScript 5.7+
- **Styling:** Tailwind CSS 3.4+
- **Runtime:** React 19
- **Deployment:** Vercel-optimized (standalone output)

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager
- Git

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd cytecrepair

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
# Create optimized production build
npm run build

# Test production build locally
npm start
```

---

## 📂 Project Structure

```
cytecrepair/
├── app/                                    # Next.js App Router
│   ├── layout.tsx                         # Root layout with metadata
│   ├── page.tsx                           # Main landing page
│   ├── globals.css                        # Global styles
│   ├── spindle-rotary-union-leakage/     # SEO page 1
│   │   └── page.tsx
│   ├── spindle-repair-rebuild/           # SEO page 2
│   │   └── page.tsx
│   └── hydraulic-aggregate-pressure-issue/ # SEO page 3
│       └── page.tsx
├── components/                            # Reusable React components
│   ├── Header.tsx                        # Navigation header
│   ├── Footer.tsx                        # Footer with legal disclaimer
│   ├── AssessmentForm.tsx               # Lead capture form
│   ├── ServiceCard.tsx                  # Service preview cards
│   └── FAQ.tsx                          # FAQ with schema markup
├── public/                               # Static assets
├── package.json                          # Dependencies
├── next.config.ts                       # Next.js configuration
├── tailwind.config.ts                   # Tailwind configuration
└── tsconfig.json                        # TypeScript configuration
```

---

## 🎨 Key Features

### ✅ SEO Optimized
- Unique meta titles and descriptions for each page
- Semantic HTML structure (H1, H2, proper heading hierarchy)
- FAQ schema markup for rich snippets
- Clean URLs with keyword-focused slugs
- OpenGraph metadata for social sharing

### ✅ Assessment-First Philosophy
- Prominent CTAs for online assessment
- Forms require photos/videos/alarm descriptions
- No premature parts recommendations
- Clear intake process explanation

### ✅ Legal Compliance
- Clear non-OEM disclaimer on every page
- Footer trademark notice
- No OEM authorization claims
- Independent aftermarket positioning

### ✅ Mobile Responsive
- Fully responsive design
- Mobile-first navigation
- Touch-friendly forms and CTAs
- Optimized for all screen sizes

### ✅ Performance
- Standalone output for fast builds
- Optimized CSS with Tailwind
- Static generation where possible
- Minimal JavaScript payload

---

## 📄 Page Details

### Main Landing Page (`/`)
**Sections:**
1. Hero - Downtime-focused headline with CTA
2. Services - 3 cards linking to SEO pages
3. How We Work - 4-step process
4. Why Independent Aftermarket - Risk-aware positioning
5. Evidence - Placeholder for case photos
6. FAQ - 6 high-intent questions
7. Contact Form - Assessment request form
8. Legal Footer - Disclaimers

**SEO Focus:** General brand awareness and service overview

---

### SEO Page 1: Spindle Rotary Union Leakage (`/spindle-rotary-union-leakage`)

**Keywords:**
- spindle rotary union leakage
- Cytec two-axis head oil leak
- spindle seal replacement
- rotary union repair

**Content Focus:**
- Oil/coolant leakage symptoms
- Progressive failure pattern explanation
- Seal wear and pressure imbalance causes
- Risk of bearing contamination
- 4-step repair approach
- 5 FAQs with schema markup

**Conversion Goal:** Photo submission for online assessment

---

### SEO Page 2: Spindle Repair & Rebuild (`/spindle-repair-rebuild`)

**Keywords:**
- Cytec spindle repair
- two-axis head spindle rebuild
- spindle bearing replacement
- encoder signal issues
- spindle vibration noise

**Content Focus:**
- Comprehensive symptom list (acoustic, thermal, electronic, operational)
- Encoder system diagnostics
- Gear-based encoder issues (connector wear, cable fatigue)
- Lenord + Bauer industry reference (no OEM part numbers)
- Targeted repair vs. full rebuild decision matrix
- 7-step repair process
- 5 FAQs with schema markup

**Conversion Goal:** Symptom description submission

---

### SEO Page 3: Hydraulic Aggregate Pressure Issue (`/hydraulic-aggregate-pressure-issue`)

**Keywords:**
- hydraulic aggregate pressure
- Cytec two-axis head hydraulic
- cannot hold pressure
- hydraulic clamping issues
- pressure instability

**Content Focus:**
- Hydraulic aggregate function explanation
- Pressure instability escalation pattern
- 4 symptom categories (build-up, retention, clamping, alarms)
- Component-level diagnosis approach
- Check valves, accumulator, seals, sensors breakdown
- Cost comparison: targeted repair vs. full replacement
- 6-step assessment & repair process
- 5 FAQs with schema markup

**Conversion Goal:** Pressure issue pattern submission

---

## 🔐 Legal & Brand Guidelines (CRITICAL)

### ❌ NEVER Use:
- "official"
- "authorized"
- "certified"
- "OEM-approved"
- OEM part numbers
- OEM manual references

### ✅ ALWAYS Use:
- "independent"
- "aftermarket"
- "non-OEM"
- "for machines equipped with Cytec two-axis heads"

### Required Disclaimers:
Every page includes footer disclaimer stating:
> "We are an **independent**, **non-OEM**, **aftermarket** service provider. We are NOT authorized, certified, or affiliated with any original equipment manufacturer (OEM)."

---

## 📝 Content Update Guidelines

### Adding New Service Pages

1. Create new directory in `app/[service-slug]/`
2. Add `page.tsx` with:
   - Unique H1 (only one per page)
   - Symptom-driven narrative
   - Clear CTA for assessment
   - 3-5 FAQs with schema
   - Proper metadata export
3. Update navigation in `Header.tsx`
4. Update service cards on homepage
5. Update footer links

### Updating Forms

Form submissions currently log to console. To integrate with real backend:

1. Open `components/AssessmentForm.tsx`
2. Replace `handleSubmit` function with API call
3. Update success/error handling
4. Consider adding file upload for photos/videos

Example:
```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);
  
  try {
    const response = await fetch('/api/assessment', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    
    if (response.ok) {
      setSubmitStatus('success');
    } else {
      setSubmitStatus('error');
    }
  } catch (error) {
    setSubmitStatus('error');
  } finally {
    setIsSubmitting(false);
  }
};
```

---

## 🚢 Deployment

### Vercel (Recommended)

#### First-Time Deployment

1. **Push to GitHub**
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin <your-repo-url>
git push -u origin main
```

2. **Deploy to Vercel**
   - Go to [vercel.com/new](https://vercel.com/new)
   - Import your GitHub repository
   - Configure:
     - **Root Directory:** Leave blank (project is at repo root)
     - **Build Command:** `npm run build`
     - **Output Directory:** `.next`
     - **Install Command:** `npm install`
   - Click **Deploy**

3. **Add Environment Variables** (if needed)
   - Go to Project Settings → Environment Variables
   - Add any required variables
   - Redeploy to apply changes

#### Subsequent Updates

Every `git push` to `main` branch automatically triggers new deployment.

### Other Platforms

**Netlify:**
- Build command: `npm run build`
- Publish directory: `.next`
- Enable Next.js runtime

**Self-Hosted:**
```bash
npm run build
npm start
# Server runs on port 3000
```

---

## 📊 SEO Checklist

### ✅ Technical SEO
- [x] Unique title tags (< 60 characters)
- [x] Meta descriptions (< 160 characters)
- [x] Semantic HTML structure
- [x] Mobile responsive
- [x] Fast loading (optimized build)
- [x] Clean URL structure
- [x] Schema.org markup (FAQ pages)

### ✅ On-Page SEO
- [x] One H1 per page
- [x] Keyword in first paragraph
- [x] Natural keyword distribution
- [x] Internal linking
- [x] Alt text for images (when added)
- [x] Descriptive link text

### 🔜 Recommended Next Steps
- [ ] Add Google Analytics
- [ ] Submit sitemap to Google Search Console
- [ ] Add robots.txt
- [ ] Create XML sitemap
- [ ] Add structured data for Organization
- [ ] Optimize images (compress, add alt text)
- [ ] Add case study photos (anonymized)
- [ ] Set up form backend integration
- [ ] Add contact email/phone
- [ ] Create privacy policy page

---

## 🧪 Testing

### Before Deployment

```bash
# Run linter
npm run lint

# Build for production
npm run build

# Test production build
npm start
```

### Test Checklist
- [ ] All pages load without errors
- [ ] Forms submit successfully
- [ ] Navigation works on mobile
- [ ] All internal links work
- [ ] FAQ accordions expand/collapse
- [ ] Mobile menu opens/closes
- [ ] No console errors
- [ ] Meta tags correct in page source
- [ ] Schema markup validates (use [Schema Markup Validator](https://validator.schema.org/))

---

## 🐛 Troubleshooting

### Build Fails

**Issue:** `Module not found` errors  
**Solution:** Ensure all dependencies installed: `npm install`

**Issue:** TypeScript errors  
**Solution:** Check `tsconfig.json` paths configuration

### Deployment Issues

**Issue:** Old content still showing after push  
**Solution:** Clear Vercel cache or trigger manual redeploy

**Issue:** 404 on dynamic routes  
**Solution:** Ensure proper Next.js routing structure in `app/` directory

### Form Not Submitting

**Issue:** Form logs to console but doesn't send  
**Solution:** This is expected behavior. Implement backend API endpoint.

---

## 📞 Support

For questions about this codebase:
1. Check this README first
2. Review Next.js 15 documentation
3. Check component code comments

---

## 📜 License

Proprietary - All rights reserved.

---

## 🎯 Deployment Checklist (Pre-Launch)

Use this checklist before first production deployment:

### Phase 1: Current State Scan
- [ ] Git status clean
- [ ] Latest 3 commits reviewed
- [ ] All dependencies listed in package.json
- [ ] npm audit shows 0 vulnerabilities

### Phase 2: Version & Security Validation
- [ ] All dependencies at stable versions
- [ ] No security vulnerabilities present
- [ ] Local build succeeds (`npm run build`)
- [ ] Build output directory `.next` created

### Phase 3: Git Sync Preparation
- [ ] All changes committed
- [ ] Commit messages clear
- [ ] Pushed to GitHub
- [ ] Local and origin/main synchronized

### Phase 4: Deployment Configuration
- [ ] Domain name decided (if custom)
- [ ] Environment variables documented
- [ ] Vercel account ready
- [ ] Git repository connected to Vercel

### Phase 5: Post-Deployment
- [ ] Live site loads correctly
- [ ] All pages accessible
- [ ] Forms functional
- [ ] Mobile responsive verified
- [ ] Performance acceptable (< 3s load)
- [ ] Record deployment commit hash for rollback

---

## 📈 Future Enhancements

### High Priority
- [ ] Add real form backend (email or CRM integration)
- [ ] Upload actual anonymized case photos
- [ ] Add Google Analytics / tracking
- [ ] Implement contact information
- [ ] Add file upload for photos/videos in assessment form

### Medium Priority
- [ ] Create blog section for technical content
- [ ] Add multilingual support (Chinese version)
- [ ] Implement live chat widget
- [ ] Add testimonials section
- [ ] Create downloadable service guides

### Low Priority
- [ ] Add interactive diagnostic tool
- [ ] Create video content library
- [ ] Implement customer portal
- [ ] Add scheduling system
- [ ] Create mobile app

---

**Last Updated:** 2026-02-04  
**Version:** 1.0.0  
**Next.js Version:** 15.1.6  
**Node Version:** 18+
