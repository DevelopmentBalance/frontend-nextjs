import * as React from "react";

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
    <div {...restProps}>
      <S.Title
        onClick={() => {
          if (titleOnClick) {
            titleOnClick();
          }
        }}
        hasRedirect={!!titleOnClick}
      >
        {title}
        {/* {isLoading ? <Skeleton variant="text" width={250} /> : title} */}
      </S.Title>

      <div>
        <Header row={headerContent} isLoading={isLoading} />
        <div>
          {getRows(rowsContent)?.map((rowContent, index) => (
            <Row key={index} row={rowContent} isLoading={isLoading} />
          ))}
        </div>
      </div>

      {hasPagination && (
        <div>
          <dvi>
            <Pagination
              count={rowsContent?.length}
              isLoading={isLoading}
              page={page}
              onPageChange={(page) => {
                setPage(page);
              }}
            />
          </dvi>
        </div>
      )}
    </div>
  );
};
