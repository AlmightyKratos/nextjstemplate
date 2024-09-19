import type { Config } from "drizzle-kit"
import dotenv from "dotenv"
import { env } from "@/env"

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
