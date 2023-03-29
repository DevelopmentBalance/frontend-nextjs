import React from "react";

import { maskReal } from "@/infrastructure/utils";

import eyesView from "@/assets/icons/eyes-view.png";
import eyesNowiew from "@/assets/icons/eyes-noview.png";

import { Skeleton } from "../Skeleton";

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
      return <Skeleton height={30} width={150} />;
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
