import React from "react";

import { banksMock } from "@/application/mocks";
import { maskCpf } from "@/infrastructure/utils";
import { Input, SelectComponent } from "@/components";

import { useModalConectBank } from "./useModalConnectBank";
import { ModalConnectBankModel } from "./ModalConnectBankModel";

import * as S from "./styles";

export const ModalConectBank = ({ onClose, ...restProps }) => {
  const {
    getCurrentBankStyle,
    codeEmail,
    handleSelectBank,
    formik,
    isAvailableToSubmit,
  } = useModalConectBank({ onClose });

  const {
    formId,
    formModel: { bank, cpf, password, code },
  } = ModalConnectBankModel;

  return (
    <S.Container onClick={onClose} {...restProps}>
      <S.Modal onClick={(e) => e.stopPropagation()}>
        <S.FormModal id={formId} onSubmit={formik.handleSubmit}>
          <S.Title>Conexão bancaria</S.Title>

          {!codeEmail && formik.values?.bank?.value && (
            <S.Describe>
              As informações abaixo é requisito do próprio banco selecionado
              para a conexão.
            </S.Describe>
          )}

          {!codeEmail && (
            <SelectComponent
              name={bank}
              options={banksMock}
              label="Bancos disponíveis"
              placeholder="Selecione o banco..."
              onChange={(e) => handleSelectBank(e)}
              isClearable
            />
          )}

          <Input
            hide={
              getCurrentBankStyle(formik.values[bank]?.value)?.hide || codeEmail
            }
            name={cpf}
            value={formik.values[cpf]}
            label="CPF - Cadastrado no Banco"
            error={formik.touched.cpf && formik.errors.cpf}
            onChange={(e) => formik.setFieldValue(cpf, maskCpf(e.target.value))}
          />
          <Input
            hide={
              getCurrentBankStyle(formik.values?.bank?.value)?.hide || codeEmail
            }
            name={password}
            type="password"
            value={formik.values[password]}
            label="Senha - Cadastrada no Banco"
            error={formik.touched.password && formik.errors.password}
            onChange={(e) => formik.setFieldValue(password, e.target.value)}
          />

          {codeEmail && (
            <S.AlertCodeSended>
              Alerta!
              <S.AlertContent>
                Porfavor verificar o código que enviamos para o seu email.
              </S.AlertContent>
            </S.AlertCodeSended>
          )}
          {codeEmail && (
            <Input
              name={code}
              label="Código"
              onChange={(e) => formik.setFieldValue(code, e.target.value)}
            />
          )}
          <S.WrapperButton>
            <S.Button
              type="submit"
              variant="outline"
              disabled={formik.isSubmitting}
              onClick={() => onClose()}
            >
              Cancelar
            </S.Button>
            <S.Button
              type="submit"
              disabled={!isAvailableToSubmit}
              loading={formik.isSubmitting}
              onClick={formik.handleSubmit}
            >
              Enviar
            </S.Button>
          </S.WrapperButton>
        </S.FormModal>
      </S.Modal>
    </S.Container>
  );
};
