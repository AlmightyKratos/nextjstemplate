import { pgTableCreator } from "drizzle-orm/pg-core"
import { drizzle } from "drizzle-orm/node-postgres"
import { Pool } from "pg"

const pool = new Pool({
  connectionString: process.env.NEON_DB_CONNECTION_STRING!,
})

export const db = drizzle(pool)
export const pgTable = pgTableCreator((name) => `mynewdb_${name}`)
