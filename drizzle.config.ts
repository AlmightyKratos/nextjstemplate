import type { Config } from "drizzle-kit"
import { env } from "@/env"
import dotenv from "dotenv"

dotenv.config({
  path: ".env.local",
})

export default {
  schema: "./src/schema/*",
  out: "./drizzle",
  dialect: "postgresql",
  dbCredentials: {
    url: env.DATABASE_URL,
  },
} satisfies Config
