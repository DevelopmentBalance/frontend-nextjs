import React from "react";

import { Skeleton } from "../Skeleton";

import * as S from "./styles";

export const useFlexTable = ({
  headerColumns = [],
  rows = [{}],
  fontSizeHeader = "",
  isLoading = false,
  isView,
}) => {
  const isElement = ({ content }) => !!content?.$$typeof;

  const hasRowColumnWidth = (columnKey) =>
    headerColumns.find((column) => column.key === columnKey)?.width;

  const isRowColumnHiddenOnMobile = (columnKey) =>
    headerColumns.find((column) => column.key === columnKey)?.hideOnMobile;

  const isRowColumnHiddenOnTablet = (columnKey) =>
    headerColumns.find((column) => column.key === columnKey)?.hideOnTablet;

  const fakeRow = (index) => ({
    key: index,
    columns: headerColumns.map((column) => {
      const rowWidth = parseInt(hasRowColumnWidth(column.key), 10);

      const checkbox = rowWidth <= 20;

      return {
        key: column.key,
        content: (
          <Skeleton
            width={`${checkbox ? rowWidth : rowWidth - 20}px`}
            height={20}
          />
        ),
      };
    }),
  });

  const renderRow = ({ row, index }) => {
    const {
      onClickRow,
      columns,
      key: rowKey,
    } = isLoading ? fakeRow(index) : row;

    const handleClick = (e) => onClickRow(e);

    return (
      <S.Row key={rowKey}>
        <S.RowColumnsContainer
          onClick={handleClick}
          hasAlert={!row.isCanceled && row.hasAlert}
        >
          {columns?.map(({ key, content, ...column }) => (
            <S.RowColumn
              key={index}
              hasArrow={column.hasArrow}
              arrowRightPosition={column.arrowRightPosition}
              minWidth={column?.minWidth}
              align={column.align}
              isCanceled={row.isCanceled && key !== "status"}
              hideOnMobile={isRowColumnHiddenOnMobile(key)}
              hideOnTablet={isRowColumnHiddenOnTablet(key)}
              width={hasRowColumnWidth(key)}
              arrowVariantBottom={!!row.arrowVariantBottom}
            >
              {isElement({ content }) ? (
                isView ? (
                  content
                ) : (
                  "*****"
                )
              ) : (
                <S.HeaderText>{isView ? content : "*****"}</S.HeaderText>
              )}
            </S.RowColumn>
          ))}
        </S.RowColumnsContainer>
      </S.Row>
    );
  };

  const renderHeaderColumns = headerColumns.map(
    ({
      key,
      width,
      content,
      justify,
      hideOnMobile = false,
      hideOnTablet = false,
    }) => (
      <S.Column
        width={width}
        key={key}
        hideOnMobile={hideOnMobile}
        hideOnTablet={hideOnTablet}
        justify={justify}
        fontSizeHeader={fontSizeHeader}
      >
        {isElement({ content }) ? (
          content
        ) : (
          <S.HeaderText>{content}</S.HeaderText>
        )}
      </S.Column>
    )
  );

  const renderRows = rows.map((row, index) => renderRow({ row, index }));

  return {
    renderHeaderColumns,
    renderRows,
  };
};
