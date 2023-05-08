import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { useApp } from "@/application/context";
import { banksMock } from "@/application/mocks";
import { maskReal, dateAndTimeFormatter } from "@/infrastructure/utils";
import { useBankService } from "@/infrastructure/services/bank-service";

import income from "@/assets/icons/income.svg";
import expense from "@/assets/icons/expense.svg";

import * as S from "../styles";

export const useBank = (bankId) => {
  const [bank, setBank] = useState({});
  const [bankUpdated, setBankUpdated] = useState(false);
  const [page, setPage] = useState(1);
  const [perPage] = useState(10);
  const [isLoading, setLoading] = useState(true);

  const { push } = useRouter();
  const { showToastMessage, isViewBalance, setViewBalance } = useApp();
  const { getBank } = useBankService();

  const redirectToLogin = () => {
    push("/");
  };

  useEffect(() => {
    if (!bankUpdated && !!bankId) {
      setLoading(true);

      getBank(bankId, page, perPage)
        .then((response) => {
          setBank(response);
          setLoading(false);
        })
        .catch((error) => {
          showToastMessage(
            error?.response?.data?.detail || "Erro na autenticação",
            "msgError"
          );
          if (error?.response?.data?.detail === "Signature has expired") {
            console.log(
              "error?.response?.data?.detail",
              error?.response?.data?.detail
            );
            redirectToLogin();
          }
          setLoading(false);
        });

      setBankUpdated(true);
    }
  }, [bankUpdated]);

  useEffect(() => {
    if (bankUpdated) {
      setBankUpdated(false);
    }
  }, [page]);

  const redirectHome = () => {
    push("/banks");
  };

  const headerColumns = [
    {
      content: "Nome",
      key: "address",
    },
    {
      content: "Valor",
      key: "amount",
      width: "200px",
    },
    {
      content: "Tipo",
      key: "typePayment",
      width: "50px",
    },
    {
      content: "Data",
      key: "datePayment",
      width: "80px",
    },
    {
      content: "",
      key: "typeTransaction",
      width: "50px",
    },
  ];

  const rows = bank?.transactions?.map((transaction, index) => ({
    key: index,
    onClickRow: () => {},
    columns: [
      {
        key: "address",
        content: <>{transaction?.address}</>,
      },
      {
        key: "amount",
        content: <>{maskReal(transaction?.amount)}</>,
      },
      {
        key: "typePayment",
        content: <>{transaction?.type_payment}</>,
      },
      {
        key: "datePayment",
        content: <>{dateAndTimeFormatter(transaction?.date)?.slice(0, 5)}</>,
      },
      {
        key: "typeTransaction",
        content: (
          <S.RowIcon
            src={
              transaction?.type_transaction === "income"
                ? income.src
                : expense.src
            }
            alt="tipo de tansação"
          />
        ),
        justify: "flex-end",
      },
    ],
  }));

  const bankTitle = banksMock?.find(({ value }) => value === bank?.code);

  const morePayment = {
    name: "João",
    value: 3300,
  };

  const moreReceived = {
    name: "Yago",
    value: 5620,
  };

  const handleViewBalance = () => {
    if (isLoading) return;

    setViewBalance(!isViewBalance);
  };

  return {
    page,
    setPage,
    isLoading,
    redirectHome,
    headerColumns,
    rows,
    bankTitle: bankTitle?.label,
    bank,
    morePayment,
    moreReceived,
    isViewBalance,
    handleViewBalance,
  };
};
