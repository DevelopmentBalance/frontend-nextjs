import styled, { css } from "styled-components";

export const TableContainer = styled.div`
  width: 100%;
`;

export const Title = styled.p`
  padding: 10px 0;
  cursor: pointer;
  font-family: Jost Bold;

  ${({ isDisabled }) =>
    isDisabled &&
    css`
      cursor: not-allowed;
      -webkit-user-select: none;
      -ms-user-select: none;
      user-select: none;ƒ
    `}

  ${({ hasRedirect }) =>
    !hasRedirect &&
    css`
      cursor: default;
      -webkit-user-select: none;
      -ms-user-select: none;
      user-select: none;
    `}
`;

export const TableRows = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
