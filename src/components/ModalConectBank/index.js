import React, { useState } from "react";
import { Formik } from "formik";

import { loginBancoOriginal } from "../../infrastructure/services/bank-service";
import { banksMock } from "@/application/mocks";
import { CODE_BANK } from "@/application/constant";
import { maskCpf } from "@/infrastructure/utils";
import { Input, Select } from "@/components";

import { useModalConectBank } from "./useModalConectBank";
import { ContentFromBank } from "./ContentFromBank";

import * as S from "./styles";

export const ModalConectBank = ({ onClose, ...restProps }) => {
  const { getCurrentBankStyle, initialValues, onSubmit, stateCode } =
    useModalConectBank({ onClose });

  const [contentFromBank, setContentFromBank] = useState(null);

  return (
    <S.Container onClick={onClose} {...restProps}>
      <S.Modal onClick={(e) => e.stopPropagation()}>
        <Formik
          // validationSchema={validationSchema} // de acordo com o banco selecionado
          initialValues={initialValues}
          onSubmit={onSubmit}
        >
          {({ values, setFieldValue, isSubmitting, handleSubmit }) => (
            <S.FormModal>
              <S.Title>Conexão bancaria</S.Title>

              {!stateCode && values?.bank?.value && (
                <S.Observation>
                  As informações abaixo é requisito do próprio banco selecionado
                  para a conexão.
                </S.Observation>
              )}

              {!stateCode && (
                <Select
                  name="bank"
                  label="Bancos disponíveis"
                  placeholder="Selecione o banco..."
                  options={banksMock}
                  onChange={async (e) => {
                    if (e?.value === CODE_BANK.BANCO_ORIGINAL) {
                      loginBancoOriginal().then((response) =>
                        setContentFromBank(response?.page)
                      );
                    }
                    setContentFromBank(null);
                    setFieldValue("bank", e?.value ? e : null);
                  }}
                  isClearable
                />
              )}

              <Input
                hide={
                  getCurrentBankStyle(values?.bank?.value)?.cpf?.hide ||
                  stateCode
                }
                name="cpf"
                label="CPF - Cadastrado no Banco"
                value={values["cpf"]}
                onChange={(e) => setFieldValue("cpf", maskCpf(e.target.value))}
              />
              <Input
                hide={
                  getCurrentBankStyle(values?.bank?.value)?.password?.hide ||
                  stateCode
                }
                name="password"
                label="Senha - Cadastrada no Banco"
                type="password"
                value={values["password"]}
                onChange={(e) => setFieldValue("password", e.target.value)}
              />

              <ContentFromBank content={contentFromBank} />

              {stateCode && (
                <S.AlertCodeSended>
                  Alerta!
                  <S.AlertContent>
                    Porfavor verificar o código que enviamos para o seu email.
                  </S.AlertContent>
                </S.AlertCodeSended>
              )}
              {stateCode && (
                <Input
                  name="code"
                  label="Código"
                  onChange={(e) => setFieldValue("code", e.target.value)}
                />
              )}
              {!getCurrentBankStyle(values?.bank?.value)?.submit?.hide && (
                <S.Button
                  disable={isSubmitting}
                  loading={isSubmitting}
                  onClick={handleSubmit}
                >
                  Enviar
                </S.Button>
              )}
            </S.FormModal>
          )}
        </Formik>
      </S.Modal>
    </S.Container>
  );
};
