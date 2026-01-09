import type React from "react";
import type { PaginationResult } from "./pagination";

interface Props {
  pagination: PaginationResult;
  dataLength: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}
export const PaginationBtn = (props: Props) => {
  const { pagination, dataLength, setCurrentPage } = props;
  return (
    <div className="flex justify-between items-center bg-gray-50 p-4 rounded-xl border border-gray-200 space-x-2">
      {/* Page Information */}
      <div className="text-sm text-gray-600">
        Page{" "}
        <span className="font-bold text-gray-900">
          {pagination.currentPage}
        </span>{" "}
        of{" "}
        <span className="font-bold text-gray-900">{pagination.totalPages}</span>
        <span className="mx-2 text-gray-300">|</span>
        Total {dataLength} items
      </div>

      {/* Button Prev / Next */}
      <div className="flex gap-2">
        <button
          onClick={() => setCurrentPage((p) => p - 1)}
          disabled={!pagination.hasPrev}
          className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
            pagination.hasPrev
              ? "bg-white border border-gray-300 hover:bg-gray-100 text-gray-700 shadow-sm"
              : "bg-transparent text-gray-400 cursor-not-allowed"
          }`}
        >
          Previous
        </button>

        <button
          onClick={() => setCurrentPage((p) => p + 1)}
          disabled={!pagination.hasNext}
          className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
            pagination.hasNext
              ? "bg-blue-600 text-white hover:bg-blue-700 shadow-md"
              : "bg-gray-200 text-gray-400 cursor-not-allowed"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};
