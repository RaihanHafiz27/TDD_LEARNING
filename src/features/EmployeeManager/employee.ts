export interface Employee {
  id: number;
  name: string;
  role: string;
  status: "Active" | "Inactive";
}

interface FilterCriteria {
  query?: string;
  status?: string;
}

export const filterEmployees = (
  items: Employee[],
  criteria: FilterCriteria
): Employee[] => {
  return items.filter((employee) => {
    // Checking Name (Search)
    const queryMatch = criteria.query
      ? employee.name.toLowerCase().includes(criteria.query.toLowerCase())
      : true;

    // Check Status (Filter)
    const statusMatch =
      criteria.status && criteria.status !== "All"
        ? employee.status === criteria.status
        : true;

    // Item passes IF (Name Matches) AND (Status Matches)
    return queryMatch && statusMatch;
  });
};
