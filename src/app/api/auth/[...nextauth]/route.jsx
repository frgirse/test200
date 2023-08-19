import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from '@/lib/prisma'
import { PrismaAdapter } from "@auth/prisma-adapter";
import bcrypt from 'bcrypt'
import { compare } from 'bcrypt'
import { PrismaClient } from "@prisma/client";



export const authOptions = {
  adapter: PrismaAdapter (prisma),
 
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: {
          label: 'Email',
          type: 'email',
          placeholder: 'hello@example.com'
        },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) {
          return null
        }
      }
    
    }
    )
  ],
 
  session: {
    strategy: 'jwt',
  },

  secret: process.removeListener.NEXTAUTH_SECRET,

  debug: process.env.Mode_ENV === "developmen",
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST}

         