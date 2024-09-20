import { text } from "drizzle-orm/pg-core"
import { usersDB } from "./auth"
import { pgTable } from "./db"

export const tasksDB = pgTable("tasks", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  name: text("name").notNull(),
  userId: text("user_id").references(() => usersDB.id),
})
