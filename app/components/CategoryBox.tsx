'use client';

import qs from 'query-string';
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import { IconType } from "react-icons";

interface CategoryBoxProps {
  icon: IconType,
  label: string;
  selected?: boolean;
}

const CategoryBox: React.FC<CategoryBoxProps> = ({
  icon: Icon,
  label,
  selected,
}) => {
  const router = useRouter();
  const params = useSearchParams();

  const handleClick = useCallback(() => {
    let currentQuery = {};
    
    if (params) {
      currentQuery = qs.parse(params.toString())
    }

    const updatedQuery: any = {
      ...currentQuery,
      category: label
    }

    if (params?.get('category') === label) {
      delete updatedQuery.category;
    }

    const url = qs.stringifyUrl({
      url: '/',
      query: updatedQuery
    }, { skipNull: true });

    router.push(url);
  }, [label, router, params]);

  return (
    <div
      onClick={handleClick}
      className={`
            
            flex
            flex-col
            items-center
            justify-center
            gap-2   
            p-3
            border-b-2
            hover:text-neutral-600
            transition
            cursor-pointer
            ${
              selected
                ? "text-neutral-600 border-neutral-600"
                : "text-neutral-400 border-transparent"
            } 
            `}
    >
      <Icon size={30} />
      <div>{label}</div>
    </div>
  );
};

export default CategoryBox;
