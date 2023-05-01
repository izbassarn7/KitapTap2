'use client';

import usePostModal from "@/app/hooks/usePostModal";
import Modal from "./Modal";
import { useMemo, useState } from "react";
import Heading from "../Heading";
import { categories } from "../navbar/Categories";
import CategoryInput from "../inputs/CategoryInput";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import CountrySelect from "../inputs/CountrySelect";
import DistrictSelect, { DistrictSelectValue } from "../inputs/DistrictSelect";
import GenreSelect from "../inputs/GenreSelect";
import CoverUpload from "../inputs/CoverUpload";
import Input from "../inputs/Input";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

enum STEPS {
  CATEGORY = 0,
  LOCATION = 1,
  GENRE = 2,
  AUTHOR_TITLE = 3,
  COVER = 4,
  DESCRIPTION = 5,
}

const PostModal = () => {
  const router = useRouter();

  const postModal = usePostModal();



  const [step, setStep] = useState(STEPS.CATEGORY);

  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    control,
    formState: { errors },
    reset,
  } = useForm<FieldValues>({
    defaultValues: {
      category: "",
      genre: "",
      location: "",
      district: "",
      author: "",
      title: "",
      description: "",
      cover: "",
    },
  });

  const genre = watch("genre");
  const category = watch("category");
  const location = watch("location");
  const district = watch("district");
  const cover = watch("cover");

  const setCustomValue = (id: string, value: any) => {
    setValue(id, value, {
      shouldValidate: true,
      shouldDirty: true,
      shouldTouch: true,
    });
  };

  const onBack = () => {
    setStep((value) => value - 1);
  };

  const onNext = () => {
    setStep((value) => value + 1);
  };

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    if (step !== STEPS.DESCRIPTION) {
      return onNext();
    }

    setIsLoading(true);

    axios.post("/api/books", data).then(() => {
      toast.success("Book posted successfully");
      router.refresh();
      reset();
      setStep(STEPS.CATEGORY);
      postModal.onClose();
    })
    .catch(() => {
      toast.error("Something went wrong");
    }).finally(() => {
      setIsLoading(false);
    })
  }

  const actionLabel = useMemo(() => {
    if (step === STEPS.DESCRIPTION) {
      return "Post";
    }

    return "Next";
  }, [step]);

  const secondaryActionLabel = useMemo(() => {
    if (step === STEPS.CATEGORY) {
      return undefined;
    }

    return "Back";
  }, [step]);

  let bodyContent = (
    <div className="flex flex-col gap-6">
      <Heading title="Select a category" subtitle="Which one fits your book?" />
      <div
        className="
            grid
            grid-cols-1
            md:grid-cols-2
            gap-3
            max-h-[50vh]
            overflow-y-auto
            "
      >
        {categories.map((item) => (
          <div key={item.label} className="col-span-1">
            <CategoryInput
              onClick={(value) => setCustomValue("category", value)}
              selected={category === item.label}
              label={item.label}
              icon={item.icon}
            />
          </div>
        ))}
      </div>
    </div>
  );

  if (step === STEPS.GENRE) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading title="Select a genre" subtitle="Which genre is your book?" />
        <GenreSelect
          value={genre}
          onChange={(value) => setCustomValue("genre", value)}
        />
      </div>
    );
  }

  if (step === STEPS.LOCATION) {
    bodyContent = (
      <div
        className="
          flex
          flex-col
          gap-8
        "
      >
        <Heading title="Select a location" subtitle="Where is your book?" />
        <CountrySelect
          value={location}
          onChange={(value) => setCustomValue("location", value)}
        />
        {location?.value === "ALM" && (
          <DistrictSelect
            value={district}
            onChange={(value) => setCustomValue("district", value)}
          />
        )}
      </div>
    );
  }

  if (step === STEPS.AUTHOR_TITLE) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading
          title="Author & Title"
          subtitle="Enter the book details"
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
      </div>
    );
  }

  if (step === STEPS.COVER) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading
          title="Upload a cover"
          subtitle="Upload a cover for your book"
        />
        <CoverUpload
          value={cover}
          onChange={(value) => setCustomValue("cover", value)}
        />
      </div>
    );
  }

  if (step === STEPS.DESCRIPTION) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading
          title="Description"
          subtitle="Enter a description for your book"
        />
        <Input
          id="description"
          label="Description"
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />
      </div>
    );
  }

  return (
    <Modal
      isOpen={postModal.isOpen}
      onClose={postModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      actionLabel={actionLabel}
      secondaryActionLabel={secondaryActionLabel}
      secondaryAction={step === STEPS.CATEGORY ? undefined : onBack}
      title="Post a book!"
      body={bodyContent}
    />
  );
};

export default PostModal;
