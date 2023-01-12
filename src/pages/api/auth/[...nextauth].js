import CredentialsProvider from 'next-auth/providers/credentials';
import NextAuth from 'next-auth';
import { sha1 } from 'hash-wasm';

async function getOneUser(userMail) {
  const user = {
    email: 'tienvinh@gmail.com',
    name: 'Dương Tiến Vinh',
    password: '7110eda4d09e062aa5e4a390b0a572ac0d2c0220', // 1234
  };
  return { ...user, password: user.password.toString('hex') };
}

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: {
          label: 'Email',
          type: 'text',
          placeholder: 'you@mantine.dev',
        },
        password: {
          label: 'Password',
          type: 'password',
        },
      },
      async authorize(credentials, req) {
        // Inputs from login form
        const { email, password } = credentials;
        const hashPassword = await sha1(password);
        const user = await getOneUser(email);
        if (user && user.password === hashPassword) {
          return user;
        }
        return null;
      },
    }),
  ],
  pages: {
    signIn: '/auth/login',
  },
  events: {
    async signIn(message) {
      const {
        user: { name },
      } = message;
      console.log(`User: ${name} signed in`);
    },
  },
});
