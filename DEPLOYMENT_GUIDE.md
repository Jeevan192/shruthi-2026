# 🚀 Shruthi 2025 Website - Professional Deployment Guide

---

## 📋 Table of Contents
1. [Pre-Deployment Checklist](#pre-deployment-checklist)
2. [Domain & Hosting Requirements](#domain--hosting-requirements)
3. [Deployment Options](#deployment-options)
4. [Step-by-Step Deployment Process](#step-by-step-deployment-process)
5. [Post-Deployment Configuration](#post-deployment-configuration)
6. [SSL Certificate Setup](#ssl-certificate-setup)
7. [Performance Optimization](#performance-optimization)
8. [Monitoring & Maintenance](#monitoring--maintenance)
9. [Troubleshooting](#troubleshooting)
10. [Cost Breakdown](#cost-breakdown)

---

## ✅ Pre-Deployment Checklist

### Code Fixes Required
- [ ] Fix year inconsistency in `day2.html` (change "2024" to "2025")
- [ ] Add valid LinkedIn URL in footer sections
- [ ] Verify all Google Forms registration links are active
- [ ] Test all external links (Instagram, YouTube, etc.)
- [ ] Verify contact phone numbers are correct
- [ ] Test contact form email functionality

### Asset Verification
- [ ] All images are optimized (.webp format ✓)
- [ ] All image paths are correct
- [ ] Favicon is present (cbitlogo.ico ✓)
- [ ] All CSS/JS files are minified (recommended)
- [ ] Remove unused images/files

### Browser Testing
- [ ] Chrome/Edge (latest)
- [ ] Firefox (latest)
- [ ] Safari (desktop + iOS)
- [ ] Mobile browsers (Android Chrome, iOS Safari)

### Performance Testing
- [ ] Google PageSpeed Insights score > 90
- [ ] Mobile responsiveness verified
- [ ] Load time < 3 seconds

---

## 🌐 Domain & Hosting Requirements

### Domain Name Options

**Current Domain:** `shruthi2025.live` (mentioned in meta tags)

#### Option 1: Purchase New Domain
**Recommended Registrars:**
- **GoDaddy** (₹999/year for .com, ₹299/year for .in)
- **Namecheap** ($10-15/year)
- **Google Domains** ($12/year)
- **Hostinger** (₹699/year for .in)

**Suggested Domain Names:**
- `shruthi2025.live` (if available)
- `shruthicbit.in`
- `shruthifest.in`
- `shruthi.cbit.ac.in` (subdomain - request from college IT)

#### Option 2: Use College Subdomain
Contact CBIT IT Department for subdomain like:
- `shruthi.cbit.ac.in` (FREE - recommended)
- `shruthi2025.cbit.ac.in`

---

### Hosting Requirements

**Technical Specifications:**
- **Type:** Static Website Hosting
- **Storage:** 200-500 MB
- **Bandwidth:** 10-50 GB/month (for 10,000+ visitors)
- **SSL:** Required (HTTPS)
- **CDN:** Recommended for faster loading
- **Server Location:** India (for faster local access)

---

## 🎯 Deployment Options

### Option 1: GitHub Pages (FREE - Recommended for Students) ⭐

**Pros:**
- ✅ Completely FREE
- ✅ Automatic SSL certificate
- ✅ Easy deployment
- ✅ Custom domain support
- ✅ Version control included
- ✅ 100% uptime guarantee

**Cons:**
- ❌ Public repository (unless GitHub Pro)
- ❌ 100 GB bandwidth/month limit
- ❌ No server-side processing

**Best for:** Student projects, event websites, portfolios

---

### Option 2: Netlify (FREE Tier Available) ⭐⭐

**Pros:**
- ✅ FREE tier with 100 GB bandwidth
- ✅ Automatic SSL
- ✅ Form handling included
- ✅ Continuous deployment
- ✅ Custom domain support
- ✅ CDN included
- ✅ Advanced features (redirects, headers)

**Cons:**
- ❌ Bandwidth limits on free tier

**Best for:** Modern static websites with forms

---

### Option 3: Vercel (FREE Tier Available) ⭐⭐

**Pros:**
- ✅ FREE hosting
- ✅ Automatic SSL
- ✅ Global CDN
- ✅ Excellent performance
- ✅ Easy deployment
- ✅ Custom domains

**Cons:**
- ❌ Bandwidth limits on free tier

**Best for:** Professional static websites

---

### Option 4: Traditional Hosting (PAID)

**Providers:**
- **Hostinger** (₹99-299/month)
- **Bluehost** (₹199-699/month)
- **GoDaddy** (₹299-999/month)
- **DigitalOcean** ($5-10/month)

**Pros:**
- ✅ Full control
- ✅ Unlimited bandwidth (usually)
- ✅ cPanel access
- ✅ Email hosting included
- ✅ Database support

**Cons:**
- ❌ Monthly cost
- ❌ Requires technical knowledge
- ❌ Manual SSL setup (usually)

**Best for:** Large organizations, requires backend

---

## 📝 Step-by-Step Deployment Process

---

## METHOD 1: GitHub Pages Deployment (Recommended)

### Step 1: Create GitHub Repository

```bash
# Open PowerShell/Terminal in project directory
cd "c:\Users\Jeevan Reddy\Downloads\shruthi-website-2025-main\shruthi-website-2025-main"

# Initialize Git (if not already done)
git init

# Add all files
git add .

# Commit files
git commit -m "Initial commit - Shruthi 2025 website"
```

### Step 2: Push to GitHub

1. Create repository on GitHub:
   - Go to https://github.com/new
   - Repository name: `shruthi-2025-website`
   - Description: "Official website for Shruthi 2025 - CBIT Annual Fest"
   - Choose Public or Private
   - Click "Create repository"

2. Push code:
```bash
git remote add origin https://github.com/YOUR_USERNAME/shruthi-2025-website.git
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to repository **Settings**
2. Scroll to **Pages** section (left sidebar)
3. Under **Source**, select:
   - Branch: `main`
   - Folder: `/ (root)`
4. Click **Save**
5. Wait 2-3 minutes for deployment

**Your site will be live at:**
`https://YOUR_USERNAME.github.io/shruthi-2025-website/`

### Step 4: Add Custom Domain (Optional)

1. Purchase domain (e.g., `shruthi2025.live`)
2. In GitHub Pages settings, enter custom domain
3. Add DNS records at domain registrar:

```
Type: CNAME
Name: www
Value: YOUR_USERNAME.github.io

Type: A (for apex domain)
Name: @
Value: 185.199.108.153
Value: 185.199.109.153
Value: 185.199.110.153
Value: 185.199.111.153
```

4. Enable **Enforce HTTPS** (after DNS propagation)

---

## METHOD 2: Netlify Deployment

### Step 1: Prepare Files

Ensure all files are in project root (index.html at root level).

### Step 2: Deploy via Drag & Drop

1. Go to https://app.netlify.com/drop
2. Drag the entire project folder
3. Site is live instantly!

**Or via CLI:**

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy
netlify deploy --prod
```

### Step 3: Configure Domain

1. Go to **Domain Settings**
2. Click **Add custom domain**
3. Enter your domain name
4. Update DNS records as instructed
5. SSL is automatic!

### Step 4: Configure Forms (for Contact Form)

Add to contact form in `index.html`:
```html
<form name="contact" method="POST" data-netlify="true">
```

Netlify will automatically handle form submissions!

---

## METHOD 3: Vercel Deployment

### Step 1: Install Vercel CLI

```bash
npm install -g vercel
```

### Step 2: Deploy

```bash
# Navigate to project directory
cd "c:\Users\Jeevan Reddy\Downloads\shruthi-website-2025-main\shruthi-website-2025-main"

# Login
vercel login

# Deploy
vercel --prod
```

### Step 3: Add Custom Domain

1. Go to project dashboard
2. Click **Domains**
3. Add your domain
4. Configure DNS as instructed

---

## METHOD 4: Traditional Hosting (cPanel)

### Step 1: Purchase Hosting

Choose provider (Hostinger recommended for India):
- Plan: Shared Hosting (₹99-299/month)
- Features needed: cPanel, SSL, 1 GB storage

### Step 2: Upload Files

**Via cPanel File Manager:**
1. Login to cPanel
2. Go to **File Manager**
3. Navigate to `public_html` folder
4. Upload all website files
5. Extract if uploaded as ZIP

**Via FTP:**
1. Download FileZilla (free FTP client)
2. Connect using credentials from hosting provider
3. Upload all files to `public_html`

### Step 3: Configure Domain

1. Point domain nameservers to hosting provider
2. Wait for DNS propagation (24-48 hours)

### Step 4: Enable SSL

1. In cPanel, go to **SSL/TLS Status**
2. Click **Run AutoSSL**
3. Wait for certificate installation

---

## 🔒 SSL Certificate Setup

### Why SSL is Essential
- ✅ Encrypts data transmission
- ✅ Shows padlock in browser
- ✅ Required for HTTPS
- ✅ Better SEO ranking
- ✅ Builds user trust

### Free SSL Options

**1. Let's Encrypt (Free)**
- Automatic with GitHub Pages, Netlify, Vercel
- Manual setup on cPanel (AutoSSL)
- Renews automatically every 90 days

**2. Cloudflare SSL (Free)**
- Acts as proxy + CDN
- Instant SSL certificate
- Additional DDoS protection

### Cloudflare Setup

1. Sign up at https://cloudflare.com
2. Add your domain
3. Update nameservers at domain registrar
4. Enable **Flexible SSL** in Cloudflare dashboard
5. Enable **Always Use HTTPS**
6. Enable **Auto Minify** for CSS/JS/HTML

---

## ⚡ Performance Optimization

### 1. Enable Compression

Add to `.htaccess` (for Apache servers):
```apache
# Enable GZIP Compression
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript
</IfModule>

# Enable Caching
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/webp "access plus 1 year"
  ExpiresByType image/gif "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/pdf "access plus 1 month"
  ExpiresByType text/javascript "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
  ExpiresByType application/x-shockwave-flash "access plus 1 month"
  ExpiresByType image/x-icon "access plus 1 year"
  ExpiresDefault "access plus 2 days"
</IfModule>
```

### 2. Image Optimization

Already done! All images are in .webp format ✓

### 3. Minify CSS/JS

**Using Online Tools:**
- CSS: https://cssminifier.com/
- JS: https://javascript-minifier.com/

**Or use build tools:**
```bash
# Install minifiers
npm install -g clean-css-cli uglify-js

# Minify CSS
cleancss -o assets/css/style.min.css assets/css/style.css

# Minify JS
uglifyjs assets/js/script.js -o assets/js/script.min.js
```

### 4. CDN Integration

Use Cloudflare (free) or jsDelivr for assets:
```html
<!-- Example for external libraries -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/...">
```

### 5. Lazy Loading Images

Add `loading="lazy"` to images (mostly done ✓):
```html
<img src="image.webp" loading="lazy" alt="description">
```

---

## 📊 Post-Deployment Configuration

### 1. Analytics Setup (Google Analytics)

**Add Before `</head>` in all HTML files:**

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

**Steps:**
1. Create Google Analytics account
2. Add property for shruthi2025.live
3. Get tracking ID (G-XXXXXXXXXX)
4. Add code to website
5. Verify tracking works

### 2. Search Console Setup

1. Go to https://search.google.com/search-console
2. Add property (domain or URL prefix)
3. Verify ownership (HTML file or DNS method)
4. Submit sitemap (create sitemap.xml)

### 3. Social Media Integration

Update meta tags with live URL:
```html
<meta property="og:url" content="https://shruthi2025.live">
<meta property="og:image" content="https://shruthi2025.live/assets/images/website-opentag.png">
```

### 4. Create robots.txt

Create file at root:
```txt
User-agent: *
Allow: /

Sitemap: https://shruthi2025.live/sitemap.xml
```

### 5. Create sitemap.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://shruthi2025.live/</loc>
    <lastmod>2025-03-01</lastmod>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://shruthi2025.live/day1.html</loc>
    <lastmod>2025-03-01</lastmod>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://shruthi2025.live/day2.html</loc>
    <lastmod>2025-03-01</lastmod>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://shruthi2025.live/day3.html</loc>
    <lastmod>2025-03-01</lastmod>
    <priority>0.8</priority>
  </url>
</urlset>
```

---

## 📧 Email Configuration

### Option 1: Use Netlify Forms (Recommended)

Already works automatically on Netlify - no configuration needed!

### Option 2: FormSpree

1. Sign up at https://formspree.io
2. Get form endpoint
3. Update form action:
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

### Option 3: Custom Email (with hosting)

If using traditional hosting with cPanel:
1. Create email: `contact@shruthi2025.live`
2. Update contact form to use PHP mail script

---

## 🔍 Monitoring & Maintenance

### Weekly Tasks
- [ ] Check website uptime
- [ ] Monitor registration form submissions
- [ ] Verify all links working
- [ ] Check Google Analytics traffic

### Tools for Monitoring

**1. UptimeRobot (Free)**
- https://uptimerobot.com
- Monitors website every 5 minutes
- Email alerts if site goes down

**2. Google PageSpeed Insights**
- https://pagespeed.web.dev
- Check performance weekly
- Aim for score > 90

**3. Broken Link Checker**
- https://www.deadlinkchecker.com
- Check monthly

**4. Analytics Dashboard**
- Google Analytics
- Track:
  - Daily visitors
  - Most viewed pages
  - Registration button clicks
  - Mobile vs Desktop usage

---

## 🐛 Troubleshooting

### Issue 1: Website Not Loading

**Possible Causes:**
- DNS not propagated (wait 24-48 hours)
- Wrong nameservers
- Files not uploaded correctly

**Solution:**
```bash
# Check DNS propagation
https://dnschecker.org

# Verify all files uploaded
# Check index.html is in root directory
```

### Issue 2: Images Not Displaying

**Possible Causes:**
- Wrong file paths
- Case-sensitive servers (Linux)

**Solution:**
- Verify all image paths are correct
- Ensure lowercase/uppercase matches exactly
- Check images folder uploaded completely

### Issue 3: CSS/JS Not Loading

**Possible Causes:**
- Wrong relative paths
- Files blocked by CDN

**Solution:**
- Check browser console (F12) for errors
- Verify file paths in HTML
- Clear browser cache (Ctrl+Shift+Del)

### Issue 4: Contact Form Not Working

**Solution:**
- Use Netlify Forms or FormSpree
- Or implement backend (PHP/Node.js)

### Issue 5: Slow Loading

**Solutions:**
- Enable Cloudflare
- Compress images further
- Minify CSS/JS
- Enable browser caching

---

## 💰 Cost Breakdown

### Option A: FREE (Recommended for Students)

| Item | Provider | Cost |
|------|----------|------|
| Hosting | GitHub Pages/Netlify/Vercel | FREE |
| SSL Certificate | Let's Encrypt | FREE |
| Domain | College subdomain | FREE |
| Email Forms | Netlify/FormSpree | FREE |
| Analytics | Google Analytics | FREE |
| **Total Annual Cost** | | **₹0** |

---

### Option B: Budget (Recommended for Professional)

| Item | Provider | Annual Cost |
|------|----------|-------------|
| Domain (.in) | Hostinger/Namecheap | ₹299 - ₹699 |
| Hosting | Netlify Pro (optional) | Free tier OK |
| SSL Certificate | Let's Encrypt | FREE |
| CDN | Cloudflare | FREE |
| Analytics | Google Analytics | FREE |
| Email | FormSpree Free | FREE |
| **Total Annual Cost** | | **₹299 - ₹699** |

---

### Option C: Premium

| Item | Provider | Annual Cost |
|------|----------|-------------|
| Domain (.com) | GoDaddy/Namecheap | ₹999 - ₹1,299 |
| Hosting | Hostinger Premium | ₹3,588 - ₹7,188 |
| SSL Certificate | Included with hosting | FREE |
| Email Hosting | 5 email accounts | Included |
| CDN | Cloudflare Pro (optional) | $240/year |
| **Total Annual Cost** | | **₹4,587 - ₹8,587** |

---

## 📋 Pre-Launch Checklist

### Code Quality
- [ ] All HTML validated (https://validator.w3.org/)
- [ ] All links tested and working
- [ ] Forms tested and working
- [ ] Mobile responsive on all devices
- [ ] Cross-browser tested (Chrome, Firefox, Safari)
- [ ] Page load speed < 3 seconds
- [ ] All images optimized

### Content
- [ ] All event details accurate
- [ ] Registration links active
- [ ] Contact information correct
- [ ] Social media links working
- [ ] Copyright/credits updated
- [ ] Privacy policy added (if collecting data)

### Technical
- [ ] SSL certificate active (HTTPS)
- [ ] Custom domain configured
- [ ] Analytics tracking setup
- [ ] Search Console verified
- [ ] Sitemap submitted
- [ ] robots.txt configured
- [ ] Favicon displaying correctly
- [ ] Meta tags optimized

### Security
- [ ] No sensitive data in code
- [ ] Forms protected from spam
- [ ] Regular backups configured
- [ ] Uptime monitoring active

---

## 🎯 Recommended Deployment Path

**For Shruthi 2025 (Student Event):**

### Phase 1: Immediate (FREE)
1. **Deploy to GitHub Pages** (5 minutes)
   - Push code to GitHub
   - Enable GitHub Pages
   - Live at: `username.github.io/shruthi-2025`

### Phase 2: Custom Domain (Optional - ₹299-699/year)
2. **Purchase Domain**
   - Buy `shruthifest.in` or similar
   - Configure DNS to point to GitHub Pages
   - Enable SSL

### Phase 3: Enhancement (FREE)
3. **Add Cloudflare**
   - Better caching
   - DDoS protection
   - Analytics

### Phase 4: Professional (Optional)
4. **Migrate to Netlify**
   - Better form handling
   - Faster deployment
   - Advanced features

---

## 📞 Support Resources

### Documentation
- **GitHub Pages:** https://pages.github.com/
- **Netlify Docs:** https://docs.netlify.com/
- **Vercel Docs:** https://vercel.com/docs
- **Cloudflare Guide:** https://developers.cloudflare.com/

### Community Help
- **Stack Overflow:** https://stackoverflow.com/
- **Dev.to:** https://dev.to/
- **Reddit r/webdev:** https://reddit.com/r/webdev

### Video Tutorials
- **GitHub Pages:** Search "GitHub Pages deployment tutorial"
- **Netlify:** Search "Netlify static site deployment"
- **Custom Domain:** Search "Connect custom domain to GitHub Pages"

---

## 🎉 Post-Deployment Marketing

### Promote Your Website

1. **Social Media Posts**
   - Create announcement graphics
   - Share on Instagram, Facebook, LinkedIn
   - Use hashtags: #Shruthi2025 #CBIT #TechFest

2. **QR Code Generation**
   - Create QR code linking to website
   - Print on posters, flyers, banners
   - Use: https://qr-code-generator.com/

3. **Email Campaign**
   - Send to CBIT mailing lists
   - Include prominent website link
   - Highlight key features

4. **WhatsApp Broadcast**
   - Share link in college groups
   - Create status updates with link

---

## ✨ Final Notes

**Remember:**
- Start with FREE options (GitHub Pages/Netlify)
- Custom domain is optional but professional
- SSL certificate is MANDATORY
- Test thoroughly before promoting
- Monitor regularly during event period
- Keep backup of all files

**Timeline:**
- **Setup:** 30 minutes - 2 hours
- **DNS Propagation:** 24-48 hours
- **Testing:** 1-2 days
- **Total:** 3-4 days before event

**Need Help?**
Contact the developers:
- Mokshith Balidi: [LinkedIn](https://www.linkedin.com/in/mokshithbalidi/)
- Pranav Vuddagiri: [LinkedIn](https://www.linkedin.com/in/pranav2036/)

---

## 📄 Document Information

**Document Version:** 1.0  
**Last Updated:** February 9, 2026  
**Prepared For:** Shruthi 2025 - CBIT Annual Fest  
**Website:** https://shruthi2025.live  

---

**Good luck with your deployment! 🚀**

For any questions or assistance, feel free to reach out to your development team or CBIT IT department.
