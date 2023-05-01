'use client';

import Image from "next/image";

import useCountries from "@/app/hooks/useCountries";
import useAlmatyDistricts from "@/app/hooks/useAlmatyDistricts";
import { SafeUser } from "@/app/types";

import Heading from "../Heading";
import Favorite from "../FavoriteButton";
import FavoriteButton from "../FavoriteButton";

interface BookHeadProps {
  title: string;
  location: string;
  district: string;
  cover: string;
  id: string;
  currentUser?: SafeUser | null
}

const BookHead: React.FC<BookHeadProps> = ({
  title,
  location,
  cover,
    district,
  id,
  currentUser
}) => {
  const { getCountryByValue } = useCountries();
    const { getDistrictByValue } = useAlmatyDistricts();

  const locationData = getCountryByValue(location);
  const districtData = getDistrictByValue(district);

  return ( 
    <>
    <div
        className="
            scale-160
        "
    >

    <Heading
        title={title}
        subtitle={`${locationData?.label}, ${districtData?.label}, ${districtData?.emoji}`}
      />
    </div>
      <div className="
            w-full
          md:w-[30vw]
          h-[60vh]
          overflow-hidden 
          rounded-xl
          relative
        "
      >
        <Image
          src={cover}
          fill
          className="object-cover w-full"
          alt="Image"
        />
        
        <div
          className="
            absolute
            top-5
            right-5
          "
        >
          <FavoriteButton 
            bookId={id}
            currentUser={currentUser}
          />
        </div>
      </div>
    </>
   );
}
 
export default BookHead;