import ReactLoading from "react-loading";
import styled, { css } from "styled-components";

const typeSizes = {
  small: css`
    width: 150px;
    height: 35px;
    border-radius: 35px;
    font-size: 16px;
    font-weight: 700;
  `,
  medium: css`
    width: 216px;
    height: 48px;
    border-radius: 48px;
    font-size: 16px;
    font-weight: 700;
  `,
};

const typeVariants = {
  outline: css`
    background-color: none;
    border: 2px solid ${({ theme: { colors } }) => colors.purple_1};
    color: ${({ theme: { colors } }) => colors.purple_1};

    &:disabled {
      border: 2px solid ${({ theme: { colors } }) => colors.gray_1};
      color: ${({ theme: { colors } }) => colors.gray_1};
      cursor: not-allowed;
    }
  `,
  filled: css`
    background-color: ${({ theme: { colors } }) => colors.purple_1};
    border: none;
    color: ${({ theme: { colors } }) => colors.white_1};

    &:disabled {
      background-color: ${({ theme: { colors } }) => colors.gray_1};
      cursor: not-allowed;
    }
  `,
};

export const ButtonElement = styled.button`
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  cursor: ${({ loading }) => (loading ? "not-allowed" : "pointer")};

  ${({ size }) => typeSizes[size]}

  ${({ variant }) => typeVariants[variant || "filled"]}

  width: ${({ width }) => width};
`;

export const ButtonLoading = styled(ReactLoading)`
  display: none;

  ${({ loading }) =>
    loading &&
    css`
      display: initial;
    `}
`;
