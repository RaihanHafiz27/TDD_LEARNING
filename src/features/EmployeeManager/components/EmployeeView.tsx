import { PageHeader } from "../../../components/fragments/Header/PageHeader";
import type { Employee } from "../utils/employee";
import { EmployeeTable } from "./Table/EmployeeTable";

interface EmployeeProps {
  searchValue: string;
  onSearchChange: (val: string) => void;
  FilterValue: string;
  onFilterChange: (val: string) => void;
  EmployeeData: Employee[];
  DataAmout: number;
}

export const EmployeeView = ({
  searchValue,
  onSearchChange,
  FilterValue,
  onFilterChange,
  EmployeeData,
  DataAmout,
}: EmployeeProps) => {
  return (
    <div className="grow grid place-items-center">
      <div className="w-full max-w-2xl py-4 px-6 bg-indigo-300/5 rounded-lg">
        {/* Header */}
        <PageHeader title="👥 Employee Directory" />

        {/* Controls: Search & Filter */}
        <div className="flex gap-4 mb-6">
          {/* Searching field*/}
          <input
            type="text"
            placeholder="Search Names..."
            value={searchValue}
            onChange={(e) => onSearchChange(e.target.value)}
            className="flex-1 p-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 text-slate-200 placeholder:text-gray-500"
          />

          {/* Filter by Status */}
          <select
            value={FilterValue}
            onChange={(e) => onFilterChange(e.target.value)}
            className="shrink-0 w-36 p-3  bg-indigo-600 text-slate-200 hover:bg-indigo-700 cursor-pointer rounded-md outline-none"
          >
            <option value="All">All</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>

        {/* Table Employees */}
        <EmployeeTable data={EmployeeData} />

        {/* Information */}
        <p className="mt-2 text-sm text-gray-400 text-right">
          Showing {EmployeeData.length} of {DataAmout} Employees.
        </p>
      </div>
    </div>
  );
};
