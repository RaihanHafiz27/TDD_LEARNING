import { useState } from "react";
import { Link } from "react-router";
import { getPaginationState } from "../features/Pagination/pagination";
import { PaginationBtn } from "../features/Pagination/PaginationBtn";

export const PaginationPage = () => {
  // 1. Setup Dummy Data (Array angka 1 sampai 123)
  const dummyData = Array.from(
    { length: 123 },
    (_, i) => `Item Data #${i + 1}`
  );

  // 2. State Page
  const [currentPage, setCurrentPage] = useState(1);
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
    pagination.endIndex
  );

  return (
    <div className="grow grid place-items-center">
      <div className="max-w-2xl border border-gray-200 rounded-2xl p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-slate-200">
            📄 Pagination Core
          </h2>
          <Link to="/" className="text-blue-600 hover:underline text-sm">
            ← Menu
          </Link>
        </div>

        {/* Display Data List*/}
        <div className="bg-transparent  shadow-sm  overflow-hidden mb-6">
          <ul className="divide-y divide-gray-100">
            {visibleData.map((item, index) => (
              <li
                key={index}
                className="p-4 hover:bg-gray-500/10 transition text-gray-400"
              >
                {item}
              </li>
            ))}
          </ul>

          {/* Empty State / Error handling */}
          {visibleData.length === 0 && (
            <div className="p-8 text-center text-gray-500">Data Kosong</div>
          )}
        </div>

        {/* Controls */}
        <PaginationBtn
          pagination={pagination}
          dataLength={dummyData.length}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
};
