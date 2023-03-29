import React from "react";

export const Row = ({ isLoading, row }) => {
  const CustomCell = ({
    children,
    typeSkeleton = "text",
    widthSkeleton = "",
    ...restProps
  }) => (
    <div {...restProps}>
      {isLoading ? (
        // <Skeleton variant={typeSkeleton} width={widthSkeleton} />
        <div>loading</div>
      ) : (
        children
      )}
    </div>
  );

  return (
    <div>
      {row?.map((column) => (
        <div
          key={column.key}
          style={column?.style || {}}
          {...(column?.cellProps || {})}
        >
          {column.content}
        </div>
      ))}
    </div>
  );
};
