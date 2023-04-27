import React from "react";

import ReactSelect from "react-select";

import * as S from "./styles";
export const SelectComponent = ({ label, ...restProps }) => (
  <S.SelectContent>
    {label && <S.Label>{label}</S.Label>} 
    <ReactSelect {...restProps} />
  </S.SelectContent>
);
