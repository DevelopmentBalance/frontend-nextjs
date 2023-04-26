import styled from "styled-components";

export const InputContainer = styled.div`
  width: ${({ width }) => width};
  text-align: left;
  display: ${({ hide }) => (hide ? "none" : "flex")};
  justify-content: center;
  flex-direction: column;
`;

export const InputLabel = styled.label`
  color: ${({ theme: { colors } }) => colors.blue_1};
  font-size: 12px;
  line-height: 18px;
`;

export const InputElement = styled.input`
  background-color: transparent !important;
  width: calc(100% - 10px);
  height: 45px;
  padding-left: 10px;
  color: ${({ theme: { colors } }) => colors.blue_1};
  border: 0;
  border-radius: 0;
  -webkit-appearance: none;
  border-bottom: 1px solid ${({ theme: { colors } }) => colors.blue_1};

  ::-webkit-input-placeholder {
    color: ${({ theme: { colors } }) => colors.blue_1};
    text-transform: capitalize;
  }

  textarea:focus,
  &:focus {
    outline: none;
  }

  :-webkit-autofill,
  :-webkit-autofill:hover,
  :-webkit-autofill:focus,
  :-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0px 1000px white inset !important;
  }
`;
export const TextError = styled.p`
  font-size: 14px;
  margin: 5px 0 0;
  line-height: 18px;
  color: ${({ theme: { colors } }) => colors.error};
`;