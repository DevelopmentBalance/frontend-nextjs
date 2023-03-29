import React from "react";
import App, { AppProps } from "next/app";
import { useRouter } from "next/router";

import { Balance } from "../../components/modules";
import { GoBack, Table } from "../../components";

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
    <Balance>
      <GoBack title="Detalhes do Banco" isBlack onClick={redirectHome} />
      <S.HomeContainer>
        <S.TableContainer>
          <Table
            title={bankTitle}
            headerContent={headerContent}
            rowsContent={rowsContent}
            isLoading={isLoading}
            page={page}
            setPage={setPage}
            hasPagination
          />
        </S.TableContainer>
      </S.HomeContainer>
    </Balance>
  );
};
