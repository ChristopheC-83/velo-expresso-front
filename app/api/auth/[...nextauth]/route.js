import { authOptions } from '@/lib/auth-options'
import NextAuth from 'next-auth/next'


const handler = NextAuth({
  ...authOptions,
  secret: process.env.NEXTAUTH_SECRET 
})

export { handler as GET, handler as POST }
