# Vercel Deployment Guide

This project is a monorepo with a React + Vite frontend (`artifacts/mockup-sandbox`) that can be deployed to Vercel.

## What Gets Deployed

The deployment includes:
- **Homepage**: A professional landing page with hero section, features, and call-to-action
- **Component Preview System**: Access individual components at `/preview/ComponentName` routes
- **Full SPA Routing**: All routes serve the React app for seamless navigation

## Prerequisites

- Node.js 20.19+ or 22.12+ (Vite 7 requirement)
- pnpm package manager
- Vercel CLI (`npm i -g vercel`)
- Vercel account

## Quick Deploy

### Option 1: Deploy via Vercel CLI

```bash
# 1. Install Vercel CLI globally
npm install -g vercel

# 2. Login to Vercel
vercel login

# 3. Link your project to Vercel
vercel link

# 4. Deploy to preview
vercel

# 5. Deploy to production
vercel --prod
```

### Option 2: Deploy via Vercel Dashboard

1. Go to [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Import your Git repository
4. Configure the project:
   - **Framework Preset**: Vite
   - **Root Directory**: `./` (keep default)
   - **Build Command**: `pnpm --filter @workspace/mockup-sandbox run build`
   - **Output Directory**: `artifacts/mockup-sandbox/dist`
   - **Install Command**: `pnpm install --frozen-lockfile`
5. Click "Deploy"

## Configuration

The `vercel.json` file is already configured for this project:

```json
{
  "installCommand": "pnpm install --frozen-lockfile",
  "buildCommand": "pnpm --filter @workspace/mockup-sandbox run build",
  "outputDirectory": "artifacts/mockup-sandbox/dist",
  "framework": "vite",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

This configuration:
- Uses pnpm for dependency installation
- Builds only the `mockup-sandbox` package
- Outputs to the correct dist directory
- Enables SPA routing (all routes serve index.html)

## Environment Variables

If your app needs environment variables, add them in the Vercel dashboard:

1. Go to your project settings
2. Navigate to "Environment Variables"
3. Add variables for each environment (Production, Preview, Development)

## Notes

### Node.js Version

Vercel automatically uses Node.js 20.x or newer, which is required for Vite 7. No configuration needed.

### API Server

The `api-server` artifact is NOT deployed with this configuration. If you need to deploy the Express API:

**Option A**: Deploy separately to a platform like Railway, Render, or Heroku

**Option B**: Convert to Vercel Serverless Functions by:
1. Moving API routes to `/api` directory at root
2. Updating `vercel.json` with appropriate rewrites

### Database

The `lib/db` package uses PostgreSQL via Drizzle ORM. For Vercel deployment:
1. Use a hosted PostgreSQL service (e.g., Vercel Postgres, Neon, Supabase)
2. Set the `DATABASE_URL` environment variable in Vercel

## Troubleshooting

### Build fails with "Node.js version" error

This happens locally if your Node.js version is < 20.19. Vercel uses newer versions, so deployment should still work. To fix locally:

```bash
# Using nvm (Node Version Manager)
nvm install 20
nvm use 20
```

### Missing native modules

The `pnpm` overrides in `pnpm-workspace.yaml` exclude platform-specific modules. Vercel's Linux environment will download the correct modules automatically.

## Useful Commands

```bash
# Install dependencies
pnpm install

# Build the frontend
pnpm --filter @workspace/mockup-sandbox run build

# Run type checking
pnpm run typecheck

# Format code
pnpm exec prettier --write .