'use client';

import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";


import useEditModal from "@/app/hooks/useEditModal";
import Modal from "./Modal";
import Heading from "../Heading";
import Input from "../inputs/Input";
import { toast } from "react-hot-toast";
import Button from "../Button";

import { SafeBook } from "@/app/types";
import CoverUpload from "../inputs/CoverUpload";

interface EditModalProps {
  book: SafeBook | null;
  isOpen: boolean;
  onClose: () => void;
}

const EditModal: React.FC<EditModalProps> = ({ book, isOpen, onClose }) => {
  const editModal = useEditModal();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue
  } = useForm<FieldValues>({
    defaultValues: {
      title: book?.title || "",
      author: book?.author || "",
      description: book?.description || "",
      cover: book?.cover || "",
      // add other book fields here as required
    },
  });

  // Fill the form with the book data when the book changes
  useEffect(() => {
    setValue("title", book?.title || "");
    setValue("author", book?.author || "");
    setValue("description", book?.description || "");
    setValue("cover", book?.cover || "");
    // do the same for other fields
  }, [book, setValue]);

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    if (!book) {
      return;
    }

    setIsLoading(true);

    axios
      .patch(`/api/books/${book.id}`, data)
      .then(() => {
        toast.success("Book updated successfully!");
        editModal.onClose();
      })
      .catch((error) => {
        toast.error("Something went wrong. Please try again.");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading
        title="Edit Book"
        subtitle="Update the details of your book"
      />
      <Input
        id="title"
        label="Title"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="author"
        label="Author"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="description"
        label="Description"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <CoverUpload
          value={book?.cover}
          onChange={(value) => setCustomValue("cover", value)}
        />
    </div>
  );

  return (
    <Modal
      disabled={isLoading}
      isOpen={editModal.isOpen}
      title="Edit Book"
      actionLabel="Save Changes"
      onClose={editModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
    />
  );
};

export default EditModal;
