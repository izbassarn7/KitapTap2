'use client';

import { toast } from "react-hot-toast";
import axios from "axios";
import { useCallback, useState } from "react";
import { useRouter } from "next/navigation";

import { SafeBook, SafeUser } from "@/app/types";

import Heading from "@/app/components/Heading";
import Container from "@/app/components/Container";
import BookCard from "@/app/components/books/BookCard";

interface PropertiesClientProps {
  books: SafeBook[],
  currentUser?: SafeUser | null,
}

const PropertiesClient: React.FC<PropertiesClientProps> = ({
  books,
  currentUser
}) => {
  const router = useRouter();
  const [deletingId, setDeletingId] = useState('');

  const onDelete = useCallback((id: string) => {
    setDeletingId(id);

    axios.delete(`/api/books/${id}`)
    .then(() => {
      toast.success('Book deleted');
      router.refresh();
    })
    .catch((error) => {
      toast.error(error?.response?.data?.error)
    })
    .finally(() => {
      setDeletingId('');
    })
  }, [router]);


  return ( 
    <Container>
      <Heading
        title="Your books"
        subtitle="List of your books"
      />
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
        {books.map((book: any) => (
          <BookCard
                key={book.id}
                data={book}
                actionId={book.id}
                onAction={onDelete}
                disabled={deletingId === book.id}
                actionLabel="Delete property"
                currentUser={currentUser}         />
        ))}
      </div>
    </Container>
   );
}
 
export default PropertiesClient;