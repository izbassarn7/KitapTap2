import prisma from "@/app/libs/prismadb";

interface IParams {
    userId?: string;
}

export default async function getBookById(
  params: IParams
) {
  try {
    const { userId } = params;

    const book = await prisma.book.findUnique({
      where: {
        id: userId,
      },
      include: {
        user: true // Correctly include related user data
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
        telegramHandle: book.user.telegramHandle?.toString(),
      }
    };
  } catch (error: any) {
    throw new Error(error.message);
  }
}
