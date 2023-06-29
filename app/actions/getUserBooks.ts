// actions/getUserBooks.ts
import prisma from "@/app/libs/prismadb";
import getCurrentUser from "./getCurrentUser";

export default async function getUserBooks() {
  try {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
      return [];
    }

    const userBooks = await prisma.book.findMany({
      where: {
        userId: currentUser.id
      }
    });

    const safeUserBooks = userBooks.map((book) => ({
      ...book,
      createdAt: book.createdAt.toString(),
    }));

    return safeUserBooks;
  } catch (error: any) {
    throw new Error(error);
  }
}
