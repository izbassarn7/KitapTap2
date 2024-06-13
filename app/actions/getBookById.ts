import prisma from "@/app/libs/prismadb";

interface IParams {
  bookId?: string;
}

export default async function getBookById(
  params: IParams
) {
  try {
    const { bookId } = params;

    const book = await prisma.book.findUnique({
      where: {
        id: bookId,
      },
      include: {
        user: true
      }
    });

    if (!book) {
      return null;
    }

    return {
      ...book,
      createdAt: book.createdAt.toString(),
      coverImage: book.coverImage?.toString() || null,
      user: {
        ...book.user,
        createdAt: book.user.createdAt.toString(),
        updatedAt: book.user.updatedAt.toString(),
        emailVerified: 
          book.user.emailVerified?.toString() || null,
      }
    };
  } catch (error: any) {
    throw new Error(error);
  }
}