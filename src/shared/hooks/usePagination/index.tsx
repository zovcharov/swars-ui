import { useState } from 'react';

export default function usePagination() {
  const [page, setPage] = useState(1);

  const handleNextPage = () => setPage((prevPage) => prevPage + 1);
  const handlePrevPage = () =>
    setPage((prevPage) => (prevPage > 1 ? prevPage - 1 : 1));

  return {
    page,
    onNextPage: handleNextPage,
    onPrevPage: handlePrevPage,
  };
}
