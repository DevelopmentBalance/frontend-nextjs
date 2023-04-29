import styled from "styled-components";

export const CustomIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Icon = styled.img``;

export const Actions = styled.div`
  margin: 15px 0;
  display: flex;
  gap: 30px;

  @media (max-width: ${({ theme: { media } }) => media.tablet_portrait}) {
    margin: 15px auto;
  }
`;
