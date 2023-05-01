
import EmptyState from "@/app/components/EmptyState";
import ClientOnly from "@/app/components/ClientOnly";

import getCurrentUser from "@/app/actions/getCurrentUser";
import getBooks from "@/app/actions/getBooks";

import PostsClient from "./PostsClient";
import Heading from "../components/Heading";

const PostsPage = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return <EmptyState
      title="Unauthorized"
      subtitle="Please login"
    />
  }

  const books = await getBooks({ userId: currentUser.id });

  if (books.length === 0) {
    return (
      <ClientOnly>
        <EmptyState
          title="No book found"
          subtitle="Looks like you have no books."
        />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <PostsClient
        books={books}
        currentUser={currentUser}
      />
    </ClientOnly>
  );
}
 
export default PostsPage;