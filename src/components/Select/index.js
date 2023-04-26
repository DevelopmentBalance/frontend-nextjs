import React from "react";

import ReactSelect from "react-select";

import * as S from "./styles";
export const SelectComponent = ({ label, options, ...restProps }) => (
  <S.SelectContent>
    {label && <S.Label>{label}</S.Label>}
    <ReactSelect options={options} {...restProps} />
  </S.SelectContent>
);
