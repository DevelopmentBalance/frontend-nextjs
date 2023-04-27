import React from "react";

import { useFlexTable } from "./useFlexTable";
import { Pagination } from "./Pagination";

import * as S from "./styles";

export function FlexTable({
  headerColumns,
  rows,
  columnGap,
  paddingHeader,
  paddingRow,
  fontSizeHeader,
  headerPadding,
  isLoading,
  hasPagination = false,
  page,
  setPage,
  isView,
  ...rest
}) {
  const { renderHeaderColumns, renderRows } = useFlexTable({
    headerColumns,
    rows,
    fontSizeHeader,
    isLoading,
    isView,
  });

  return (
    <S.Container
      columnGap={columnGap}
      paddingHeader={paddingHeader}
      paddingRow={paddingRow}
      {...rest}
    >
      <S.TableHeader headerPadding={headerPadding}>
        {renderHeaderColumns}
      </S.TableHeader>
      <S.TableBody>{renderRows}</S.TableBody>

      {hasPagination && (
        <Pagination
          count={rows?.length}
          isLoading={isLoading}
          page={page}
          onPageChange={(page) => {
            setPage(page);
          }}
        />
      )}
    </S.Container>
  );
}

export default FlexTable;
