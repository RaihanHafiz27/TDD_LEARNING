import { describe, expect, it } from "vitest";
import { getPaginationState } from "./pagination";

describe("Pagination Logic", () => {
  // CASE 1 : First Page
  it("must calculate the state for the first page correctly", () => {
    // Total 50 data, 10 per page, we are on page 1
    const result = getPaginationState({
      totalItems: 50,
      pageSize: 10,
      currentPage: 1,
    });

    expect(result.totalPages).toBe(5);
    expect(result.startIndex).toBe(0);
    expect(result.endIndex).toBe(10);
    expect(result.hasPrev).toBeFalsy();
    expect(result.hasNext).toBeTruthy();
  });

  // CASE 2 : Last Page
  it("must calculate the state for the last page", () => {
    // Let's jump straight to page 5
    const result = getPaginationState({
      totalItems: 50,
      pageSize: 10,
      currentPage: 5,
    });

    expect(result.startIndex).toBe(40);
    expect(result.endIndex).toBe(50);
    expect(result.hasPrev).toBeTruthy();
    expect(result.hasNext).toBeFalsy();
  });

  // CASE 3 : Residual Data (Odd/Not Fitting)
  it("must handle the remaining data on the last page correctly", () => {
    // Total 53 data. Last page (6th) contains only 3 items.
    const result = getPaginationState({
      totalItems: 53,
      pageSize: 10,
      currentPage: 6,
    });

    expect(result.totalPages).toBe(6);
    expect(result.startIndex).toBe(50);
    expect(result.endIndex).toBe(53);
    expect(result.hasNext).toBeFalsy();
  });

  // CASE 4 : Center Page
  it("must be able to navigate in the middle", () => {
    const result = getPaginationState({
      totalItems: 50,
      pageSize: 10,
      currentPage: 2,
    });

    expect(result.hasPrev).toBeTruthy();
    expect(result.hasNext).toBeTruthy();
  });

  // CASE 5 : Correcting Nonsensical Pages (Safety)
  it("must correct if the user requests page 0 or minus", () => {
    const result = getPaginationState({
      totalItems: 50,
      pageSize: 10,
      currentPage: -5,
    });

    // Should be forced to be page 1
    expect(result.currentPage).toBe(1);
    expect(result.startIndex).toBe(0);
  });

  it("must correct if the user requests pages exceeding the total", () => {
    const result = getPaginationState({
      totalItems: 50,
      pageSize: 10,
      currentPage: 999,
    });

    // Should be forced to be last page
    expect(result.currentPage).toBe(5);
  });
});
