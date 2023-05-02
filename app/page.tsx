import Container from './components/Container'
import getBooks, { 
  IBooksParams
} from "@/app/actions/getBooks";
import BookCard from './components/books/BookCard';
import getCurrentUser from './actions/getCurrentUser';

interface HomeProps {
  searchParams: IBooksParams
};

const Home = async ({ searchParams }: HomeProps) => {
  const books = await getBooks(searchParams);
  const currentUser = await getCurrentUser();
  
  return (
    <Container>
          <div 
          className="
            pt-56
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
          {books.map((book) => {
            return (
              <BookCard 
                currentUser={currentUser}
                key={book.id}
                data={book}
              />
            )
          })}
        </div>
      
    </Container>
      )
}
export default Home;