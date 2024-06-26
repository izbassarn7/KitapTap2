'use client';

import { toast } from "react-hot-toast";
import axios from "axios";
import { useCallback, useState } from "react";
import { useRouter } from "next/navigation";

import {  SafeUser } from "@/app/types";

import Heading from "@/app/components/Heading";
import Container from "@/app/components/Container";
import BookCard from "@/app/components/books/BookCard";

interface ExchangesUserProps {
  exchanges: any[],
  currentUser?: SafeUser | null,
}

const TripsClient: React.FC<ExchangesUserProps> = ({
  exchanges,
  currentUser
}) => {
  const router = useRouter();
  const [deletingId, setDeletingId] = useState('');

  const onCancel = useCallback((id: string) => {
    setDeletingId(id);

    axios.delete(`/api/exchanges/${id}`)
    .then(() => {
      toast.success('Exchange cancelled');
      router.refresh();
    })
    .catch((error) => {
      toast.error(error?.response?.data?.error)
    })
    .finally(() => {
      setDeletingId('');
    })
  }, [router]);

  return (
    <Container>
      <Heading
        title="Your exchanges"
        subtitle="List of your exchanges"
      />
      <div 
        className="
          mt-10
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          md:grid-cols-3 
          lg:grid-cols-4
          xl:grid-cols-5
          2xl:grid-cols-6
          gap-8
        "
      >
        {exchanges.map((exchange: any) => (
          <BookCard
            key={exchange.id}
            data={exchange.listing}
            exchange={exchange}
            actionId={exchange.id}
            onAction={onCancel}
            disabled={deletingId === exchange.id}
            actionLabel="Cancel exchange"
            currentUser={currentUser}
          />
        ))}
      </div>
    </Container>
   );
}
 
export default TripsClient;