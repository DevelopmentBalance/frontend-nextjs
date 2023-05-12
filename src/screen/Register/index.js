import React, { useEffect } from "react";
import { useRouter } from "next/router";

import { Input } from "@/components";

import { TYPE_CATEGORY } from "../Rules/constant";
import { useRegister } from "./useRegister";

import * as S from "./styles";

export const Register = () => {
  const {
    onSubmit,
    registerSchema,
    getFieldDefaultProps,
    isSubmitting,
    agreeRule,
    setAgreeRule,
    isAvailableToSubmit,
  } = useRegister();
  const history = useRouter();

  const { surname, fullname, email, password1, password2 } = registerSchema;

  const isAvailableToRegister = false;

  useEffect(() => {
    if (!isAvailableToRegister && history?.push) {
      history.push("/");
    }
  }, [history]);

  const redirect = (category) => {
    const query = { category };

    const url = `/rules?${new URLSearchParams(query).toString()}`;

    window.open(url, "_blank");
  };

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

        <S.Checkbox
          value={agreeRule}
          checkAction={() => setAgreeRule(!agreeRule)}
        >
          Eu concordo com os{" "}
          <S.Links onClick={() => redirect(TYPE_CATEGORY.TERMS_AND_CONDITIONS)}>
            Termos e Condições
          </S.Links>{" "}
          e{" "}
          <S.Links onClick={() => redirect(TYPE_CATEGORY.PRIVACY_POLICY)}>
            Política de Privacidade
          </S.Links>
          .
        </S.Checkbox>
      </S.Form>
      <S.RegisterButton
        disabled={!isAvailableToSubmit}
        loading={isSubmitting}
        onClick={onSubmit}
      >
        Cadastrar
      </S.RegisterButton>
    </S.RegisterContent>
  );
};
