import React from "react";

import { Skeleton } from "@/components/Skeleton";

import * as S from "./styles";

export const Header = ({ row, isLoading }) => {
  const CustomColumn = ({ children, skeletonConfig, ...restProps }) => (
    <S.Column {...restProps}>
      {isLoading && children ? (
        <Skeleton width={100} height={15} {...(skeletonConfig || {})} />
      ) : (
        children
      )}
    </S.Column>
  );

  return (
    <S.Row>
      {row?.map((column, index) => (
        <CustomColumn
          key={index}
          style={column?.style || {}}
          skeletonConfig={column?.style?.skeletonConfig}
          {...(column?.cellProps || {})}
        >
          {column.content}
        </CustomColumn>
      ))}
    </S.Row>
  );
};
