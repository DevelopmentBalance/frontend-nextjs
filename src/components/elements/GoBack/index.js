import React from "react";
import { useRouter } from "next/router";

import * as S from "./styles";

import goBackImage from "@/assets/icons/arrowLeft.svg";

export const GoBack = ({
  title = "",
  onClick = null,
  path = "/",
  ...restProps
}) => {
  const { push } = useRouter();

  const onClickHistory = (e) => {
    push(path);
    e.stopPropagation();
  };

  const onClickFunction = onClick ? onClick : onClickHistory;

  return (
    <S.GoBackContent onClick={onClickFunction} {...restProps}>
      <S.GoBackImage src={goBackImage.src} alt="Voltar" />
      <S.GoBackTitle>{title}</S.GoBackTitle>
    </S.GoBackContent>
  );
};
