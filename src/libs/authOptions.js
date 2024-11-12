import { NextAuthOptions } from "next-auth";
import FacebookProvider from "next-auth/providers/facebook";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaClient } from '@prisma/client';
import { compare } from 'bcrypt'; // For password comparison

const prisma = new PrismaClient();

export const BASE_PATH = "/api/auth";

export const authOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID ,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET ,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ,
    }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      authorize: async (credentials) => {
        if (!credentials) {
          return null;
        }

        try {
          // Find user by email
          const user = await prisma.user.findUnique({
            where: { email: credentials.email },
          });

          // Check if user exists and password matches
          if (user && await compare(credentials.password, user.hashpassword)) {
            // Return the user object with the id as a string
            return { ...user, id: user.id.toString() };
          } else {
            // Return null if no match or incorrect password
            return null;
          }
        } catch (error) {
          console.error('Authorization error:', error);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (token?.id) {
        session.user.id = token.id;
      }
      return session;
    }
  }
};