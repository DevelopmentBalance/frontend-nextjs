import React from "react";

export const Header = ({ row, isLoading }) => {
  const CustomCell = ({
    children,
    typeSkeleton = "text",
    widthSkeleton = "",
    ...restProps
  }) => (
    <div {...restProps}>
      {isLoading && children ? (
        // <Skeleton variant={typeSkeleton} width={widthSkeleton} />
        <p>loading</p>
      ) : (
        children
      )}
    </div>
  );

  return (
    <div>
      <div>
        {row?.map((column) => (
          <CustomCell
            key={column.key}
            style={column?.style || {}}
            {...(column?.cellProps || {})}
          >
            {column.content}
          </CustomCell>
        ))}
      </div>
    </div>
  );
};
