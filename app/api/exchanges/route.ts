import { NextResponse } from "next/server";

import prisma from "@/app/libs/prismadb";
import getCurrentUser from "@/app/actions/getCurrentUser";

export async function POST(
  request: Request, 
) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.error();
  }

  const body = await request.json();
  const { 
    bookId,
   } = body;

   if (!bookId ) {
    return NextResponse.error();
  }

  const bookAndExchange = await prisma.book.update({
    where: {
      id: bookId
    },
    data: {
      exchange: {
        create: {
          userId: currentUser.id,
        }
      }
    }
  });

  return NextResponse.json(bookAndExchange);
}