import React from "react";

import * as S from "./styles";

export const Skeleton = ({ circle, height, width, isWhite = true }) => {
  return (
    <S.Container
      circle={circle}
      height={height}
      width={width}
      isWhite={isWhite}
    />
  );
};
