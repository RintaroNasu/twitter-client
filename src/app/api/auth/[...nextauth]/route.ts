import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import type { DefaultSession } from 'next-auth'

declare module 'next-auth' {
  interface Session {
    user?: {
      id: string
    } & DefaultSession['user']
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string
  }
}
const handler = NextAuth({
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      const provider = account?.provider;
      const name = user?.name;
      const email = user?.email;
      const accountId = account?.id_token;
      const res = await fetch(`http://localhost:4000/api/v1/auth/${provider}/callback`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          provider,
          name,
          email,
          accountId,
        }),
      });

      return true;
    },
  },
});

export { handler as GET, handler as POST };
