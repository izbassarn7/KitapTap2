// ProfileClient.tsx
"use client";

import { toast } from "react-hot-toast";
import axios from "axios";
import { useCallback, useState } from "react";
import { useRouter } from "next/navigation";

import { SafeBook, SafeUser } from "@/app/types";

import Heading from "@/app/components/Heading";
import Container from "@/app/components/Container";
import BookCard from "@/app/components/books/BookCard";
import Button from "../components/Button";
import Avatar from "../components/Avatar";
import Image from "../components/Image";
import useEditProfileModal from "../hooks/useEditProfileModal";
import EditProfileModal from "../components/modals/EditProfileModal";

interface ProfileClientProps {
  books: SafeBook[];
  currentUser?: SafeUser | null;
}

const ProfileClient: React.FC<ProfileClientProps> = ({
  books,
  currentUser,
}) => {
  const router = useRouter();
  const [deletingId, setDeletingId] = useState("");

  const onDelete = useCallback(
    (id: string) => {
      setDeletingId(id);

      axios
        .delete(`/api/books/${id}`)
        .then(() => {
          toast.success("Book deleted");
          router.refresh();
        })
        .catch((error) => {
          toast.error(error?.response?.data?.error);
        })
        .finally(() => {
          setDeletingId("");
        });
    },
    [router]
  );

  const editProfileModal = useEditProfileModal();

  const onEditProfilePicture = useCallback(() => {
    // Add your logic for updating the user's profile picture here
  }, []);

  const onEditProfile = useCallback(() => {
    console.log("Edit button clicked");
    editProfileModal.onOpen();
  }, [editProfileModal]);

  console.log(editProfileModal.isOpen); // Check if this changes to true


  return (
    <Container>
      <div className="mb-10">
        <Heading title={`Hello, ${currentUser?.name}!`} center={true} />
        {/* Add the user's profile picture */}
        <div className="flex justify-center relative mb-4">
          <Image src={currentUser?.image} />
        </div>
        <div className="flex justify-center">
          <div className="w-64">
            <Button
              outline
              label="Edit profile"
              onClick={onEditProfile}
            />
            <EditProfileModal
            isOpen={editProfileModal.isOpen}
            onClose={editProfileModal.onClose}
            user={currentUser || null}
          />
          
          </div>
        </div>

      </div>
    </Container>
  );
};

export default ProfileClient;
