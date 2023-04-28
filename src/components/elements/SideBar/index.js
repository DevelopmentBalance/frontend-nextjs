import React from "react";
import { useRouter } from "next/router";

import { useApp } from "@/application/context";
import { logoutUser } from "@/infrastructure/services/user-service";

import logo from "@/assets/icons/logo.svg";
import leftPlataform from "@/assets/icons/left-white.png";
import menuImageWhite from "@/assets/icons/menu.png";
import menuImagePurple from "@/assets/icons/menu-purple.png";

import * as S from "./styles";

export const SideBar = ({
  listContent = [],
  isOpen,
  toggleBar,
  onClick,
  disable,
  loading,
  ...restProps
}) => {
  const { push } = useRouter();
  const { showToastMessage } = useApp();

  const menuImage = isOpen ? menuImageWhite : menuImagePurple;

  return (
    <S.MainContent
      onClick={() => {
        toggleBar();
      }}
      isOpen={isOpen}
      {...restProps}
    >
      <S.MenuMobile src={menuImage.src} onClick={() => toggleBar()} />
      <S.Logo src={logo.src} isOpen={isOpen} />
      <S.List>
        {listContent.length &&
          listContent.map((element, index) => (
            <S.ListELement
              key={index}
              isOpen={isOpen}
              onClick={(e) => {
                if (isOpen) {
                  element.onClick(e);
                }
              }}
            >
              <S.Icon src={element?.icon.src} />
              {isOpen && <p>{element?.name}</p>}
            </S.ListELement>
          ))}
      </S.List>

      <S.Footer isOpen={isOpen}>
        <S.ListELement
          isOpen={isOpen}
          onClick={(e) => {
            if (!isOpen) return;

            e.stopPropagation();
            logoutUser();
            push("/");
            showToastMessage("Desconectado com sucesso");
          }}
        >
          <S.Icon src={leftPlataform.src} />
          {isOpen && <p>Sair</p>}
        </S.ListELement>

        <S.Copy isOpen={isOpen}>
          © Todos os direitos reservados. <br />
          Balance, desde 2021.
        </S.Copy>
      </S.Footer>
    </S.MainContent>
  );
};
