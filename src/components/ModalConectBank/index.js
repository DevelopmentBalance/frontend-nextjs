import React, { useState } from "react";
import { useFormik } from "formik";

import { banksMock } from "@/application/mocks";
import { maskCpf } from "@/infrastructure/utils";
import { Input, SelectComponent } from "@/components";

import { useModalConectBank } from "./useModalConectBank";
import { bankSchema } from "./bankSchema";
import * as S from "./styles";

export const ModalConectBank = ({ onClose, ...restProps }) => {
  const [bank, setBank] = useState("");
  const { getCurrentBankStyle, initialValues, onSubmit, stateCode } =
    useModalConectBank({ onClose });

  const handleSelectBank = (bank) => {
    setBank(bank.value);
    formik.setFieldValue("bank", bank);
  };

  const formik = useFormik({
    initialValues: {
      ...initialValues,
    },
    onSubmit,
    validationSchema: bankSchema[bank],
  });
  return (
    <S.Container onClick={onClose} {...restProps}>
      <S.Modal onClick={(e) => e.stopPropagation()}>
        <S.FormModal onSubmit={formik.handleSubmit}>
          <p variant="h5">Conexão bancaria</p>

          {!stateCode && formik.values?.bank?.value && (
            <p>
              As informações abaixo é requisito do próprio banco selecionado
              para a conexão.
            </p>
          )}

          {!stateCode && (
            <SelectComponent
              name="bank"
              options={banksMock}
              label="Bancos disponíveis"
              placeholder="Selecione o banco..."
              onChange={(e) => handleSelectBank(e)}
              isClearable
            />
          )}

          <Input
            hide={
              getCurrentBankStyle(formik.values?.bank?.value)?.hide || stateCode
            }
            name="cpf"
            value={formik.values["cpf"]}
            label="CPF - Cadastrado no Banco"
            error={formik.touched.cpf && formik.errors.cpf}
            onChange={(e) =>
              formik.setFieldValue("cpf", maskCpf(e.target.value))
            }
          />
          <Input
            hide={
              getCurrentBankStyle(formik.values?.bank?.value)?.hide || stateCode
            }
            name="password"
            type="password"
            value={formik.values["password"]}
            label="Senha - Cadastrada no Banco"
            error={formik.touched.password && formik.errors.password}
            onChange={(e) => formik.setFieldValue("password", e.target.value)}
          />

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
              onChange={(e) => formik.setFieldValue("code", e.target.value)}
            />
          )}
          <S.Button
            type="submit"
            disable={formik.isSubmitting}
            loading={formik.isSubmitting}
            onClick={formik.handleSubmit}
          >
            Enviar
          </S.Button>
        </S.FormModal>
      </S.Modal>
    </S.Container>
  );
};
