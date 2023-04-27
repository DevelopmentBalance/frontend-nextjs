import { useState } from "react";

import { useApp, useUser } from "@/application/context";

export const useBanks = () => {
  const [connectBankModal, setConnectBankModal] = useState(false);

  const { setViewBalance, isViewBalance } = useApp();
  const { user, isLoading } = useUser();

  const isUserWithoutBank = !user?.banks?.length && !isLoading;

  const isAvailableToAddBank = !isLoading;
  const isAvailableToConnect = isUserWithoutBank;

  const handleConnectBank = (ignoreAvailable = false) => {
    if (!isAvailableToConnect && !ignoreAvailable) return;

    setConnectBankModal(true);
  };

  const handleViewBalance = () => {
    if (isLoading) return;

    setViewBalance(!isViewBalance);
  };

  const onCloseModalConnect = () => {
    if (!connectBankModal) return;

    setConnectBankModal(false);
  };

  return {
    user,
    isUserWithoutBank,
    isAvailableToConnect,
    isAvailableToAddBank,
    handleConnectBank,
    handleViewBalance,
    connectBankModal,
    onCloseModalConnect,
    isLoading,
    isViewBalance,
  };
};
