import React from "react";
import { useRouter } from "next/router";

import { maskReal } from "@/infrastructure/utils";
import { Skeleton } from "@/components";

import { useBank } from "./useBank";

import * as S from "./styles";

export const Bank = () => {
  const router = useRouter();

  const {
    page,
    setPage,
    isLoading,
    redirectHome,
    headerColumns,
    rows,
    bankTitle,
    bank,
    morePayment,
    moreReceived,
    isViewBalance,
    handleViewBalance,
  } = useBank(router?.query?._);

  const isMock = true;

  return (
    <S.HomeContainer>
      <S.GoBack title="Voltar" isBlack onClick={redirectHome} />
      <S.Title>{bankTitle}</S.Title>

      <S.PageContainer>
        <S.TableTransactions
          title={"Transações"}
          headerColumns={headerColumns}
          rows={rows}
          isLoading={isLoading}
          page={page}
          setPage={setPage}
          hasPagination
          isView={isViewBalance}
        />
        <S.BankDetails>
          <S.BalanceCard
            value={bank?.balance}
            isLoading={isLoading}
            onClick={handleViewBalance}
            isView={isViewBalance}
          />
          {!isMock && (
            <S.MoreCards>
              <S.MoreCard color="green">
                <S.MoreCardTitle>Mais te pagou</S.MoreCardTitle>
                {isLoading ? (
                  <Skeleton width={60} height={25} />
                ) : (
                  <S.MoreCardName>
                    {isViewBalance ? morePayment?.name : "*****"}
                  </S.MoreCardName>
                )}
                <S.MoreCardValueContainer>
                  <S.MoreCardValueSymbol>R$</S.MoreCardValueSymbol>
                  {isLoading ? (
                    <Skeleton width={60} height={25} />
                  ) : (
                    <S.MoreCardValue>
                      {isViewBalance
                        ? maskReal(morePayment?.value, true)
                        : "*****"}
                    </S.MoreCardValue>
                  )}
                </S.MoreCardValueContainer>
              </S.MoreCard>
              <S.MoreCard>
                <S.MoreCardTitle>Mais recebeu</S.MoreCardTitle>
                {isLoading ? (
                  <Skeleton width={60} height={25} />
                ) : (
                  <S.MoreCardName>
                    {isViewBalance ? moreReceived?.name : "*****"}
                  </S.MoreCardName>
                )}
                <S.MoreCardValueContainer>
                  <S.MoreCardValueSymbol>R$</S.MoreCardValueSymbol>
                  {isLoading ? (
                    <Skeleton width={60} height={25} />
                  ) : (
                    <S.MoreCardValue>
                      {isViewBalance
                        ? maskReal(moreReceived?.value, true)
                        : "*****"}
                    </S.MoreCardValue>
                  )}
                </S.MoreCardValueContainer>
              </S.MoreCard>
            </S.MoreCards>
          )}
        </S.BankDetails>
      </S.PageContainer>
    </S.HomeContainer>
  );
};
