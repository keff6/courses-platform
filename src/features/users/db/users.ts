import { db } from "@/drizzle/db";
import { UserTable } from "@/drizzle/schema";
import { eq } from "drizzle-orm";

export async function insertUser(data: typeof UserTable.$inferInsert) {
  const [newUser] = await db
    .insert(UserTable)
    .values(data)
    .returning()
    .onConflictDoUpdate({
      target: [UserTable.cleckUserId],
      set: data,
    });

  if (newUser == null) throw new Error("Failed to create user");

  return newUser;
}

export async function updateUser({cleckUserId}:{cleckUserId: string},data: Partial<typeof UserTable.$inferInsert>) {
  const [updatedUser] = await db
    .update(UserTable)
    .set(data)
    .where(eq(UserTable.cleckUserId, cleckUserId))
    .returning()

  if (updatedUser == null) throw new Error("Failed to update user");

  return updatedUser;
}

export async function deleteUser({cleckUserId}:{cleckUserId: string}) {
  const [deletedUser] = await db
    .update(UserTable)
    .set({
      deletedAt: new Date(),
      email: "redacted@deleted.com",
      name: "Deleted user",
      cleckUserId: "deleted",
      imageUrl: null,
    })
    .where(eq(UserTable.cleckUserId, cleckUserId))
    .returning()

  if (deletedUser == null) throw new Error("Failed to delete user");

  return deletedUser;
}