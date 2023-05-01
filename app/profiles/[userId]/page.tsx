'use client';
import { useRouter } from "next/navigation";
import Container from "@/app/components/Container";
import getProfiles from "@/app/actions/getProfiles";
import { SafeUser } from "@/app/types";
import Profiles from "./ProfilesClient";
import getBooks from "@/app/actions/getBooks";
import ClientOnly from "@/app/components/ClientOnly";
import EmptyState from "@/app/components/EmptyState";

const  ProfilePage = async () => {
  const router = useRouter();
  const userProfile = await getProfiles();
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
    <Container>
      <Profiles user={userProfile} />
    </Container>
  );
};

export default ProfilePage;
