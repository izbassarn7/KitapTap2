'use client';
import React from "react";
import { SafeUser } from "@/app/types";
import Heading from "@/app/components/Heading";
import BookCard from "@/app/components/books/BookCard";

interface ProfilesProps {
  user: SafeUser;
}

const Profiles: React.FC<ProfilesProps> = ({ user }) => {
  const books = user.books;
  return (
    <div>
      <Heading title={`${user.name}'s Books`} subtitle="List of books shared by the user" />
      <div
        className="
          mt-10
          grid
          grid-cols-1
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4
          xl:grid-cols-5
          2xl:grid-cols-6
          gap-8
        "
      >
        {books.map((book) => (
          <BookCard key={book.id} data={book} userId={user.id} />
        ))}
      </div>
    </div>
  );
};

export default Profiles;
