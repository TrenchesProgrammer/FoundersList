import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";

export const authOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.AUTH_GITHUB_ID as string,
      clientSecret: process.env.AUTH_GITHUB_SECRET as string,
    }),
  ],
  secret: process.env.AUTH_SECRET,
};

const handler = NextAuth(authOptions);

// Export the handler for both GET and POST methods
export { handler as GET, handler as POST };

// Export the auth functions separately
export const auth = NextAuth(authOptions).auth;
export const signIn = NextAuth(authOptions).signIn;
export const signOut = NextAuth(authOptions).signOut;