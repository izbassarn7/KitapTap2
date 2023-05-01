
import prisma from "@/app/libs/prismadb";

interface IParams {
  bookId?: string;
  userId?: string;
  authorId?: string;
}

export default async function getReservations(
  params: IParams
) {
  try {
    const { bookId, userId, authorId } = params;

    const query: any = {};
        
    if (bookId) {
      query.requestedBookId = bookId;
    };

    if (userId) {
      query.userId = userId;
    }

    if (authorId) {
      query.book = { userId: authorId };
    }

    const exchange = await prisma.exchange.findMany({
      where: query,
      include: {
        requestedBook: true
      },
      orderBy: {
        createdAt: 'desc'
      }
    });

    const safeReservations = exchange.map(
      (exchange) => ({
      ...exchange,
      createdAt: exchange.createdAt.toISOString(),
      book: {
        ...exchange.requestedBook,
        createdAt: exchange.requestedBook.createdAt.toISOString(),
      },
    }));

    return safeReservations;
  } catch (error: any) {
    throw new Error(error);
  }
}