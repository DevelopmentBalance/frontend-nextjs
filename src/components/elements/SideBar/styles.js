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

export const Footer = styled.footer`
  width: 200px;
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

export const Separator = styled.div`
  background-color: transparent;
  width: calc(100% - 20px); // margin 10px x 2
  height: 1px;
  margin: 0 10px;

  ${({ isOpen }) =>
    isOpen &&
    css`
      background-color: rgba(255, 255, 255, 0.2);
    `};

  user-select: none;
  -ms-user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
`;

export const About = styled.div`
  width: 100%;
  padding: 10px;
  gap: 10px;
  display: flex;
  flex-direction: column;
`;

export const Links = styled.a`
  color: ${({ theme: { colors }, isOpen }) =>
    isOpen ? colors.white_1 : "transparent"};
  white-space: nowrap;
  opacity: ${({ opacity }) => opacity};
  text-decoration: none;
  font-size: 11px;

  user-select: none;
  -ms-user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
`;
