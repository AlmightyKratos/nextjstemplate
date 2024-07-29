import { text } from "drizzle-orm/pg-core"
import { users } from "./auth"
import { pgTable } from "./db"

export const tasks = pgTable("tasks", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  name: text("name").notNull(),
  userId: text("user_id").references(() => users.id),
})
