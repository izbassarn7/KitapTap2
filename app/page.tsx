import Container from "@/app/components/Container";
import BookCard from "@/app/components/books/BookCard";
import EmptyState from "@/app/components/EmptyState";

import getBooks, { 
  IBooksParams
} from "@/app/actions/getBooks";
import getCurrentUser from "@/app/actions/getCurrentUser";
import ClientOnly from "./components/ClientOnly";

interface HomeProps {
  searchParams: IBooksParams
};

const Home = async ({ searchParams }: HomeProps) => {
  const books = await getBooks(searchParams);
  const currentUser = await getCurrentUser();

  if (books.length === 0) {
    return (
      <ClientOnly>
        <EmptyState showReset />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <Container>
        <div 
          className="
            pt-28
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
              currentUser={currentUser}
              key={book.id}
              data={book}
            />
          ))}
        </div>
      </Container>
    </ClientOnly>
  )
}

export default Home;