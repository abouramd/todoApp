import type { NextAuthConfig } from "next-auth"
import GitHub from "next-auth/providers/github"

export default {
    //   adapter: PrismaAdapter(prisma),
    providers: [
        GitHub,
    ],
    // callbacks: {
    //     session: async ({ session, user }) => {
    //         if (session?.user) {
    //             session.user.id = user.id
    //         }
    //         return session
    //     },
    // }
} satisfies NextAuthConfig