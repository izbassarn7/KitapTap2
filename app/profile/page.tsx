// pages/profile/page.tsx

import EmptyState from "@/app/components/EmptyState";
import ClientOnly from "@/app/components/ClientOnly";

import getUserBooks from "@/app/actions/getUserBooks";
import getCurrentUser from "@/app/actions/getCurrentUser";

import ProfileClient from "./ProfileClient";

const ProfilePage = async () => {
  const books = await getUserBooks();
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return (
      <ClientOnly>
        <EmptyState
          title="Empty Profile"
          subtitle="Looks like you're new here! Sign up or log in to start your journey."
        />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <ProfileClient
        books={books}
        currentUser={currentUser}
      />
    </ClientOnly>
  );
}
 
export default ProfilePage;
