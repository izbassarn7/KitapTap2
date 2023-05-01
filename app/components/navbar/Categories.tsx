'use client';

//"Explore, Connect, Inspire: Unleash Your Imagination with Stories for All"

import { usePathname, useSearchParams } from "next/navigation";
import {
  GiBatMask,
  GiSpellBook,
  GiOpenBook,
} from "react-icons/gi";
import { FaBook } from "react-icons/fa";
import { BsGridFill } from "react-icons/bs";

import CategoryBox from "../CategoryBox";
import Container from "../Container";

export const categories = [
  {
    label: "Book",
    icon: FaBook,
    description: "Unlock Your Imagination",
  },
  {
    label: "Comics",
    icon: GiBatMask,
    description: "Picture Your Adventure",
  },
  {
    label: "Manga",
    icon: GiSpellBook,
    description: "Discover a World Beyond Panels",
  },
  {
    label: "Magazine",
    icon: GiOpenBook,
    description: "Stay Informed, Stay Inspired",
  },
];

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get("category");
  const pathname = usePathname();
  const isMainPage = pathname === "/";

  if (!isMainPage) {
    return null;
  }

  return (
    <Container>
      <div
        className="
          ml-4
          md: m-auto
          absolute
          w-full
          max-w-[85vw]
          pt-4
          flex
          flex-row 
          items-center 
          justify-between
          overflow-x-auto
        "
      >

        {categories.map((item) => (
          <CategoryBox
            key={item.label}
            label={item.label}
            icon={item.icon}
            selected={category === item.label}
          />
        ))}

      </div>
    </Container>
  );
};

export default Categories;
