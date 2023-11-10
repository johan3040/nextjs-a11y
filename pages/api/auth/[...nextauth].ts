import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GH_ID,
      clientSecret: process.env.GH_SECRET,
    }),
    // ...add more providers here
  ],
}

console.log("This is my ID: " + process.env.GH_ID)

export default NextAuth(authOptions)