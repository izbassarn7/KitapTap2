'use client';

import Container from "../Container";
import Logo from "./Logo";
import UserMenu from "./UserMenu";
import NavbarButtons from "./NavbarButtons";
import { SafeUser } from "@/app/types";
import Categories from "./Categories";

interface NavbarProps {
  currentUser?: SafeUser | null;
}

const Navbar: React.FC<NavbarProps> = ({
  currentUser,
}) => {
  return (
    <div className="fixed w-full text-white bg-emerald-600 z-10 shadow-sm">
      <div
        className="
        py-2
        border-b-[1px]
      "
      >
        <Container>
          <div
            className="
            flex
            flex-row
            items-center
            justify-between
            gap-3
            md:gap-0
            font-montserrat
            z-10
            "
          >
            <Logo />
            <NavbarButtons currentUser={currentUser} />
            
            <UserMenu currentUser={currentUser} />
          </div>
        </Container>
      </div>
      <Categories/>
    </div>
  );
};

export default Navbar;
