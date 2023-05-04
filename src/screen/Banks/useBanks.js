import { useEffect, useState } from "react";

import { useApp, useUser } from "@/application/context";
import { getUser } from "@/infrastructure/services/user-service";

export const useBanks = () => {
  const [connectBankModal, setConnectBankModal] = useState(false);

  const { setViewBalance, isViewBalance, showToastMessage } = useApp();
  const { user, isLoading, userUpdated, setUser } = useUser();

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

  useEffect(() => {
    if (!userUpdated) {
      getUser()
        .then(setUser)
        .catch((error) => {
          showToastMessage(error || "Erro na autenticação", "msgError");
        });
    }
  }, [userUpdated]);

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
