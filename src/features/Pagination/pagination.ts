export interface PaginationInput {
  totalItems: number;
  pageSize: number;
  currentPage: number;
}

export interface PaginationResult {
  currentPage: number;
  totalPages: number;
  startIndex: number;
  endIndex: number;
  hasPrev: boolean;
  hasNext: boolean;
}

export const getPaginationState = (
  input: PaginationInput
): PaginationResult => {
  const { totalItems, pageSize, currentPage } = input;

  // 1. calculate total page (round up)
  const totalPages = Math.ceil(totalItems / pageSize);

  // 2. Safety Check (So that currentPage is not incorrect)
  let safeCurrentPage = currentPage;

  if (safeCurrentPage < 1) {
    safeCurrentPage = 1;
  } else if (safeCurrentPage > totalPages && safeCurrentPage > 0) {
    safeCurrentPage = totalPages;
  }

  // 3. Calculate the Slice Array Index
  const startIndex = (safeCurrentPage - 1) * pageSize;

  // 4. End Index cannot exceed the total number of items.
  const endIndex = Math.min(startIndex + pageSize, totalItems);

  return {
    currentPage: safeCurrentPage,
    totalPages,
    startIndex,
    endIndex,
    hasPrev: safeCurrentPage > 1,
    hasNext: safeCurrentPage < totalPages,
  };
};
