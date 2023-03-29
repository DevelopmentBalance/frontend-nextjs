import React from "react";
// import { Skeleton } from "@mui/material";

import { maskReal } from "@/infrastructure/utils";

import eyesView from "@/assets/icons/eyes-view.png";
import eyesNowiew from "@/assets/icons/eyes-noview.png";

import * as S from "./styles";

export const BalanceCard = ({
  value = 0,
  isView = true,
  onClick = () => {},
  isLoading = false,
  ...reatProps
}) => {
  const eyes = isView ? eyesView : eyesNowiew;
  const valueFormatted = isView ? maskReal(value, true) : "*****";

  const renderValue = (children) => {
    if (isLoading) {
      return (
        <S.Value isLoading={isLoading}>
          {/* <Skeleton variant="text" width={125} height={40} /> */}
          teste
        </S.Value>
      );
    }
    return children;
  };

  return (
    <S.Container {...reatProps}>
      <S.Element isView={isView} isLoading={isLoading}>
        <S.Coin>R$</S.Coin>
        {renderValue(<S.Value>{valueFormatted}</S.Value>)}
      </S.Element>
      <S.Eyes src={eyes.src} onClick={onClick} isLoading={isLoading} />
    </S.Container>
  );
};
