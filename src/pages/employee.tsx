import { useState } from "react";
import { Link } from "react-router";
import {
  filterEmployees,
  type Employee,
} from "../features/EmployeeManager/employee";
import { EmployeeList } from "../features/EmployeeManager/EmployeeList";

// Mock Data
const INITIAL_DATA: Employee[] = [
  { id: 1, name: "Kanna Kamui", role: "Frontend Dev", status: "Active" },
  { id: 2, name: "Tohru", role: "Backend Dev", status: "Active" },
  { id: 3, name: "Elma", role: "QA Engineer", status: "Inactive" },
  { id: 4, name: "Lucoa", role: "Project Manager", status: "Active" },
  { id: 5, name: "Fafnir", role: "DevOps", status: "Inactive" },
];

export const EmployeePage = () => {
  // State for Search & Filter
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  // Filter the original data based on the user's input state using tested logic.
  const filteredData = filterEmployees(INITIAL_DATA, {
    query: search,
    status: statusFilter === "All" ? undefined : statusFilter,
  });

  return (
    <div className="grow grid place-items-center">
      <div className="w-2xl  p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-slate-200">
            👥 Employee Directory
          </h2>
          <Link to="/" className="text-blue-600 hover:underline">
            ← Menu
          </Link>
        </div>

        {/* Controls: Search & Filter */}
        <div className="flex gap-4 mb-6">
          {/* Searching field*/}
          <input
            type="text"
            placeholder="Cari nama karyawan..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 p-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 text-slate-200 placeholder:text-gray-500"
          />

          {/* Filter by Status */}
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="p-3  bg-blue-600 rounded-lg text-slate-200  outline-none "
          >
            <option value="All">Semua Status</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>

        {/* Table Employees */}
        <EmployeeList filteredData={filteredData} />

        {/* Information */}
        <p className="mt-4 text-sm text-gray-500 text-right">
          Menampilkan {filteredData.length} dari {INITIAL_DATA.length} karyawan.
        </p>
      </div>
    </div>
  );
};
