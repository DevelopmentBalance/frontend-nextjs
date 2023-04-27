import React from "react";
import { useRouter } from "next/router";

import * as S from "./styles";

import goBackBlack from "@/assets/icons/go-back.png";
import goBackWhite from "@/assets/icons/go-back-white.png";

export const GoBack = ({
  title = "",
  onClick = null,
  isWhite = false,
  path = "/",
  ...restProps
}) => {
  const { push } = useRouter();

  const goBackImage = isWhite ? goBackWhite : goBackBlack;

  const onClickHistory = (e) => {
    push(path);
    e.stopPropagation();
  };

  const onClickFunction = onClick ? onClick : onClickHistory;

  return (
    <S.GoBackContent onClick={onClickFunction} {...restProps}>
      <S.GoBackImage src={goBackImage.src} alt="Voltar" />
      <S.GoBackTitle isWhite={isWhite}>{title}</S.GoBackTitle>
    </S.GoBackContent>
  );
};
