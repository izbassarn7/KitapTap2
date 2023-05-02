
import EmptyState from "@/app/components/EmptyState";
import ClientOnly from "@/app/components/ClientOnly";

import getCurrentUser from "@/app/actions/getCurrentUser";
import getExchanges from "@/app/actions/getExchanges";

import ExchangesClient from "./ExchangesClient";

const ExchangesPage = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return (
      <ClientOnly>
        <EmptyState
          title="Unauthorized"
          subtitle="Please login"
        />
      </ClientOnly>
    );
  }

  const exchanges = await getExchanges({ userId: currentUser.id });

  if (exchanges.length === 0) {
    return (
      <ClientOnly>
        <EmptyState
          title="No trips found"
          subtitle="Looks like you havent reserved any trips."
        />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <ExchangesClient
        exchanges={exchanges}
        currentUser={currentUser}
      />
    </ClientOnly>
  );
}
 
export default ExchangesPage;