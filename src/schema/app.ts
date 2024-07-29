import { text } from "drizzle-orm/pg-core"
import { pgTable } from "./db"
import { users } from "./auth"

export const tasks = pgTable("tasks", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  name: text("name").notNull(),
  userId: text("user_id").references(() => users.id),
})
