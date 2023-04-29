import styled, { css } from "styled-components";

export const TableHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: ${({ headerPadding }) => headerPadding || "8px 20px"};
`;

export const TableBody = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HeaderText = styled.p``;

export const Column = styled.div`
  color: ${({ theme: { colors } }) => colors.blue_1};
  justify-content: ${({ justify }) => justify || "unset"};
  list-style: none;
  display: flex;
  flex: 1;

  * {
    text-align: left;
    font-style: italic;
    font-weight: 400;
    font-size: ${({ fontSizeHeader, theme: { fontSize } }) =>
      fontSizeHeader || fontSize.medium_small};
  }

  @media (max-width: ${({ theme: { media } }) => media.tablet_landscape}) {
    display: ${({ hideOnTablet }) => (hideOnTablet ? "none" : "flex")};
  }

  @media (max-width: ${({ theme: { media } }) => media.mobile_landscape}) {
    display: ${({ hideOnMobile }) => (hideOnMobile ? "none" : "flex")};
  }

  ${({ width }) =>
    width &&
    css`
      width: 100%;
      max-width: ${width};
    `}
`;

export const Row = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  :nth-child(odd) {
    background-color: ${({ theme: { colors } }) => colors.purple_2};
  }
`;

export const RowColumnsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  gap: 20px;
  padding: 0 20px;
  cursor: pointer;
`;

export const RowColumn = styled.div`
  text-align: left;
  list-style: none;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: ${({ align }) => align || "unset"};
  color: ${({ theme: { colors } }) => colors.blue_1};
  font-weight: 700;
  font-size: ${({ theme: { fontSize } }) => fontSize.middlest};
  font-style: normal;
  padding: 15px 0;
  position: relative;

  @media (max-width: ${({ theme: { media } }) => media.tablet_landscape}) {
    font-size: ${({ theme: { fontSize } }) => fontSize.medium_small};
  }

  @media (max-width: ${({ theme: { media } }) => media.tablet_landscape}) {
    display: ${({ hideOnTablet }) => (hideOnTablet ? "none" : "flex")};
  }

  @media (max-width: ${({ theme: { media } }) => media.mobile_landscape}) {
    display: ${({ hideOnMobile }) => (hideOnMobile ? "none" : "flex")};
  }

  ${({ width }) =>
    width &&
    css`
      width: 100%;
      max-width: ${width};
    `}

  ${({ minWidth }) =>
    minWidth &&
    css`
      width: 100%;
      min-width: ${minWidth};
    `}
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  ${({ columnGap }) =>
    columnGap &&
    css`
      ${TableHeader} {
        gap: ${columnGap};
      }
      ${RowColumnsContainer} {
        gap: ${columnGap};
      }
    `}

  ${({ paddingHeader }) =>
    paddingHeader &&
    css`
      ${TableHeader} {
        padding: ${paddingHeader};
      }
    `}


  ${({ paddingRow }) =>
    paddingRow &&
    css`
      ${RowColumnsContainer} {
        padding: ${paddingRow};
      }
    `}


    ${({ italicHeader }) =>
    italicHeader &&
    css`
      ${HeaderText} {
        font-style: italic;
        font-size: ${({ theme: { fontSize } }) => fontSize.medium_small};
      }
    `}
`;
