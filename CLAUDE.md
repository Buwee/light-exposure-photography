\# CLAUDE.md



\## Identity \& Context

\- \*\*User Name:\*\* Jonny

\- \*\*Goal:\*\* Build a professional website, initialize and commit it to a GitHub repository, and deploy it seamlessly to Vercel.

\- \*\*Preferred Tech Stack:\*\* Modern frontend framework (e.g., Next.js, Vite + React, or Astro) configured for production readiness, accessibility, and high performance.



\## Build \& Environment Instructions

\- \*\*Development Server:\*\* `npm run dev` or `bun dev` (runs on `http://localhost:3000` or `http://localhost:5173`)

\- \*\*Production Build:\*\* `npm run build`

\- \*\*Linting \& Formatting:\*\* `npm run lint`



\## Execution Phases \& Instructions



\### Phase 1: Planning \& Architecture

1\. Address the user directly as \*\*Jonny\*\*.

2\. Outline the tech stack options, choosing a professional, fast, and modern layout based on Jonny's explicit niche or business goals.

3\. Map out standard professional sections (e.g., Hero, Features/Services, About, Testimonials, Contact Form, Footer) with complete, realistic content—\*\*do not use filler or placeholder text\*\*.

4\. Define design tokens (clean typography, modern colour scheme, dark/light accessibility, and fluid responsiveness).



\### Phase 2: Implementation \& Quality Checklist

1\. Generate structural, semantic HTML5 / React components.

2\. Implement modern utility styling (e.g., Tailwind CSS) keeping performance and layout clean.

3\. \*\*Quality Gates:\*\* 

&#x20;  - Verify mobile responsiveness across all components.

&#x20;  - Ensure explicit image layout bounds or optimized next-gen asset fallbacks.

&#x20;  - Configure a clean custom 404 page.



\### Phase 3: Version Control Setup (GitHub Integration)

1\. Initialize a clean local Git repository: `git init`

2\. Generate a standard `.gitignore` file including `node\_modules`, build output folders (`.next`, `dist`), and private environment files (`.env\*`).

3\. Create a descriptive first commit: `git add . \&\& git commit -m "feat: initial professional web architecture for Jonny"`

4\. Guide Jonny to run the remote push commands once they provide the repository URL, or use appropriate tools to manage the staging if configured:

&#x20;  ```bash

&#x20;  git remote add origin <GITHUB\_REPO\_URL>

&#x20;  git branch -M main

&#x20;  git push -u origin main

&#x20;  ```



\### Phase 4: Production Deployment (Vercel)

1\. Instruct the deployment framework configuration to align perfectly with Vercel's zero-config requirements.

2\. Provide step-by-step guidance for dashboard linking:

&#x20;  - Log into \[Vercel](https://vercel.com).

&#x20;  - Select \*\*Add New → Project\*\*.

&#x20;  - Import Jonny's newly pushed GitHub repository.

&#x20;  - Let Vercel auto-detect the build commands (`npm run build`) and output directory.

&#x20;  - Click \*\*Deploy\*\*.

3\. Verify post-deployment status. If there are deployment runtime errors or build errors, immediately ingest the build log to apply specific, automated hotfixes.



\## Traps \& Guardrails

\- \*\*No Placeholders:\*\* Avoid any generic "Lorem Ipsum" strings. Use highly realistic, contextual professional copy.

\- \*\*Silent Failures:\*\* Watch for unclosed tags or missing dependency declarations that break Vercel's automated pipelines during code evaluation.



