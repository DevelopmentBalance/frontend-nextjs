import React from "react";
import { useRouter } from "next/router";

import { useBank } from "./useBank";

import * as S from "./styles";

export const Bank = () => {
  const router = useRouter();

  const {
    page,
    setPage,
    isLoading,
    redirectHome,
    headerContent,
    rowsContent,
    bankTitle,
  } = useBank(router?.query?._);

  return (
    <S.HomeContainer>
      <S.GoBack title="Voltar" isBlack onClick={redirectHome} />
      <S.Title>{bankTitle}</S.Title>

      <S.TableContainer
        title={"Transações"}
        headerContent={headerContent}
        rowsContent={rowsContent}
        isLoading={isLoading}
        page={page}
        setPage={setPage}
        hasPagination
      />
    </S.HomeContainer>
  );
};
