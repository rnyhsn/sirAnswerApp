import "next-auth";

declare module "next-auth" {
  interface User {
    role?: string; // Add the role property to the User type
  }

  interface Session {
    user: {
      role?: string; // Add the role property to the Session's user object
    } & DefaultSession["user"];
  }
}