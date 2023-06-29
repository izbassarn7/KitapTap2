import { NextResponse } from "next/server";

import prisma from "@/app/libs/prismadb";
import getCurrentUser from "@/app/actions/getCurrentUser";
import { NextApiRequest, NextApiResponse } from "next";

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

  export async function PATCH(request: NextApiRequest, response: NextApiResponse) {
    try {
      const currentUser = await getCurrentUser();
  
      if (!currentUser) {
        return response.status(401).json({ message: 'Unauthorized' });
      }
  
      const bookId = request.query.bookId as string;
      const data = request.body;
  
      const existingBook = await prisma.book.findUnique({
        where: {
          id: bookId,
        },
      });
  
      if (!existingBook) {
        return response.status(404).json({ message: 'Book not found' });
      }
  
      if (existingBook.userId !== currentUser.id) {
        return response.status(403).json({ message: 'Forbidden' });
      }
  
      const updatedBook = await prisma.book.update({
        where: {
          id: bookId,
        },
        data: {
          title: data.title || existingBook.title,
          author: data.author || existingBook.author,
          description: data.description || existingBook.description,
          cover: data.cover || existingBook.cover,
          genre: data.genre || existingBook.genre,
          location: data.location || existingBook.location,
          district: data.district || existingBook.district,
          category: data.category || existingBook.category,
        },
      });
  
      return response.json(updatedBook);
    } catch (error) {
      console.error("Error while updating book:", error);
      return response.status(500).json({ message: 'An error occurred' });
    }
  }
  