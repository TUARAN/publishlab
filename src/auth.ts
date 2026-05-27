import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";
import GitHub from "next-auth/providers/github";

export const { handlers, signIn, signOut, auth } = NextAuth({
  trustHost: true,
  providers: [
    Google,
    GitHub,
    Credentials({
      name: "邮箱登录",
      credentials: {
        email: { label: "邮箱", type: "email" },
        password: { label: "密码", type: "password" },
      },
      async authorize(credentials) {
        // TODO: 接入真实数据库验证
        // 这里是演示用的模拟验证逻辑
        const email = credentials?.email as string;
        const password = credentials?.password as string;

        if (!email || !password) return null;

        // 模拟：任何邮箱 + 密码长度 >= 6 即可登录
        if (password.length >= 6) {
          return {
            id: email,
            email,
            name: email.split("@")[0],
            image: null,
          };
        }

        return null;
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user && token.id) {
        session.user.id = token.id as string;
      }
      return session;
    },
  },
});
