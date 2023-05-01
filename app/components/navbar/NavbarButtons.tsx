'use client';

import { AiOutlineHeart } from "react-icons/ai";
import { IoMdAdd } from "react-icons/io";
import { useCallback } from "react";
import { SafeUser } from "@/app/types";
import useLoginModal from "@/app/hooks/useLoginModal";
import usePostModal from "@/app/hooks/usePostModal";
import { useRouter } from "next/navigation";

interface NavbarButtonsProps {
  currentUser?: SafeUser | null;
}

const NavbarButtons: React.FC<NavbarButtonsProps> = ({ currentUser }) => {
  const router = useRouter();
  const loginModal = useLoginModal();
  const postModal = usePostModal();

  const onPost = useCallback(() => {
    if (!currentUser) {
      return loginModal.onOpen();
    }
    postModal.onOpen();
  }, [currentUser, loginModal, postModal ]);

  const onWishlist = useCallback(() => {
    if (!currentUser) {
      return loginModal.onOpen();
    }
    //open Wishlist
  }, [currentUser, loginModal]);

  return (
    <div
      className="
            w-full
            md:w-auto
            py-1
            rounded-full
            transition
            cursor-pointer
            "
    >
      <div
        className="
                flex
                flex-row
                items-center
                justify-between
                gap-2
                pl-1
                uppercase
            "
      >
        {currentUser ? (
          <div
          onClick={() => router.push('/favorites')}
          className="
          
                text-sm
                pl-2
                text-gray-100
                flex
                flex-row
                items-center
                gap-3
                rounded-full
                hover:scale-105

            "
        >
          <div>Favorites</div>
          <div
            className="
            p-2
            bg-red-500
            rounded-full
            text-white
            "
          >
            <AiOutlineHeart size={20} />
          </div>
        </div>
        ):(
          <div>
            
          </div>
        )}
        
        <div
          onClick={onPost}
          className="
          
                text-sm
                pl-2
                text-gray-100
                flex
                flex-row
                items-center
                gap-3
                hover:drop-shadow-md
                rounded-full
                hover:scale-105

            "
        >
          <div
            className="
            hidden
            sm:block
          "
          >
            Post a book!
          </div>
          <div
            className="
            p-2
            bg-amber-500
            rounded-full
            text-white
            "
          >
            <IoMdAdd size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarButtons;
