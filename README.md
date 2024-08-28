This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
Comes with shadcn, playwright, and drizzle pre-installed.

## Getting Started

First, install the dependencies

```bash
pnpm install
```

Secondly, add the required environment variables -

1. Create a .env.local file in the root directory
2. Create the following environment variables: AUTH_GITHUB_ID, AUTH_GITHUB_SECRET, AUTH_SECRET, DATABASE_URL

By creating a new OAuth app in Github, you will generate a Client ID (AUTH_GITHUB_ID) and Client Secret (AUTH_GITHUB_SECRET).
Generate your AUTH_SECRET by running `npx auth`.
Your DATABASE_URL is found by going to your Neon dashboard and using the connection string for a pooled connection.

Then run the local development server.

```bash
pnpm dev
```
