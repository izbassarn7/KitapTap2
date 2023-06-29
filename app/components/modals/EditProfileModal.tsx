import { useState, useEffect } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { SafeUser } from '@/app/types';
import Modal from './Modal';
import Heading from '../Heading';
import Input from '../inputs/Input';
import  useEditProfielModal from '@/app/hooks/useEditProfileModal';

interface EditProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  user: SafeUser | null;
}

const EditProfileModal: React.FC<EditProfileModalProps> = ({ isOpen, onClose, user }) => {
  const [isLoading, setIsLoading] = useState(false);
  const editProfileModal = useEditProfielModal();

  
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue
  } = useForm<FieldValues>({
    defaultValues: {
      name: user?.name || "",
      email: user?.email || "",
      telegramHandle: user?.telegramHandle || "",
      whatsappNumber: user?.whatsappNumber || "",
    },
  });
  

  useEffect(() => {
    setValue('name', user?.name || '');
    setValue('email', user?.email || '');
    setValue('telegramHandle', user?.telegramHandle || '');
    setValue('whatsappNumber', user?.whatsappNumber || '');
  }, [user, setValue]);

  const onSubmit = (data: any) => {
    if (!user) {
      return;
    }

    setIsLoading(true);

    axios
      .patch(`/api/users/${user.id}`, data)
      .then(() => {
        toast.success('Profile updated successfully!');
      })
      .catch((error) => {
        toast.error('Something went wrong. Please try again.');
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading title="Edit Profile" subtitle="Update your personal details" />
      <Input id="name" label="Name" disabled={isLoading} register={register} errors={errors} required />
      <Input id="email" label="Email" disabled={isLoading} register={register} errors={errors} required />
      <Input id="telegramHandle" label="Telegram Handle" disabled={isLoading} register={register} errors={errors} />
      <Input id="whatsappNumber" label="WhatsApp Number" disabled={isLoading} register={register} errors={errors} />
      </div>
  );

  return (
    <Modal
      disabled={isLoading}
      title="Edit Profile"
      actionLabel="Save Changes"
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      onClose={editProfileModal.onClose}
    />
  );
};

export default EditProfileModal;
