import { describe, expect, it } from "vitest";
import { validatePassword } from "./password";

describe("Password Validor Logic", () => {
  // CASE 1: Check Character Length
  it("must fail if less than 8 characters", () => {
    const result = validatePassword("john");

    expect(result.isValid).toBe(false);
    expect(result.errors).toContain("Min 8 characters");
  });

  // CASE 2: Check Number Availability
  it("must fail if doesn't have a number", () => {
    const result = validatePassword("passWithoutNumber");

    expect(result.isValid).toBe(false);
    expect(result.errors).toContain("Must have number");
  });

  // CASE 3: Check Capital Letters
  it("must fail if doesn't have capital", () => {
    const result = validatePassword("pass123");

    expect(result.isValid).toBe(false);
    expect(result.errors).toContain("Must have capital");
  });

  // CASE 4: Valid Password (Success)
  it("must be valid if the password meets all criteria", () => {
    const result = validatePassword("Qwerty123");

    expect(result.isValid).toBe(true);
    expect(result.errors).toHaveLength(0);
  });
});
