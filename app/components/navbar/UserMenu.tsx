'use client';
import { HiMenu } from "react-icons/hi";
import Avatar from "../Avatar";
import { useState } from "react";
import MenuItem from "./MenuItem";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import useLoginModal from "@/app/hooks/useLoginModal";
import { RiMenu2Fill } from "react-icons/ri";

import { signOut } from "next-auth/react";
import { SafeUser } from "@/app/types";
import { useRouter } from "next/navigation";

interface UserMenuProps {
  currentUser?: SafeUser | null;
}

const UserMenu: React.FC<UserMenuProps> = ({ currentUser }) => {
  
  const [isOpen, setIsOpen] = useState(false);
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();

  const toggleOpen = () => {
    setIsOpen((value) => !value);
  };

  const router = useRouter();

  return (
    <div className="relative">
      <div
        className="
            flex
            flex-row
            items-center
            gap-3
            "
      >
        <div
          onClick={toggleOpen}
          className={`
                        p-2
                        md:py-2
                        md:px-4
                        flex
                        flex-row
                        items-center
                        gap-3
                        rounded-full
                        cursor-pointer
                        hover:drop-shadow-md
                        transition
                        hover:scale-105
                        ${isOpen ? "scale-105" : ""}
                    `}
        >
          <RiMenu2Fill size={20} />
          <div
            className="
              hidden
              md:block
            "
          >
            {currentUser?.name || "Menu"}
          </div>
          <div className="">
            <Avatar src={currentUser?.image} />
          </div>
        </div>
      </div>
      {isOpen && (
        <div
          className="
          z-10
            absolute
            rounded-xl
            shadow-md
            w-[40vw]
            md:w-3/5
            bg-white
            overflow-hidden
            right-0
            md:right-8
            top-12
            text-sm
            p-1
        "
        >
          <div
            className="
                    flex
                    flex-col
                    cursor-pointer
                "
          >
            {currentUser ? (
              <>
                <MenuItem 
                  label="Profile" 
                  onClick={() => {}}
                />
                <MenuItem 
                  label="My books" 
                  onClick={() => router.push('/posts')}
                />
                <MenuItem 
                  label="Exchanges" 
                  onClick={() => router.push('/exchanges')}
                />
                <hr />
                <MenuItem 
                  label="Logout" 
                  onClick={() => signOut()}
                />
              </>
            ) : (
              <>
                <MenuItem 
                  label="Login" 
                  onClick={loginModal.onOpen}
                />
                <MenuItem 
                  label="Sign up" 
                  onClick={registerModal.onOpen}
                />
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
