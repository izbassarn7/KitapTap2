'use client';

import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface InputProps {
  id: string;
  label: string;
  type?: string;
  disabled?: boolean;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
}

const Input: React.FC<InputProps> = ({
  id,
  label,
  type = "text",
  disabled,
  required,
  register,
  errors,
}) => {
  return (
    <div className="w-full relative">
      <input
        id={id}
        disabled={disabled}
        {...register(id, { required })}
        placeholder=" "
        type={type}
        className={`
        border-2
        peer
        w-full
        p-2
        pt-6
        font-light
        bg-white
        rounded-md
        outline-none
        transition
        disabled:opacity-70
        disabled:cursor-not-allowed
        pl-4
        ${errors[id] ? "border-red-500" : "border-neutral-200"}
        ${errors[id] ? "focus:border-red-500" : "text-neutral-900"}
        `}
      />
      <label 
      className={`
        absolute
        text-sm
        duration-150
        transform
        -translate-y-3
        top-5
        z-10
        origin-[0]
        left-4
        peer-placeholder-shown:scale-100
        peer-placeholder-shown:translate-y-0
        peer-focus:scale-75
        peer-focus:-translate-y-4
        ${errors[id] ? "text-red-500" : "text-emerald-700"}
      `}>
        {label}
      </label>
    </div>
  );
};

export default Input;
