import React from "react";

import theme from "@/styles/defaultTheme";

import * as S from "./styles";

const Button = ({
  onClick = () => {},
  children,
  disable,
  loading,
  typeLoading,
  variant,
  size = "small",
  ...restProps
}) => {
  const loadingColor =
    variant === "outline" ? theme.colors.gray_1 : theme.colors.white_1;
  const buttonContent = loading ? (
    <S.ButtonLoading
      type={typeLoading || "bubbles"}
      loading={loading}
      height={40}
      width={40}
      color={loadingColor}
    />
  ) : (
    children
  );

  return (
    <S.ButtonElement
      onClick={onClick}
      disabled={disable}
      loading={loading}
      variant={variant}
      size={size}
      {...restProps}
    >
      {buttonContent}
    </S.ButtonElement>
  );
};

export { Button };
