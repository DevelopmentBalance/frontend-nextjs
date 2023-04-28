import React from "react";

import { SideBar, ModalConectBank } from "../../../components";

import { useBalance } from "./useBalance";

import * as S from "./styles";

export const Balance = ({ children, ...restProps }) => {
  const { listMain, main, modal, setMain, setModal } = useBalance();

  return (
    <S.HomeContainer>
      <S.Left>
        <SideBar
          listContent={listMain}
          isOpen={main}
          toggleBar={() => setMain(!main)}
        />
      </S.Left>
      <S.Right state={main} {...restProps}>
        {children}
      </S.Right>
      {modal && (
        <ModalConectBank
          onClose={() => {
            setModal(false);
          }}
        />
      )}
    </S.HomeContainer>
  );
};
