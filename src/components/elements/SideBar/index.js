import React from "react";
import { useRouter } from "next/router";

import { useApp, useUser } from "@/application/context";
import { logoutUser } from "@/infrastructure/services/user-service";

import logo from "@/assets/icons/logoWhite.svg";
import leftPlataform from "@/assets/icons/exit.svg";
import menuImageWhite from "@/assets/icons/menuWhite.svg";
import menuImagePurple from "@/assets/icons/menuPurple.svg";

import { TYPE_CATEGORY } from "../../../screen/Rules/constant";

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
  const { setUserUpdate } = useUser();

  const menuImage = isOpen ? menuImageWhite : menuImagePurple;

  const redirect = (category) => {
    const query = { category };

    const url = `/rules?${new URLSearchParams(query).toString()}`;

    window.open(url, "_blank");
  };

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
            setUserUpdate(false);
          }}
        >
          <S.Icon src={leftPlataform.src} />
          {isOpen && <p>Sair</p>}
        </S.ListELement>

        <S.Separator isOpen={isOpen} />

        <S.About>
          <S.Links
            isOpen={isOpen}
            onClick={() => redirect(TYPE_CATEGORY.PRIVACY_POLICY)}
          >
            Política de privacidade
          </S.Links>
          <S.Links
            isOpen={isOpen}
            onClick={() => redirect(TYPE_CATEGORY.TERMS_AND_CONDITIONS)}
          >
            Termos e Condições
          </S.Links>
          <S.Links isOpen={isOpen} opacity={0.5}>
            © 2023 Balance
          </S.Links>
        </S.About>
      </S.Footer>
    </S.MainContent>
  );
};
