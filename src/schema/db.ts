import { pgTableCreator } from "drizzle-orm/pg-core"
import { drizzle } from "drizzle-orm/node-postgres"
import { env } from "@/env"
import { Pool } from "pg"

const pool = new Pool({
  connectionString: env.DATABASE_URL,
})

export const db = drizzle(pool)
export const pgTable = pgTableCreator((name) => `mynewdb_${name}`)
