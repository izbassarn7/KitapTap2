import { Book, User, Exchange } from "@prisma/client";


export type SafeBook = Omit<
  Book,
  "createdAt"
> & {
  createdAt: string;
}

export type SafeExchange = Omit<
  Exchange, 
  "createdAt" | "book"
> & {
  createdAt: string;
  book: SafeBook;
};

export type SafeUser = Omit<
  User,
  "createdAt" | "updatedAt" | "emailVerified"
> & {
  createdAt: string;
  updatedAt: string;
  emailVerified: string | null;
  books?: Book[];
};