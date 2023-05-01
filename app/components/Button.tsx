'use client';

import { IconType } from "react-icons";

interface ButtonProps {
  label: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  outline?: boolean;
  small?: boolean;
  icon?: IconType;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled,
  outline,
  small,
  icon: Icon,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
                relative
                disabled:opacity-70
                disabled:cursor-not-allowed
                rounded-lg
                hover:opacity-90
                transition
                w-full
                ${
                  outline
                    ? "bg-white border-black text-black"
                    : "bg-amber-500 text-white border-amber-500"
                } }
                ${
                  small
                    ? "px-2 border-[1px] py-1 text-sm font-light"
                    : "px-4 py-2 border-2 text-base font-semibold"
                } }
            `}
    >
      {Icon && (
        <Icon
          className="
        absolute left-4 top-2"
          size={24}
        />
      )}
      {label}
    </button>
  );
};

export default Button;
