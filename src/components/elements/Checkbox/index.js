import React from "react";

import * as S from "./styles";

export const Checkbox = ({
  name,
  label,
  optional = false,
  changeStyle,
  checkAction,
  children,
  value,
  disabled = false,
  listSelect = false,
  onClick,
  onChange = () => {},
  testid,
  ...restProps
}) => {
  const labelClassName = changeStyle ? "newStyle" : undefined;

  const checkBoxClasses = [
    listSelect && "listSelect",
    disabled && "disabled",
  ].filter(Boolean);

  return (
    <S.Container
      onClick={!disabled ? onClick : () => {}}
      data-testid={testid}
      {...restProps}
    >
      {label && (
        <label
          htmlFor={name}
          className={labelClassName}
          onClick={!disabled ? checkAction : () => {}}
        >
          {label}
          {optional && <span className={labelClassName}>- opcional</span>}
        </label>
      )}
      <S.RowInnerDirection>
        <S.CheckBoxWrapper disabled={disabled}>
          <input
            type="checkbox"
            checked={value}
            disabled={disabled}
            onClick={!disabled ? checkAction : () => {}}
            onChange={!disabled ? onChange : () => {}}
          />
          <span
            className={`newCheck ${[...checkBoxClasses]
              .toString()
              .replace(",", " ")}`}
          />
          {children && (
            <S.Label
              className="singularCheckbox"
              onClick={!disabled ? checkAction : () => {}}
              htmlFor={value?.toString()}
              disabled={disabled}
            >
              {children}
            </S.Label>
          )}
        </S.CheckBoxWrapper>
      </S.RowInnerDirection>
    </S.Container>
  );
};
