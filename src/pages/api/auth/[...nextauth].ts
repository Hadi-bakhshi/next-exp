import NextAuth from "next-auth";
import jwt from "jsonwebtoken";
import CredentialProvider from "next-auth/providers/credentials";
import axios from "axios";

export default NextAuth({
  providers: [
    CredentialProvider({
      name: "credentials",
      credentials: {
        username: { label: "username", type: "text" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials, req) {
        const { data } = await axios.post(
          "https://admin.behinekavan.com:6001/api/v1/Users/token",
          { username: credentials?.username, password: credentials?.password }
        );

        if (data) {
          console.log(data);
          return data;
        }
        return null;
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,

  jwt: {
    secret: process.env.NEXTAUTH_SECRET,
    encode: async ({ secret, token }) => {
      return jwt.sign(token as any, secret);
    },
    decode: async ({ secret, token }) => {
      return jwt.verify(token as string, secret) as any;
    },
  },
  session: {
    strategy: "jwt",
    maxAge: 60 * 60 * 24,
    updateAge: 60 * 60,
  },

  callbacks: {
    async signIn({ user, profile, credentials }) {
      return true;
    },
  },
});
