import { Book, User } from "@prisma/client";


export type SafeBook = Omit<
  Book,
  "createdAt"
> & {
  createdAt: string;
  coverImage: string;
  userId: SafeUser;
}

export type SafeUser = Omit<
  User,
  "createdAt" | "updatedAt" | "emailVerified"
> & {
  createdAt: string;
  updatedAt: string;
  emailVerified: string | null;
  books?: Book[];
};