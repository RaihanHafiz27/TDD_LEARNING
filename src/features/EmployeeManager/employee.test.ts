import { describe, expect, it } from "vitest";
import { type Employee, filterEmployees } from "./employee";

describe("Employee Filter Logic", () => {
  // DATA DUMMY
  const employees: Employee[] = [
    { id: 1, name: "Alice", role: "Admin", status: "Active" },
    { id: 2, name: "Bob", role: "User", status: "Inactive" },
    { id: 3, name: "Charlie", role: "User", status: "Active" },
    { id: 4, name: "Alex", role: "User", status: "Active" },
  ];

  // CASE 1 : Search by Name (Case Insensitive)
  it("must search by name (upper/lower case letters do not matter)", () => {
    // Search 'al' must found Alice and Alex
    const result = filterEmployees(employees, { query: "al" });

    expect(result).toHaveLength(2);
    expect(result[0].name).toBe("Alice");
    expect(result[1].name).toBe("Alex");
  });

  // CASE 2 : Filter by Status
  it("must be able to filter based on Inactive status", () => {
    const result = filterEmployees(employees, { status: "Inactive" });

    expect(result).toHaveLength(1);
    expect(result[0].name).toBe("Bob");
  });

  // CASE 3 : Combine (Search & Filter)
  it("must be able to search for name AND status simultaneously", () => {
    const result = filterEmployees(employees, { query: "C", status: "Active" });

    expect(result).toHaveLength(2);
    const without = result.find((e) => e.name === "Alex");
    expect(without).toBeUndefined();
  });

  // CASE 4 : Handle Empty Result
  it("must return an empty array if there are no matches", () => {
    const result = filterEmployees(employees, { query: "Zoro" });

    expect(result).toHaveLength(0);
  });
});
