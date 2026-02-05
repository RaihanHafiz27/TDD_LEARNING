import { PageHeader } from "../../../components/fragments/Header/PageHeader";
import type { PaginationResult } from "../utils/pagination";
import { PaginationBtn } from "./PaginationBtn";

interface PaginationProps {
  dataVisible: string[];
  pagination: PaginationResult;
  dataLength: number;
  handlePrev: () => void;
  handleNext: () => void;
}

export const PaginationView = ({
  dataVisible,
  pagination,
  dataLength,
  handlePrev,
  handleNext,
}: PaginationProps) => {
  return (
    <div className="grow grid place-items-center">
      <div className="max-w-2xl p-6 bg-indigo-300/5 rounded-lg">
        <PageHeader title="📄 Pagination Core" />

        {/* Display Data List*/}
        <div className="bg-transparent  shadow-sm  overflow-hidden mb-6 border border-gray-200 rounded-lg">
          <ul className="divide-y divide-gray-100">
            {dataVisible.map((item, index) => (
              <li
                key={index}
                className="p-4 hover:bg-gray-500/10 transition text-gray-400"
              >
                {item}
              </li>
            ))}
          </ul>

          {/* Empty State / Error handling */}
          {dataVisible.length === 0 && (
            <div className="p-8 text-center text-gray-500">Data Kosong</div>
          )}
        </div>

        {/* Controls */}
        <PaginationBtn
          pagination={pagination}
          dataLength={dataLength}
          handlePrev={handlePrev}
          handleNext={handleNext}
        />
      </div>
    </div>
  );
};
