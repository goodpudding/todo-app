import React from 'react';
import { Pagination } from "@mantine/core";

const PaginatedList = ({ items, itemsPerPage, page, onChangePage, children }) => {
  const totalPages = Math.ceil(items.length / itemsPerPage);

  const paginatedItems = items.slice(
    (page - 1) * itemsPerPage, 
    page * itemsPerPage
  );

  return (
    <div>
      {children(paginatedItems)}
      <Pagination
        id="pagination"
        onChange={onChangePage}
        total={totalPages}
        color="indigo"
        size="lg"
        radius="md"
        page={page}
      />
    </div>
  );
};

export default PaginatedList;
