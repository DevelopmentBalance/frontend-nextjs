import React from "react";

import { Skeleton } from "@/components/Skeleton";

import * as S from "./styles";

export const Row = ({ isLoading, row }) => {
  const CustomColumn = ({ children, skeletonConfig, ...restProps }) => (
    <S.Column {...restProps}>
      {isLoading ? (
        <Skeleton width={100} height={15} {...(skeletonConfig || {})} />
      ) : (
        children
      )}
    </S.Column>
  );

  return (
    <S.Row>
      {row?.map((column) => (
        <CustomColumn
          key={column.key}
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
