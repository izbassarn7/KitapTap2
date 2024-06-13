import { NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb";

export async function POST(request: Request) {
  try {
    const { userId } = await request.json();

    if (!userId) {
      return NextResponse.error();
    }

    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
      select: {
        id: true,
        name: true,
        email: true,
        image: true,
        createdAt: true,
        updatedAt: true,
        telegramHandle: true,
        whatsappNumber: true,
      },
    });

    if (!user) {
      return NextResponse.error();
    }

    return NextResponse.json(user);
  } catch (error) {
    console.error("Error while fetching user:", error);
    return NextResponse.error();
  }
}

export async function PATCH(request: Request) {
  try {
    const { id, name, email, image, telegramHandle, whatsappNumber } = await request.json();

    if (!id) {
      return NextResponse.error();
    }

    const updatedUser = await prisma.user.update({
      where: { id },
      data: { name, email, image, telegramHandle, whatsappNumber },
    });

    return NextResponse.json(updatedUser);
  } catch (error) {
    console.error("Error while updating user:", error);
    return NextResponse.error();
  }
}
