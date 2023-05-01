import Image from 'next/image'
import { Inter } from 'next/font/google'
import Container from './components/Container'
import EmptyState from './components/EmptyState';
import ClientOnly from './components/ClientOnly';
import getBooks from './actions/getBooks';
import BookCard from './components/books/BookCard';
import getCurrentUser from './actions/getCurrentUser';

const inter = Inter({ subsets: ['latin'] })

export default async function Home() {
  const books = await getBooks();
  const currentUser = await getCurrentUser();

  if (books.length === 0) {
    return (
      <EmptyState showReset/>
    )
  }
  
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
