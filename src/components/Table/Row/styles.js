import styled from "styled-components";

export const Row = styled.div`
  width: 100%;
  padding: 7px;
  border-radius: 10px;
  gap: 10px 0;

  display: flex;
  justify-content: space-evenly;

  :nth-child(odd) {
    background-color: ${({ theme: { colors } }) => colors.purple_2};
  }

  @media (max-width: ${({ theme: { media } }) => media.tablet}) {
    width: 50%;
    flex-wrap: wrap;
  }
`;

export const Column = styled.div`
  line-height: 14px;
`;
