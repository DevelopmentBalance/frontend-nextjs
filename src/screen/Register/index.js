import React, { useEffect } from "react";
import { useRouter } from "next/router";

import { Input } from "../../components";

import { useRegister } from "./useRegister";

import * as S from "./styles";

export const Register = () => {
  const { onSubmit, registerSchema, getFieldDefaultProps, isSubmitting } =
    useRegister();
  const history = useRouter();

  const { surname, fullname, email, password1, password2 } = registerSchema;

  const isAvailableToRegister = false;

  useEffect(() => {
    if (!isAvailableToRegister && history?.push) {
      history.push("/");
    }
  }, [history]);

  return (
    <S.RegisterContent>
      <S.GoBack path="/" title="Voltar" />

      <S.Form>
        <S.Title>Cadastro</S.Title>

        <Input {...getFieldDefaultProps(surname.name)} />
        <Input {...getFieldDefaultProps(fullname.name)} />
        <Input {...getFieldDefaultProps(email.name)} />
        <Input {...getFieldDefaultProps(password1.name)} type="password" />
        <Input {...getFieldDefaultProps(password2.name)} type="password" />
      </S.Form>
      <S.RegisterButton loading={isSubmitting} onClick={onSubmit}>
        Cadastrar
      </S.RegisterButton>
    </S.RegisterContent>
  );
};
