import * as yup from "yup";

export const signInSchema = yup.object().shape({
  password: yup.string().required("Campo de senha obrigatória"),
  email: yup
    .string()
    .email("E-mail inválido.")
    .required("Campo de e-mail obrigatório"),
});

export const changePasswordSchema = yup.object().shape({
  password: yup
    .string()
    .min(8, "Senha inválida, deve ter 8 dígitos")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/,
      "Uma letra maiúscula, uma letra minúscula, um número e um caractere de caixa especial"
    )
    .required("Campo obrigatório do CPF."),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "As senhas não são iguais.")
    .required("Campo obrigatório de confirmação de senha."),
});

export const signUpSchema = yup.object().shape({
  password: yup
    .string()
    .min(8, "Senha inválida, deve ter 8 ou mais caracteres")
    .matches(/[a-z]/, "Pelo menos um caractere minúsculo")
    .matches(/[A-Z]/, "Pelo menos um caractere maiúsculo")
    .required("Campo de senha obrigatória"),
  surname: yup
    .string()
    .min(3, "Nome de usuário inválido, deve ter 3 ou mais caracteres")
    .required("Campo obrigatório Nome de usuário"),
  fullname: yup
    .string()
    .min(10, "Nome de usuário inválido, deve ter 10 ou mais caracteres")
    .required("Campo obrigatório Nome de usuário"),
  email: yup
    .string()
    .email("E-mail inválido.")
    .required("Campo de e-mail obrigatório"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "As senhas não são iguais.")
    .required("Campo obrigatório de confirmação de senha"),
});

export const bankSchema = yup.object().shape({
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
});
