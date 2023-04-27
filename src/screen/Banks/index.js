import React from "react";
import { useRouter } from "next/router";

import { ModalConectBank, Skeleton, Balance } from "@/components";

import { useBanks } from "./useBanks";
import { BankCard } from "./BankCard";

import addBankImage from "@/assets/icons/add.png";

import * as S from "./styles";

export const Banks = () => {
  const {
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
  } = useBanks();

  const { push } = useRouter();

  return (
    <Balance>
      <S.HomeContainer>
        <S.Title>
          <S.TitleHello>Olá,</S.TitleHello>
          {isLoading ? (
            <Skeleton height={30} width={150} />
          ) : (
            <S.TitleSurname>{user?.surname}</S.TitleSurname>
          )}
        </S.Title>

        <S.BalanceCard
          value={user?.balance}
          isLoading={isLoading}
          onClick={handleViewBalance}
          isView={isViewBalance}
        />

        <S.TableContainer
          isEmpty={isUserWithoutBank}
          isAvailableToConnect={isAvailableToConnect}
          handleConnectBank={handleConnectBank}
        >
          {user?.banks?.map(({ code, balance, entity_id }, index) => {
            const redirectToBank = () => {
              push({
                pathname: "/bank",
                query: {
                  _: entity_id,
                },
              });
            };

            return (
              <BankCard
                key={index}
                balance={balance}
                code={code}
                onClick={redirectToBank}
                isView={isViewBalance}
              />
            );
          })}
          {isAvailableToAddBank && (
            <S.CardAddBank onClick={() => handleConnectBank(true)}>
              <S.CardAddBankImage src={addBankImage.src} />
              <S.CardAddBankTitle>Novo banco</S.CardAddBankTitle>
            </S.CardAddBank>
          )}
        </S.TableContainer>
      </S.HomeContainer>

      {connectBankModal && <ModalConectBank onClose={onCloseModalConnect} />}
    </Balance>
  );
};
