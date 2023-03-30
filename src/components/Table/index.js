import * as React from "react";

import { Skeleton } from "../Skeleton";

import { Row } from "./Row";
import { Header } from "./Header";
import { Pagination } from "./Pagination";

import * as S from "./styles";

export const CustomTable = ({
  isLoading,
  title,
  headerContent,
  rowsContent,
  page = 0,
  setPage,
  restProps,
  hasPagination = false,
  rowSkeleton = 10,
  titleOnClick = false,
}) => {
  const getRows = (data = []) =>
    isLoading ? data?.slice(0, rowSkeleton) : data;

  return (
    <S.TableContainer {...restProps}>
      {isLoading ? (
        <Skeleton width={250} height={15} />
      ) : (
        <S.Title
          onClick={() => {
            if (titleOnClick) {
              titleOnClick();
            }
          }}
          hasRedirect={!!titleOnClick}
        >
          {title}
        </S.Title>
      )}

      <Header row={headerContent} isLoading={isLoading} />

      <S.TableRows>
        {getRows(rowsContent)?.map((rowContent, index) => (
          <Row key={index} row={rowContent} isLoading={isLoading} />
        ))}
      </S.TableRows>

      {hasPagination && (
        <Pagination
          count={rowsContent?.length}
          isLoading={isLoading}
          page={page}
          onPageChange={(page) => {
            setPage(page);
          }}
        />
      )}
    </S.TableContainer>
  );
};
