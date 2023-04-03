import React from "react";
import { useRouter } from "next/router";

import { useApp } from "@/application/context";
import { useWindowDimensions } from "@/application/hooks";
import { logoutUser } from "@/infrastructure/services/user-service";

import logo from "@/assets/icons/logo.svg";
import leftPlataform from "@/assets/icons/left-white.png";
import menuImageWhite from "@/assets/icons/menu.png";
import menuImagePurple from "@/assets/icons/menu-purple.png";

import * as S from "./styles";

export const SideBar = ({
  state,
  listContent = [],
  setState,
  onClick,
  disable,
  loading,
  ...restProps
}) => {
  const { push } = useRouter();
  const { showToastMessage } = useApp();
  const { isTabletPortrait } = useWindowDimensions();

  const menuImage = state ? menuImageWhite : menuImagePurple;

  const isAvailableToViewLogo = state || (!state && !isTabletPortrait);

  return (
    <S.MainContent
      onClick={() => {
        if (isTabletPortrait) return;

        setState(!state);
      }}
      state={state}
      {...restProps}
    >
      <S.MenuMobile
        src={menuImage.src}
        onClick={() => {
          setState(!state);
        }}
      />
      {isAvailableToViewLogo && <S.Logo src={logo.src} />}
      <S.List>
        {listContent.length &&
          listContent.map((element, index) => (
            <S.ListELement
              key={index}
              state={state}
              onClick={(e) => {
                if (state) {
                  element.onClick(e);
                }
              }}
            >
              <S.Icon src={element?.icon.src} />
              {state && <p>{element?.name}</p>}
            </S.ListELement>
          ))}
      </S.List>

      <S.Footer state={state}>
        <S.ListELement
          state={state}
          onClick={(e) => {
            if (!state) return;

            e.stopPropagation();
            logoutUser();
            push("/");
            showToastMessage("Desconectado com sucesso");
          }}
        >
          <S.Icon src={leftPlataform.src} />
          {state && <p>Sair</p>}
        </S.ListELement>

        <S.Copy state={state}>
          © Todos os direitos reservados. <br />
          Balance, desde 2021.
        </S.Copy>
      </S.Footer>
    </S.MainContent>
  );
};
