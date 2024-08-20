import { defineConfig } from "@playwright/test"

export default defineConfig({
  // Starts local dev server if one not already running
  webServer: {
    command: "npm run dev",
    url: "http://127.0.0.1:3000",
    reuseExistingServer: true,
  },
})
