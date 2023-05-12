import styled, { css } from "styled-components";

export const Container = styled.div``;

export const CheckBoxWrapper = styled.div`
  display: flex;
  ${({ disabled }) =>
    disabled &&
    css`
      * {
        cursor: not-allowed !important;
      }
    `}
`;

export const RowInnerDirection = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  cursor: pointer;
  user-select: none;

  span.newCheck {
    border: 2px solid ${({ theme: { colors } }) => colors.gray_1};
    height: 18px;
    min-width: 18px;
    background-color: ${({ theme: { colors } }) => colors.white_1};
    border-radius: 2px;
    &.disabled {
      background: ${({ theme: { colors } }) => colors.white_1};
      border: solid 2px ${({ theme: { colors } }) => colors.gray_5};
    }

    &.listSelect.disabled {
      background: ${({ theme: { colors } }) => colors.gray_1};
      border: solid 2px ${({ theme: { colors } }) => colors.gray_1};
    }
    &:after {
      content: "";
      position: absolute;
      display: none;
    }
  }

  span.newRadio {
    border: 2px solid ${({ theme: { colors } }) => colors.gray_1};
    height: 18px;
    width: 18px;
    background-color: ${({ theme: { colors } }) => colors.white_1};
    border-radius: 50%;

    &:after {
      content: "";
      position: absolute;
      display: none;
    }
  }

  span.newCheck:after {
    left: 6px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
    pointer-events: none;
  }

  span.newRadio:after {
    top: 50%;
    left: 4px;
    transform: translateY(-50%);
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: ${({ theme: { colors } }) => colors.black_3};
  }

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 18px;
    width: 18px;

    &:checked ~ span.newCheck {
      background-color: ${({ theme: { colors } }) => colors.black_3};
      border: 2px solid ${({ theme: { colors } }) => colors.black_3};

      &.disabled {
        background: ${({ theme: { colors } }) => colors.gray_2};
        border: solid 2px ${({ theme: { colors } }) => colors.gray_2};
      }

      &.listSelect {
        background-color: ${({ theme: { colors } }) => colors.white_1};
        border: none;
        &:after {
          top: 1px;
          left: 6px;
          width: 5px;
          height: 10px;
          border: solid ${({ theme: { colors } }) => colors.black_3};
          border-width: 0 2px 2px 0;
          transform: rotate(45deg);
          pointer-events: none;
        }
      }

      &:after {
        display: block;
      }
    }

    &:checked ~ span.newRadio {
      background-color: ${({ theme: { colors } }) => colors.white_1};
      border: 2px solid ${({ theme: { colors } }) => colors.black_3};

      &:after {
        display: block;
      }
    }
  }
`;

export const RowDirection = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 165px), 1fr));
  gap: 20px;
  width: 100%;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    grid-template-columns: repeat(auto-fill, minmax(min(100%, 142px), 1fr));
  }
`;

export const Label = styled.div`
  cursor: default;
  font-weight: 400;
  line-height: 20px;
  color: ${({ disabled, theme: { colors } }) =>
    disabled ? colors.gray_2 : colors.black_1};
  &.singularCheckbox {
    text-transform: initial;
    font-weight: 700;
    color: ${({ disabled, theme: { colors } }) =>
      disabled ? colors.gray_2 : colors.black_4};
    margin-left: 10px;
    font-style: normal;
    margin-top: -5px;
  }
`;
