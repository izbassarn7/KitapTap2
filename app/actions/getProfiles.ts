import prisma from "@/app/libs/prismadb";
import { SafeUser } from "@/app/types";
import { User } from "@prisma/client";

export default async function getProfiles(userId: string): Promise<SafeUser | null> {
  try {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: { books: true },
    });

    if (!user) {
      return null;
    }

    const safeUser: SafeUser = {
        id: user.id,
        name: user.name,
        email: user.email,image: user.image,
        favoriteIDs: user.favoriteIDs,
        books: user.books, // Add this line
      };

    return safeUser;
  } catch (error: any) {
    throw new Error(error);
  }
}
