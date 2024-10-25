import React from "react";

const Pagination = ({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
  setLimit,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const pages = [...Array(totalPages).keys()].map((i) => i + 1);

  return (
    <div>
      <div>
        <input
          type="number"
          value={totalItems}
          onChange={(e) => setLimit(Math.min(10, e.target.value))}
          className="pagination-input"
        />
      </div>
    </div>
  );
};

export default Pagination;
