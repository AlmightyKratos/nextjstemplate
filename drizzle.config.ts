import dotenv from "dotenv"
import type { Config } from "drizzle-kit"

dotenv.config({
  path: ".env.local",
})

export default {
  schema: "./src/schema/*",
  out: "./drizzle",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.NEON_DB_CONNECTION_STRING!,
  },
} satisfies Config
