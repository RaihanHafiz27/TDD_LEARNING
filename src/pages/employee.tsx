import { useState } from "react";
import {
  filterEmployees,
  type Employee,
} from "../features/EmployeeManager/utils/employee";
import { EmployeeView } from "../features/EmployeeManager/components/EmployeeView";

// Mock Data
const INITIAL_DATA: Employee[] = [
  { id: 1, name: "Alex", role: "Frontend Dev", status: "Active" },
  { id: 2, name: "Emma", role: "Backend Dev", status: "Active" },
  { id: 3, name: "Skylar", role: "QA Engineer", status: "Inactive" },
  { id: 4, name: "Loki", role: "Project Manager", status: "Active" },
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
    <EmployeeView
      // Search Control
      searchValue={search}
      onSearchChange={setSearch}
      // Filter Control
      FilterValue={statusFilter}
      onFilterChange={setStatusFilter}
      // Data
      EmployeeData={filteredData}
      DataAmout={INITIAL_DATA.length}
    />
  );
};
