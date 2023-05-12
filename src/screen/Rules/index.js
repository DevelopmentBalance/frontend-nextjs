import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import { TYPE_CATEGORY } from "./constant";
import { PrivacyPolicy, TermsAndConditions } from "./components";

import logoImage from "@/assets/icons/logoPurple.svg";

import * as S from "./styles";

export const Rules = () => {
  const { PRIVACY_POLICY, TERMS_AND_CONDITIONS } = TYPE_CATEGORY;

  const router = useRouter();
  const [category, setCategory] = useState(PRIVACY_POLICY);

  const getComponentByCategory = {
    [PRIVACY_POLICY]: PrivacyPolicy,
    [TERMS_AND_CONDITIONS]: TermsAndConditions,
  };

  useEffect(() => {
    if (!!router?.query?.category) {
      setCategory(router?.query?.category);
    }
  }, [router?.query?.category]);

  const ComponentByCategory = getComponentByCategory[category];

  const isActive = (currentCategory) => currentCategory === category;

  return (
    <S.Rules>
      <S.Main>
        <S.Logo src={logoImage.src} alt="logo" />

        <S.SubTitle
          isActive={isActive(PRIVACY_POLICY)}
          onClick={() => setCategory(PRIVACY_POLICY)}
        >
          Política Privacidade
        </S.SubTitle>

        <S.SubTitle
          isActive={isActive(TERMS_AND_CONDITIONS)}
          onClick={() => setCategory(TERMS_AND_CONDITIONS)}
        >
          Termos e Condições
        </S.SubTitle>
      </S.Main>

      <ComponentByCategory />
    </S.Rules>
  );
};
