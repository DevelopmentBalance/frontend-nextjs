import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { useApp } from "@/application/context";
import { bankMock, banksMock } from "@/application/mocks";
import { maskReal, dateAndTimeFormatter } from "@/infrastructure/utils";
import { useBankService } from "@/infrastructure/services/bank-service";

import income from "@/assets/icons/income.png";
import expense from "@/assets/icons/expense.png";

import * as S from "../styles";

export const useBank = (bankId) => {
  const [bank, setBank] = useState({});
  const [bankUpdated, setBankUpdated] = useState(false);
  const [page, setPage] = useState(1);
  const [perPage] = useState(3);
  const [isLoading, setLoading] = useState(true);

  const { push } = useRouter();
  const { showToastMessage } = useApp();
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

  const headerContent = [
    {
      key: "address",
      content: "Nome",
      style: { width: 160, skeletonConfig: { width: 160, height: 15 } },
      cellProps: { component: "th", scope: "row" },
    },
    {
      key: "amount",
      content: "Valor",
      style: { width: 100, skeletonConfig: { width: 100, height: 15 } },
      cellProps: { align: "center" },
    },
    {
      key: "typePayment",
      content: "Tipo de pagamento",
      style: { width: 160 },
      cellProps: { align: "center" },
    },
    {
      key: "datePayment",
      content: "Data",
      style: { width: 50, skeletonConfig: { width: 50, height: 15 } },
      cellProps: { align: "center" },
    },
    {
      title: "typeTransaction",
      content: "",
      style: { width: 50 },
      cellProps: { align: "center" },
    },
  ];

  const transactions = isLoading ? bankMock?.transactions : bank?.transactions;

  const rowsContent = transactions?.map((transaction) => [
    {
      key: "address",
      content: <>{transaction?.address}</>,
      style: { width: 160, skeletonConfig: { width: 160, height: 15 } },
      cellProps: { component: "th", scope: "row" },
    },
    {
      key: "amount",
      content: <>{maskReal(transaction?.amount)}</>,
      style: { width: 100, skeletonConfig: { width: 100, height: 15 } },
      cellProps: { align: "center" },
    },
    {
      key: "typePayment",
      content: <>{transaction?.type_payment}</>,
      style: { width: 160 },
      cellProps: { align: "center" },
    },
    {
      key: "datePayment",
      content: <>{dateAndTimeFormatter(transaction?.date)?.slice(0, 5)}</>,
      style: {
        width: 50,
        skeletonConfig: { width: 50, height: 15 },
      },
      cellProps: { align: "center" },
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
      style: {
        width: 50,
        skeletonConfig: { width: 25, height: 25, circle: true },
      },
      cellProps: { align: "center" },
    },
  ]);

  const bankTitle = banksMock?.find(({ value }) => value === bank?.code);

  return {
    page,
    setPage,
    isLoading,
    redirectHome,
    headerContent,
    rowsContent,
    bankTitle: bankTitle?.label,
  };
};
