import { timestamp, uuid } from "drizzle-orm/pg-core"

  export const id = uuid().primaryKey().defaultRandom()
  export const createdAt = timestamp({ withTimezone: true }).notNull().defaultNow() // to store things in local users time instead of server time
  export const updatedAt = timestamp({ withTimezone: true }).notNull().defaultNow().$onUpdate(() => new Date())
