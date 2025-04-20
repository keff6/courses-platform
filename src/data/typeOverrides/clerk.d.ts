import { UserRole } from "@/drizzle/schema";

export {}

declare global {
  interface CustonJwtSessionClaims {
    dbId?: string,
    role?: UserRole
  }

  interface UserPublicMetadata {
    dbId?: string,
    role?: UserRole
  }
}