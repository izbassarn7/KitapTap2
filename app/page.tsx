import Image from 'next/image'
import { Inter } from 'next/font/google'
import Container from './components/Container'
import EmptyState from './components/EmptyState';
import getBooks from './actions/getBooks';
import BookCard from './components/books/BookCard';
import getCurrentUser from './actions/getCurrentUser';
// import SearchForm from './components/inputs/SearchForm';

const inter = Inter({ subsets: ['latin'] })

export default async function Home() {
  const books = await getBooks();
  const currentUser = await getCurrentUser();
  const bookData = books.map((book) => {
    return {
      title: book.title,
      autor: book.author,
      location: book.location
}})

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
          {/* <SearchForm onSearch={} /> */}
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
