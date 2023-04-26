import * as yup from "yup";
import { CODE_BANK } from "@/application/constant";

export const bankSchema = {
  [CODE_BANK.NUBANK]: yup.object().shape({
    password: yup
      .string()
      .min(8, "Senha inválida, deve ter 8 ou mais caracteres")
      .required("Campo de senha obrigatória"),
    cpf: yup
      .string()
      .matches(
        /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/,
        "CPF não corresponde ao formato 123.456.789-10"
      )
      .required("Campo obrigatório do CPF"),
  }),
  // [CODE_BANK.PICPAY]: yup.object().shape(),
};
