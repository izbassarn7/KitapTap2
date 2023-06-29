'use client';

import { IconType } from "react-icons";

import useCountries from "@/app/hooks/useCountries";
import { SafeUser } from "@/app/types";

import Avatar from "../Avatar";
import BookCategory from "./BookCategory";
import { useRouter } from "next/navigation";
import { getGenreByLabel } from "@/app/hooks/useGenres";


interface BookInfoProps {
  user: SafeUser,
  title: string;
  author: string;
  genre: string;
  description: string;
  category: {
    icon: IconType,
    label: string;
    description: string;
  } | undefined
  locationValue: string;
}

const BookInfo: React.FC<BookInfoProps> = ({
  user,
    title,
    author,
    genre,
  description,
  category,
  locationValue,
}) => {
  const { getCountryByValue } = useCountries();

  const coordinates = getCountryByValue(locationValue)?.latlng
  const genreData = getGenreByLabel(genre);
  const router = useRouter();

  return ( 
    <div className="col-span-4 flex flex-col gap-3">
      <div className="flex flex-col gap-2 uppercase">
        
        <div className="
            flex 
            flex-row 
            items-center 
            gap-4 
            font-light
            text-neutral-500
          "
        >
        </div>
      </div>
      <div>
        <h2 className="text-xl font-semibold ">Author</h2>
        <p className="text-lg font-light text-neutral-500 uppercase">{author}</p>
      </div>
      <hr />
      <div>
        <h2 className="text-xl font-semibold">Genre</h2>
        <p className="text-lg font-light text-neutral-500 uppercase"> {genreData?.emoji} {genre}</p>
      </div>
      <hr />
      <div>
        <h2 className="text-xl font-semibold">Description</h2>
        <p className="text-lg font-light text-neutral-500">{description}</p>
      </div>
      <hr />
      <div className="gap-2">
        <h2 className="text-xl font-semibold pb-4">Category</h2>
        {category && (
          <BookCategory
            icon={category.icon} 
            label={category?.label}
            description={category?.description} 
          />
        )}
      </div>
      <hr />
      <div 
          className="
            text-x
            font-semibold 
            flex 
            flex-row 
            items-center
            gap-2
          "
        >
          <div
          onClick={() => router.push(`/profiles/${user?.id}`)}
            className="cursor-pointer"
          >Added by {user?.name}</div>
          <Avatar src={user?.image} />
        </div>
    </div>
   );
}
 
export default BookInfo;