import {
  accountsDB,
  sessionsDB,
  usersDB,
  verificationTokens,
} from "./schema/auth"
import { DrizzleAdapter } from "@auth/drizzle-adapter"
import NextAuth, { NextAuthConfig } from "next-auth"
import GitHub from "next-auth/providers/github"
import { db } from "./schema/db"

export const authConfig = {
  providers: [GitHub],
  adapter: DrizzleAdapter(db, {
    usersTable: usersDB,
    accountsTable: accountsDB,
    sessionsTable: sessionsDB,
    verificationTokensTable: verificationTokens,
  }),
} satisfies NextAuthConfig

export const { handlers, signIn, signOut, auth } = NextAuth(authConfig)
