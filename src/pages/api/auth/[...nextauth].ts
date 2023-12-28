import { bcryptVerify } from 'hash-wasm';
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

function getOneUser(email: string) {
  const user = {
    id: '1',
    email,
    name: 'Dương Tiến Vinh',
    password: '$2a$10$vOJLhI.jeFrIB0imYb8OMu5yyhGxHyjsElagxR2ESMX5nKsHW0rxO', // password is 'password'
  };

  return Promise.resolve({ ...user, password: user.password });
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
      async authorize(credentials) {
        if (!credentials) return null;

        // Inputs from login form
        const { email, password } = credentials;

        const user = await getOneUser(email);

        if (user) {
          const isVerified = await bcryptVerify({
            password,
            hash: user.password,
          });

          if (!isVerified) return null;

          return user;
        }

        return null;
      },
    }),
  ],
  pages: {
    signIn: '/auth/sign-in',
  },
  events: {
    signIn(message) {
      const {
        user: { name },
      } = message;
      // eslint-disable-next-line no-console
      console.log(`User: ${name} signed in`);
    },
  },
});
