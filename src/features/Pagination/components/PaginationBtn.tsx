import type { PaginationResult } from "../utils/pagination";

interface Props {
  pagination: PaginationResult;
  dataLength: number;
  handlePrev: () => void;
  handleNext: () => void;
}
export const PaginationBtn = (props: Props) => {
  const { pagination, dataLength, handlePrev, handleNext } = props;
  return (
    <div className="flex justify-between items-center p-4 duration-200 bg-indigo-600  hover:bg-indigo-700 rounded-xl  space-x-2">
      {/* Page Information */}
      <div className="text-sm text-slate-200">
        Page{" "}
        <span className="font-bold text-indigo-900">
          {pagination.currentPage}
        </span>{" "}
        of{" "}
        <span className="font-bold text-indigo-900">
          {pagination.totalPages}
        </span>
        <span className="mx-2 text-gray-300">|</span>
        Total {dataLength} items
      </div>

      {/* Button Prev / Next */}
      <div className="flex gap-2">
        <button
          onClick={handlePrev}
          disabled={!pagination.hasPrev}
          className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
            pagination.hasPrev
              ? "bg-indigo-500 hover:bg-indigo-600 text-slate-200 shadow-sm"
              : "bg-transparent text-gray-400 cursor-not-allowed"
          }`}
        >
          Previous
        </button>

        <button
          onClick={handleNext}
          disabled={!pagination.hasNext}
          className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
            pagination.hasNext
              ? "bg-indigo-500 hover:bg-indigo-600 text-slate-200 shadow-md"
              : "bg-transparent text-gray-400 cursor-not-allowed"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};
