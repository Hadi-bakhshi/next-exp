import NextAuth from "next-auth";
import jwt from "jsonwebtoken";

export default NextAuth({
  providers: [],
  secret:
    "bd2eb83945b8540da111feab7babea7a3d78f29da583a02bcb46cf70ad64edae691c80",

  jwt: {
    secret:
    "bd2eb83945b8540da111feab7babea7a3d78f29da583a02bcb46cf70ad64edae691c80",
    encode: async ({ secret, token }) => {
      return jwt.sign(token as any, secret);
    },
    decode: async ({ secret, token }) => {
      return jwt.verify(token as string, secret) as any;
    },
  },
  session: {
    strategy: "jwt",
  },

  callbacks: {
    async jwt({ token }) {
      return token;
    },
  },
});
