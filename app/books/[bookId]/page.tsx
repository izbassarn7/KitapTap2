
import getCurrentUser from "@/app/actions/getCurrentUser";
import getExchanges from "@/app/actions/getExchanges";

import ClientOnly from "@/app/components/ClientOnly";
import EmptyState from "@/app/components/EmptyState";

import BookClient from "./BookClient";
import getBookById from "@/app/actions/getBookById";

interface IParams {
  bookId?: string;
}

const BookPage = async ({ params }: { params: IParams }) => {

  const book = await getBookById(params);
  const exchanges = await getExchanges(params);
  const currentUser = await getCurrentUser();

  if (!book) {
    return (
        <EmptyState />
    );
  }

  return (
      <BookClient
        book={book}
        exchanges={exchanges}
        currentUser={currentUser}
      />
  );
}
 
export default BookPage;