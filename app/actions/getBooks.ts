import prisma from "@/app/libs/prismadb";

export interface IBooksParams {
  userId?: string;
  location?: string;
  category?: string;
}

export default async function getBooks(
  params: IBooksParams
) {
  try {
    const {
      userId,
      location,
      category,
    } = params;

    let query: any = {};

    if (userId) {
      query.userId = userId;
    }

    if (category) {
      query.category = category;
    }

    if (location) {
        query.location = location;
    }

    const books = await prisma.book.findMany({
      where: query,
      orderBy: {
        createdAt: 'desc'
      }
    });

    const safeBooks = books.map((book) => ({
      ...book,
      createdAt: book.createdAt.toISOString(),
    }));

    return safeBooks;
  } catch (error: any) {
    throw new Error(error);
  }
}