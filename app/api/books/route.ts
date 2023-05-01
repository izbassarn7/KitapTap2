import { NextResponse } from "next/server";

import prisma from "@/app/libs/prismadb";
import getCurrentUser from "@/app/actions/getCurrentUser";

export async function POST(request: Request) {
    try {
      const currentUser = await getCurrentUser();
  
      if (!currentUser) {
        return NextResponse.error();
      }
      
      const body = await request.json();
      const { 
        title, author, description,category, cover, genre, location, district
    } = body;
  
      Object.keys(body).forEach((value: any) => {
        if (!body[value]) {
          NextResponse.error();
        }
      });

      const book = await prisma.book.create({
        data: {
          title,
          author,
          description,
          category,
          cover,
          genre: genre.label,
          location: location.value,
          district: district.value,
          userId: currentUser.id,
        },
      });
      return NextResponse.json(book);
    } catch (error) {
      console.error("Error while posting book:", error);
      return NextResponse.error();
    }
  }
  
