'use client';

import axios from "axios";
import { useCallback, useEffect, useMemo, useState } from "react";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

import useLoginModal from "@/app/hooks/useLoginModal";
import { SafeBook,  SafeUser } from "@/app/types";

import Container from "@/app/components/Container";
import { categories } from "@/app/components/navbar/Categories";
import BookHead from "@/app/components/books/BookHead";
import BookInfo from "@/app/components/books/BookInfo";
import BookExchange from "@/app/components/books/BookExchange";



interface BookClientProps {
  book: SafeBook & {
    user: SafeUser;
  };
  currentUser?: SafeUser | null;
}

const BookClient: React.FC<BookClientProps> = ({
  book,
  currentUser,
}) => {
  const loginModal = useLoginModal();
  const router = useRouter();

  const category = useMemo(() => {
    return categories.find((items) => items.label === book.category);
  }, [book.category]);

  const [isLoading, setIsLoading] = useState(false);

  const onCreateExchange = useCallback(() => {
    if (!currentUser) {
      return loginModal.onOpen();
    }
    setIsLoading(true);

    axios
      .post('/api/exchanges', {
        bookId: book?.id,
      })
      .then(() => {
        toast.success('Sent exchange message!');
        router.push('/exchanges');
      })
      .catch(() => {
        toast.error('Something went wrong.');
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [book?.id, router, currentUser, loginModal]);

  return (
    <Container>
      <div className="max-w-screen-lg mx-auto pt-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div 
            className="flex flex-col gap-6 p-6"
          >
            <BookHead
              title={book.title}
              district={book.district}
              cover={book.cover}
              location={book.location}
              id={book.id}
              currentUser={currentUser}
            />
          </div>
          <div className="flex flex-col gap-6">
            <BookInfo
              title={book.title}
              author={book.author}
              genre={book.genre}
              category={category}
              description={book.description}
              locationValue={book.location}
              user={book.user}
            />
            <BookExchange onSubmit={onCreateExchange} disabled={isLoading} />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default BookClient;
