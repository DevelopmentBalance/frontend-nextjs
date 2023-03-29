import * as React from "react";

export const Pagination = ({ isLoading, count, page, onPageChange }) => {
  if (!count) {
    return null;
  }

  const handleFirstPageButtonClick = () => {
    if (isLoading) return;
    onPageChange(1);
  };

  const handleBackButtonClick = () => {
    if (isLoading) return;
    onPageChange(page - 1);
  };

  const handleNextButtonClick = () => {
    if (isLoading) return;
    onPageChange(page + 1);
  };

  const handleLastPageButtonClick = () => {
    if (isLoading) return;
    // onPageChange(lastPage); // added in backend the return
  };

  const CustomIconButton = ({
    children,
    typeSkeleton = "circular",
    ...restProps
  }) => (
    <div {...restProps}>
      {isLoading ? (
        // <Skeleton variant={typeSkeleton} width={25} height={25} />
        <div>loading</div>
      ) : (
        children
      )}
    </div>
  );

  return (
    <div>
      <div
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        <img alt="#" />
      </div>
      <div
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        <img alt="#" />
      </div>
      <div
        onClick={handleNextButtonClick}
        // disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        <img alt="#" />
      </div>
      <div
        onClick={handleLastPageButtonClick}
        disabled
        // disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        <img alt="#" />
      </div>
    </div>
  );
};
