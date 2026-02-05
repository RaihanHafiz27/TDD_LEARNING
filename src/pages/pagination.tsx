import { useState } from "react";
import { getPaginationState } from "../features/Pagination/utils/pagination";
import { PaginationView } from "../features/Pagination/components/PaginationView";

export const PaginationPage = () => {
  // 1. Setup Dummy Data (Array number from 1 to 25)
  const dummyData = Array.from({ length: 25 }, (_, i) => `Item Data #${i + 1}`);

  // 2. State Page
  const [currentPage, setCurrentPage] = useState<number>(1);
  const pageSize = 5;

  // 3. Call our Logic TDD
  const pagination = getPaginationState({
    totalItems: dummyData.length,
    pageSize,
    currentPage,
  });

  // 4. Slice Original Data base on counting logic
  const visibleData = dummyData.slice(
    pagination.startIndex,
    pagination.endIndex,
  );

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < pagination.totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  return (
    <PaginationView
      dataVisible={visibleData}
      dataLength={dummyData.at.length}
      pagination={pagination}
      handlePrev={handlePrev}
      handleNext={handleNext}
    />
  );
};
