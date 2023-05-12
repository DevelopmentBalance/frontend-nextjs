import styled, { css } from "styled-components";

export const Rules = styled.div`
  width: 100%;
  padding: 40px;
  box-sizing: border-box;
  display: flex;
  gap: 20px;
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 200px;
  align-items: center;
`;

export const Logo = styled.img`
  width: 90px;
  height: 90px;
  background-size: 90px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 23px;
  text-align: center;
  margin: 30px 0;
`;

export const SubTitle = styled(Title)`
  font-size: 16px;
  line-height: 19px;
  text-align: start;
  margin: 20px 0;

  cursor: pointer;

  ${({ isActive }) =>
    isActive &&
    css`
      color: red;
    `}
`;

export const Paragraph = styled(SubTitle)`
  font-weight: 400;
  text-align: start;
  margin: 10px 0px 10px 30px;
`;
