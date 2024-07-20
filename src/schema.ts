import { Pool } from "@neondatabase/serverless";
import { sql } from "drizzle-orm";
import { drizzle } from "drizzle-orm/neon-serverless";
import { pgTableCreator, text, uuid } from "drizzle-orm/pg-core";
const pool = new Pool({
  connectionString: process.env.NEON_DB_CONNECTION_STRING!,
});
export const db = drizzle(pool);

const pgTable = pgTableCreator((name) => `mynewdb_${name}`);

export const things = pgTable("foods", {
  id: uuid("id")
    .default(sql`gen_random_uuid()`)
    .primaryKey(),
  name: text("name").notNull().unique(),
});
