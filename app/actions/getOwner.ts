import prisma from "@/app/libs/prismadb";

interface IParams {
    userId?: string;
}

export default async function getBookById(
  params: IParams
) {
  try {
    const { userId } = params;

    const user = await prisma.book.findUnique({
      where: {
        id: userId,
      },
      include: {
        books: true
      }
    });

    if (!book) {
      return null;
    }

    return {
      ...book,
      createdAt: book.createdAt.toString(),
      user: {
        ...book.user,
        telegramHandle: user.telegramHandle.toString(),
      }
    };
  } catch (error: any) {
    throw new Error(error);
  }
}