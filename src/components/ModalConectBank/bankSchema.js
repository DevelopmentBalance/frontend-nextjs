import * as yup from "yup";
import { CODE_BANK } from "@/application/constant";

export const bankSchema = {
  [CODE_BANK.NUBANK]: yup.object().shape({
    password: yup
      .string()
      .min(8, "Invalid password, must be 8 or more characters")
      .required("Mandatory password field"),
    cpf: yup
      .string()
      .matches(
        /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/,
        "CPF don't match with format 123.456.789-10"
      )
      .required("Mandatory CPF field"),
  }),
  // [CODE_BANK.PICPAY]: yup.object().shape(),
};
