import styled from "styled-components";

export const CustomIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Icon = styled.img`
  width: ${({ width }) => (width ? `${width}px` : "25px")};
  height: ${({ height }) => (height ? `${height}px` : "25px")};
  background-size: ${({ width, height }) =>
    width || height ? `${width}px` : "25px"};
`;

export const Actions = styled.div`
  margin-top: 10px;
  display: flex;
  gap: 10px;
`;
