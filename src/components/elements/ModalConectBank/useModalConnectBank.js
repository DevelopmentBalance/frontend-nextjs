import { useState } from "react";
import { useFormik } from "formik";

import { useApp, useUser } from "@/application/context";
import { CODE_BANK } from "@/application/constant";
import { removeMaskCpf } from "@/infrastructure/utils";
import {
  sendCodeByEmailNubank,
  authNubank,
} from "@/infrastructure/services/bank-service";

import { bankSchema } from "./bankSchema";

export const useModalConectBank = ({ onClose }) => {
  const [bankValidation, setBankValidation] = useState(null);
  const [codeEmail, setCodeEmail] = useState(false);

  const { showToastMessage } = useApp();
  const { setUserUpdate } = useUser();

  const stylesBanks = {
    [CODE_BANK.NUBANK]: {
      hide: false,
    },
    [CODE_BANK.BRAZIL_BANK]: {
      hide: true,
    },
    [CODE_BANK.PICPAY]: {
      hide: true,
    },
    [null]: {
      hide: true,
    },
  };

  const getCurrentBankStyle = (currentBankCode = null) =>
    stylesBanks[currentBankCode];

  const initialValues = {
    cpf: "",
    password: "",
    code: "",
    bank: null,
  };

  const onSubmit = async (values, { setSubmitting, resetForm }) => {
    setSubmitting(true);

    if (codeEmail) {
      const payload = {
        code_id: values?.code,
        code: values?.bank?.value,
      };
      const response = await authNubank(payload);

      if (response?.success) {
        showToastMessage("Banco conectado com sucesso");
        onClose();
        resetForm();
        setUserUpdate(false);
      } else {
        const errorMessage =
          response?.message || "Erro ao tentar conectar com Banco";
        showToastMessage(errorMessage, "msgError");
      }

      setSubmitting(false);
      return;
    }

    const payload = {
      cpf: removeMaskCpf(values?.cpf),
      password: values?.password,
      device_id: window.navigator.platform,
      code: values?.bank?.value,
    };

    const response = await sendCodeByEmailNubank(payload);

    if (response?.success) {
      setCodeEmail(true);
      showToastMessage("Código enviado com sucesso");
    } else {
      const errorMessage = response?.message || "Erro ao tentar enviar código";
      showToastMessage(errorMessage, "msgError");
    }

    setSubmitting(false);
  };

  const handleSelectBank = (bank) => {
    setBankValidation(bank?.value);
    formik.setFieldValue("bank", bank);
  };

  const formik = useFormik({
    initialValues: {
      ...initialValues,
    },
    onSubmit,
    validationSchema: bankSchema[bankValidation],
  });

  const isAvailableToSubmit =
    formik.isValid && !formik.isSubmitting && !!bankValidation;

  return {
    getCurrentBankStyle,
    codeEmail,
    handleSelectBank,
    formik,
    isAvailableToSubmit,
  };
};
