import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

declare module "next-auth" {
  interface Session {
    user: {
      id: string | null;
      name: string;
    };
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
  cookies: {
    state: {
      name: `next-auth.state-token`,
      options: {
        httpOnly: true,
        sameSite: "lax",
        path: "/",
        secure: process.env.NODE_ENV === "production", 
      },
    },
  },
  callbacks: {
    async signIn({ user, account }) {
      const provider = account?.provider;
      const name = user?.name;
      const email = user?.email;
      const userId = user.id;
      const res = await fetch(`http://localhost:4000/api/v1/auth/${provider}/callback`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          provider,
          name,
          email,
          userId,
        }),
      });
      console.log(res);
      return res.ok;
    },
    async session({ session, token }) {
      session.user.id = token.sub as string;
      return Promise.resolve(session);
    },
  },
});

export { handler as GET, handler as POST };
