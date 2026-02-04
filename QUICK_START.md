# 🚀 Quick Start Guide

## Installation & Development

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev

# 3. Open browser
# http://localhost:3000
```

## Pre-Deployment Checklist

```bash
# 1. Check for security vulnerabilities
npm audit

# 2. Build for production
npm run build

# 3. Test production build
npm start
```

## First-Time Deployment to Vercel

### Step 1: Prepare Git Repository

```bash
# Initialize git (if not already)
git init

# Configure git user (if needed)
git config user.name "Your Name"
git config user.email "your.email@example.com"

# Add all files
git add .

# Commit
git commit -m "Initial commit: Cytec repair services website"

# Create main branch
git branch -M main

# Add remote (replace with your repo URL)
git remote add origin https://github.com/yourusername/cytecrepair.git

# Push to GitHub
git push -u origin main
```

### Step 2: Deploy to Vercel

1. Go to [https://vercel.com/new](https://vercel.com/new)
2. Click "Import Git Repository"
3. Select your GitHub repository
4. Configure project:
   - **Project Name:** 5-axis-head-repair (or your choice)
   - **Framework Preset:** Next.js
   - **Root Directory:** Leave blank
   - **Build Command:** `npm run build`
   - **Output Directory:** `.next`
   - **Install Command:** `npm install`
5. Click "Deploy"
6. Wait 2-3 minutes for deployment to complete
7. Visit your live site at the provided URL

### Step 3: Configure Custom Domain (Optional)

1. Go to Project Settings → Domains
2. Add your custom domain
3. Follow DNS configuration instructions
4. Wait for DNS propagation (up to 48 hours)

## Subsequent Updates

Every time you push to `main` branch, Vercel automatically deploys:

```bash
# Make your changes
# ...

# Commit changes
git add .
git commit -m "Update: describe your changes"

# Push to GitHub (triggers automatic deployment)
git push origin main
```

## Environment Variables

If you need environment variables:

1. Go to Project Settings → Environment Variables
2. Add variables:
   - `NEXT_PUBLIC_SITE_URL` = your production URL
   - Add any API keys or secrets
3. Select environments: Production, Preview, Development
4. Save
5. Redeploy (Deployments → ... → Redeploy)

## Troubleshooting

### Problem: Build fails with "Module not found"
**Solution:** Run `npm install` and ensure package.json is committed

### Problem: Old version still showing after push
**Solution:** Check Deployments tab on Vercel, may need manual redeploy

### Problem: Form doesn't send emails
**Solution:** Forms currently log to console. You need to implement backend API endpoint.

### Problem: 404 on page routes
**Solution:** Clear Vercel cache and redeploy. Ensure proper Next.js App Router structure.

## Testing Checklist Before Launch

- [ ] All pages load (`/`, `/spindle-rotary-union-leakage`, `/spindle-repair-rebuild`, `/hydraulic-aggregate-pressure-issue`)
- [ ] Forms open and accept input
- [ ] Mobile menu works
- [ ] FAQ accordions expand/collapse
- [ ] No console errors
- [ ] All links work
- [ ] Contact form validates required fields

## Support Resources

- **Next.js Docs:** https://nextjs.org/docs
- **Vercel Docs:** https://vercel.com/docs
- **Project README:** See README.md for detailed documentation

---

**Need Help?** Check README.md for comprehensive documentation and troubleshooting.
