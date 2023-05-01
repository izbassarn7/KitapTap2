
import { SafeBook, SafeUser } from "@/app/types";

import Heading from "@/app/components/Heading";
import Container from "@/app/components/Container";
import BookCard from "@/app/components/books/BookCard";

interface FavoritesClientProps {
  books: SafeBook[],
  currentUser?: SafeUser | null,
}

const FavoritesClient: React.FC<FavoritesClientProps> = ({
  books,
  currentUser
}) => {
  return (
    <Container>
      <Heading
        title="Favorites"
        subtitle="List of books you favorited!"
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
                currentUser={currentUser}
                key={book.id}
                data={book} userId={""}            
          />
        ))}
      </div>
    </Container>
   );
}
 
export default FavoritesClient;