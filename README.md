# Motloutsi Sammy Trading and Projects CC

A responsive company website built with React, Vite, Tailwind CSS, React Router and Lucide icons.

## Requirements

- Node.js 18 or newer (includes npm)
- Git (for GitHub workflows)

## Install and run in VS Code

1. Open the `MotloutsiSammy-trading-and-projects-CC` folder in VS Code.
2. Open **Terminal → New Terminal**.
3. Install packages:

   ```bash
   npm install
   ```

4. Start the local development server:

   ```bash
   npm run dev
   ```

5. Open the local URL printed in the terminal (usually `http://localhost:5173`). Vite refreshes the page when you save source files.

Create a production build with `npm run build`; preview it locally with `npm run preview`.

## Update company information

Edit `src/data/company.js` to replace the phone, WhatsApp number, email, address, business hours and quote email placeholders. The website deliberately makes no claims about registration numbers, certifications or company achievements that have not been supplied. Update company copy in `src/pages/About.jsx` and the page metadata in each page's `SEO` component usage as needed.

The email values must be real addresses before launch. The contact and quote forms use a `mailto:` alternative: they validate fields and open a draft in the visitor's email application. The website does not send, receive or store form submissions. A visitor must send the email themselves. Configure a backend or form provider if automatic submissions are required.

## Add WhatsApp

Set `whatsappNumber` in `src/data/company.js` to the business number in international format using digits only, including the country code, for example `27...` (without `+`, spaces or punctuation). The floating WhatsApp shortcut activates automatically when this value is set.

## Add product and project photographs

1. Add approved product and project photos to `public/images/` (create the folder if needed).
2. For products, update the `products` entries in `src/data/company.js` with accurate product category names, descriptions and image paths, for example `/images/products/cement-bags.webp`. Only list products you actually sell or can source; add specifications and prices only when verified.
3. For projects, update the `projects` entries in `src/data/company.js` with real project images, accurate titles and categories. Do not label a project completed or ongoing unless that status is current and confirmed.
4. Use compressed WebP or AVIF images, useful descriptive alt text and photos you have permission to publish. Replace the example-photo labels and notices only when the stock placeholders have been replaced by real content.

Until real images and product details are added, the Products and Projects pages identify the current stock images as illustrative placeholders. Service and hero photos also use optimized Unsplash image URLs. Replace these in `src/data/company.js` and `src/styles.css` if you want to host all images locally.

## Push to GitHub

The supplied GitHub repository was empty when inspected. From the project folder, after Git is installed and you have authenticated with GitHub:

```bash
git init
git add .
git commit -m "Build Motloutsi Sammy company website"
git branch -M main
git remote add origin https://github.com/sammymotloutsi-debug/MotloutsiSammy-trading-and-projects-CC.git
git push -u origin main
```

If `origin` already exists, use `git remote set-url origin https://github.com/sammymotloutsi-debug/MotloutsiSammy-trading-and-projects-CC.git` rather than adding it again.

## Publish the website on Render

1. Push the project to your GitHub repository.
2. Sign in to [Render](https://render.com), choose **New → Blueprint**, and connect the GitHub repository.
3. Render reads the included `render.yaml`. Confirm the static site settings:
   - **Build command:** `npm install && npm run build`
   - **Publish directory:** `dist`
4. Click **Apply**. After deployment finishes, open the `onrender.com` URL Render provides.

The Render configuration includes a rewrite to `index.html` so React Router pages also load when visitors open a route directly. Future pushes to the connected branch can trigger automatic redeployment.

## Publish on other static hosts

This is a static Vite site. Import the GitHub repository into Vercel, Netlify or Cloudflare Pages and configure:

- **Build command:** `npm run build`
- **Output directory:** `dist`

The included `vercel.json` and `public/_redirects` configure React Router fallback for Vercel and Netlify. For other hosts, configure unknown paths to rewrite to `/index.html`. Configure a custom domain in your hosting provider. Review all placeholder copy before publishing.

## Website pages and features

- Home, About, Services, Products & Supplies, Projects, Request a Quote, Contact and Privacy Policy
- Responsive mobile navigation, accessible form fields, gallery filters, smooth scrolling, reduced-motion support and back-to-top control
- Search-friendly page titles and descriptions
- Quote and contact email-draft alternatives with clear submission status
- WhatsApp shortcut that remains inactive until a valid business number is configured
