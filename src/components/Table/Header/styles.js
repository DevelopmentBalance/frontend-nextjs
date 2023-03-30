import styled from "styled-components";

export const Column = styled.div``;

export const Row = styled.div`
  width: 100%;
  padding: 7px;
  border-radius: 10px;
  gap: 10px 0;

  display: flex;
  justify-content: space-evenly;

  @media (max-width: ${({ theme: { media } }) => media.tablet}) {
    width: 50%;
    flex-wrap: wrap;
  }
`;
