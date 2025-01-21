import Google from "@auth/core/providers/google";
import type { NextAuthConfig } from "next-auth"
import GitHub from "next-auth/providers/github"

export default {
  providers: [
    GitHub,
    Google,
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.userId = user.id;
      }
      return token;
    },

    async session({ session, token }) {
      if (token?.user) {
        session.user.id = token.userId;
      }
      return session;
    },
  }
} satisfies NextAuthConfig
