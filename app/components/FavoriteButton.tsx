'use client';



import { MdOutlineFavoriteBorder, MdOutlineFavorite  } from "react-icons/md";
import { SafeUser } from "@/app/types";

import useFavorite from "../hooks/useFavorite";

interface FavoriteButtonProps {
  bookId: string
  currentUser?: SafeUser | null
}

const FavoriteButton: React.FC<FavoriteButtonProps> = ({ 
  bookId,
  currentUser
}) => {
  const { hasFavorited, toggleFavorite } = useFavorite({
    bookId,
    currentUser
  });

  return (
    <div 
      onClick={toggleFavorite}
      className="
        relative
        hover:opacity-80
        transition
        cursor-pointer
        p-2
        m-2
      "
    >
            <MdOutlineFavoriteBorder
            size={32}
            className={`
                fill-white
                absolute
                -top-[2px]
                -right-[2px]
                ${hasFavorited ? 'hidden' : ''}
            `}
            />

            <MdOutlineFavorite
            size={28}
            className={`
                ${hasFavorited ? 'fill-rose-500' : 'fill-neutral-500/70'}
                absolute
                top-0
                right-0
            `}
            />


    </div>
   );
}
 
export default FavoriteButton;