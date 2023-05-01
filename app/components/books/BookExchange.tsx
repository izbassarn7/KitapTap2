"use client";

import Button from "../Button";

interface BookExchangeProps {
  onSubmit: () => void;
  disabled?: boolean;
}

const BookExchange: React.FC<BookExchangeProps> = ({ onSubmit, disabled }) => {
  return (
    <div
      className="
      bg-white 
        rounded-xl 
        border-[1px]
      border-neutral-200 
        overflow-hidden
        p-4
      "
    >
      <Button disabled={disabled} label="Exchange" onClick={onSubmit} />
    </div>
  );
};

export default BookExchange;
