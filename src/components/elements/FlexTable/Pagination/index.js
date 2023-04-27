import * as React from "react";

import { Skeleton } from "@/components";

import doubleLeftArrow from "@/assets/icons/double-left-arrow.png";
import leftArrow from "@/assets/icons/left-arrow.png";
import rightArrow from "@/assets/icons/right-arrow.png";
import doubleRightArrow from "@/assets/icons/double-right-arrow.png";

import * as S from "./styles";

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

  const CustomIcon = ({ children, ...restProps }) => (
    <S.CustomIcon {...restProps}>
      {isLoading ? <Skeleton circle width={25} height={25} /> : children}
    </S.CustomIcon>
  );

  return (
    <S.Actions>
      <CustomIcon
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        <S.Icon src={doubleLeftArrow.src} />
      </CustomIcon>
      <CustomIcon
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        <S.Icon src={leftArrow.src} width={15} height={15} />
      </CustomIcon>
      <CustomIcon
        onClick={handleNextButtonClick}
        // disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        <S.Icon src={rightArrow.src} width={15} height={15} />
      </CustomIcon>
      <CustomIcon
        onClick={handleLastPageButtonClick}
        disabled
        // disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        <S.Icon src={doubleRightArrow.src} />
      </CustomIcon>
    </S.Actions>
  );
};
