"use client";

import React from "react";
import useCountries from "@/app/hooks/useCountries";
import { SafeBook, SafeUser } from "@/app/types";
import { Book, Exchange } from "@prisma/client";
import { usePathname, useRouter } from "next/navigation";
import { useCallback } from "react";
import Image from "next/image";
import useAlmatyDistricts from "@/app/hooks/useAlmatyDistricts";
import FavoriteButton from "../FavoriteButton";
import useUser from "@/app/hooks/useUser";
import Avatar from "../Avatar";
import { getGenreByLabel } from '@/app/hooks/useGenres';
import Button from "../Button";
import { useLocation } from "react-router-dom";


interface BookCardProps {
  data: SafeBook;
  exchange?: Exchange;
  onAction?: (id: string) => void;
  disabled?: boolean;
  actionLabel?: string;
  actionId?: string;
  currentUser?: SafeUser | null;
}

const BookCard: React.FC<BookCardProps> = ({
  data,
  exchange,
  onAction,
  disabled,
  actionLabel,
  actionId = "",
  currentUser,
}) => {
  const router = useRouter();
  const { getCountryByValue } = useCountries();
  const { user, loading } = useUser(data.userId);
  const { getDistrictByValue } = useAlmatyDistricts();
  const district = getDistrictByValue(data.district);
  const location = getCountryByValue(data.location);
  
// Usage example

const genreData = getGenreByLabel(data.genre);
const currentPath = usePathname();

const renderUserSection = () => {
  if (currentPath === "/posts") {
    return true;
  }
};




  const handleCancel = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();

      if (disabled) {
        return;
      }

      onAction?.(actionId);
    },
    [onAction, actionId, disabled]
  );

  return (
    <div
      onClick={() => router.push(`/books/${data.id}`)}
      className="
        col-span-1
        cursor-pointer
        group
    "
    >
      <div
        className="
        flex flex-col gap-2 w-full shadow-md rounded-xl
        
    "
      >
        <div
          className="
            aspect-square
            w-full
            relative
            overflow-hidden
            rounded-xl
            shadow-md
        "
        >
          <Image
            fill
            alt="Book cover"
            src={data.cover}
            className="
              object-cover
              w-full
              h-full
              group-hover:scale-110
              transition
          "
          />
          <div className="absolute top-1 right-1">
            <FavoriteButton bookId={data.id} currentUser={currentUser} />
          </div>
        </div>
        
        <div
          className="
            flex flex-col p-4 gap-2
          "
        >

        
        <div
          className="
           text-end  font-light text-neutral-500 text-sm"
        >
          {data.genre} {genreData?.emoji}

        </div>
          <div className="flex justify-between items-center">
            <div
              className="
            font-semibold text-xl
        "
            >
              {data.title}
            </div>
          </div>

        <div
          className="
          flex gap-2  items-baseline text-sm
            font-light text-neutral-500
        "
        >
          by
          <div
            className="
           text-base
          text-neutral-700
          "
          >
            {data.author}
          </div>
        </div>
        <div
          className="
            font-semibold text-sm
        "
        >
          {location?.label}, {district?.label} {district?.emoji}
        </div>

        <div
        onClick={() => router.push(`/profiles/${user?.id}`)}
          className=" flex items-center gap-2
        font-light text-neutral-500 text-sm"
        >
          <Avatar src={user?.image} />
          {user?.name}
        </div>
        {onAction && actionLabel && (
          <Button
            disabled={disabled}
            small
            label={actionLabel} 
            onClick={handleCancel}
          />
        )}
        </div>
      </div>
    </div>
  );
};

export default BookCard;
