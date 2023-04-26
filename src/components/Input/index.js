import React from "react";

import * as S from "./styles";

const Input = ({
  id,
  name,
  type = "text",
  onChange,
  label = "",
  value,
  width = "100%",
  error,
  ...rest
}) => (
  <S.InputContainer {...rest}>
    {!!value?.length && <S.InputLabel htmlFor={id}>{label}</S.InputLabel>}
    <S.InputElement
      id={id}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      width={width}
      placeholder={label}
    />
    {error && <S.TextError>{error}</S.TextError>}
  </S.InputContainer>
);

export { Input };
