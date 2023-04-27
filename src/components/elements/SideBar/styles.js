import styled, { css } from "styled-components";

export const MainContent = styled.div`
  width: ${({ isOpen }) => (isOpen ? "200px" : "70px")};
  height: 100%;
  min-height: 100vh;
  background-color: ${({ theme: { colors } }) => colors.purple_1};
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: ${({ theme: { media } }) => media.tablet_portrait}) {
    width: ${({ isOpen }) => (isOpen ? "100%" : "0px")};
    position: ${({ isOpen }) => (isOpen ? "fixed" : "relative")};
    z-index: 99999;
    pointer-events: none;
  }
`;

export const Logo = styled.img`
  width: 35px;
  height: 35px;
  padding-top: 15px;
  padding-left: 15px;
  display: flex;

  @media (max-width: ${({ theme: { media } }) => media.tablet_portrait}) {
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  }
`;

export const List = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  list-style: none;
  gap: 10px;
  padding-top: 40px;
`;

export const ListELement = styled.li`
  width: 100%;
  padding: 10px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  ${({ isOpen }) =>
    isOpen &&
    css`
      justify-content: flex-start;
      padding-left: 20px;
    `};

  p {
    padding-left: 15px;
    color: ${({ theme: { colors } }) => colors.white_1};
  }
`;

export const Icon = styled.img`
  width: 20px;
  height: 20px;
`;

export const Copy = styled.div`
  color: transparent;
  white-space: nowrap;
  padding: 10px;
  opacity: 0.3;

  ${({ isOpen }) =>
    isOpen &&
    css`
      color: ${({ theme: { colors } }) => colors.white_1};
    `};
`;

export const Footer = styled.footer`
  position: absolute;
  bottom: 0;
  color: #fff;
  font-size: 11px;

  ${({ isOpen }) =>
    !isOpen &&
    css`
      width: 70px;
    `};
`;

export const MenuMobile = styled.img`
  position: fixed;
  top: 15px;
  right: 15px;
  display: none;

  @media (max-width: ${({ theme: { media } }) => media.tablet_portrait}) {
    pointer-events: initial;
    display: block;
  }
`;
