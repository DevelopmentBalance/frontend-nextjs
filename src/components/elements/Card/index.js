import React from "react";

import * as S from "./styles";

export const Card = ({
  width,
  height,
  fontColor,
  children,
  background,
  ...restProps
}) => (
  <S.Card
    width={width}
    height={height}
    fontColor={fontColor}
    background={background}
    {...restProps}
  >
    {children}
  </S.Card>
);
