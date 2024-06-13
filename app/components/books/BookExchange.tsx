import { useCallback, useState } from "react";
import { SafeBook, SafeUser } from "@/app/types";
import useEditModal from "@/app/hooks/useEditModal";
import Button from "../Button";
import EditModal from "../modals/EditModal";
import useUser from "@/app/hooks/useUser";
import Heading from "../Heading";
import { FaMailBulk, FaMailchimp, FaTelegram, FaWhatsapp } from "react-icons/fa";
import { MdMail } from "react-icons/md";

interface BookExchangeProps {
  onSubmit: () => void;
  disabled?: boolean;
  currentUser?: SafeUser | null;
  book: SafeBook;
}

const BookExchange: React.FC<BookExchangeProps> = ({
  onSubmit,
  disabled,
  currentUser,
  book,
}) => {
  const editModal = useEditModal();
  const { user, loading } = useUser(book.userId);
  console.log("user", user);

  const [isExpanded, setIsExpanded] = useState(false);

  const onEdit = useCallback(() => {
    console.log("Edit button clicked");
    editModal.onOpen();
  }, [editModal]);

  const handleExchangeClick = useCallback(() => {
    setIsExpanded(true);
  }, []);

  return (
    <div className="bg-white rounded-xl overflow-hidden p-2">
      {currentUser?.id === book.userId ? (
        <>
          <Button label="Edit" onClick={onEdit} />
          <EditModal
            isOpen={editModal.isOpen}
            onClose={editModal.onClose}
            book={book}
            currentUser={currentUser}
          />
        </>
      ) : (
        <>
          {isExpanded ? (
            <>
            
            <div className=" space-y-2">
            <Heading center subtitle="Contact book owner:" />
            <Button
  label="Telegram"
  outline
  icon={FaTelegram}
  onClick={() => {
    const message = encodeURIComponent(`Hi ${user.name}, I am interested in your book titled '${book.title}'. Can we discuss more about it?`);
    window.open(`https://t.me/${user?.telegramHandle}?text=${message}`, "_blank");
  }}
/>
<Button
  label="WhatsApp"
  icon={FaWhatsapp}
  outline
  onClick={() => {
    const message = encodeURIComponent(`Hi ${user.name}, I am interested in your book titled '${book.title}'. Can we discuss more about it?`);
    window.open(`https://wa.me/${user?.whatsappNumber}?text=${message}`, "_blank");
  }}
/>
<Button
  label="Email"
  outline
  icon={MdMail}
  onClick={() => {
    const subject = encodeURIComponent("Interested in your book on KitapTap");
    const body = encodeURIComponent(`Hi ${user.name},\n\nI am interested in the book titled '${book.title}'. Can we discuss more about it?\n\nRegards,\n${currentUser?.name}`);
    window.location.href = `mailto:${user?.email}?subject=${subject}&body=${body}`;
  }}
/>
            </div>
              
            </>
          ) : (
            <Button disabled={disabled} label="Exchange" onClick={handleExchangeClick} />
          )}
        </>
      )}
    </div>
  );
};

export default BookExchange;
