
import EmptyState from "@/app/components/EmptyState";
import ClientOnly from "@/app/components/ClientOnly";

import getCurrentUser from "@/app/actions/getCurrentUser";

import FavoritesClient from "./FavoritesClient";
import getFavoriteBooks from "../actions/getFavoriteBooks";
import ProfileClient from "../profile/ProfileClient";

const BookPage = async () => {
  const books = await getFavoriteBooks();
  const currentUser = await getCurrentUser();

  if (books.length === 0) {
    return (
      <ClientOnly>
        <EmptyState
          title="No favorites found"
          subtitle="Looks like you have no favorite books."
        />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <FavoritesClient
        books={books}
        currentUser={currentUser}
      />
    </ClientOnly>
  );
}
 
export default BookPage;