import { describe, it, expect } from "vitest";
import { maskCreditCard } from "./creditCardMasking";

describe("Credit Card Masking", () => {
  // CASE 1
  describe("Standard Formats", () => {
    const standardCases: Array<[string, string]> = [
      ["4500 1234 5678 9010", "**** **** **** 9010"],
      ["4500-1234-5678-9010", "**** **** **** 9010"],
    ];

    it.each(standardCases)("masks %s to %s", (input, expected) => {
      expect(maskCreditCard(input)).toBe(expected);
    });
  });

  // CASE 2
  describe("Separator & Structure", () => {
    const sepCases: Array<[string, string]> = [
      ["4500-1234 5678-9010", "****-**** ****-9010"],
      ["4500 1234-5678 9010", "**** ****-**** 9010"],
    ];

    it.each(sepCases)("preserves separators for %s", (input, _expected) => {
      const result = maskCreditCard(input);
      expect(result).toMatch(/\d{4}$/);
      expect(result).toMatch(/[ -]/);
    });
  });

  // CASE 3
  describe("Edge Cases", () => {
    it("returns empty string for empty input", () => {
      expect(maskCreditCard("")).toBe("");
    });

    it("masks short inputs correctly (leaving only last 4 visible)", () => {
      expect(maskCreditCard("4500 1234")).toBe("**** 1234");
      // Even shorter case (less than 4 digits)
      expect(maskCreditCard("123")).toBe("123"); // Nothing to mask
    });

    it("keeps last 4 digits for inputs longer than 16 digits", () => {
      const input = "4500 1234 5678 9010 1111";
      const result = maskCreditCard(input);
      // Check the specific tail
      expect(result).toMatch(/1111$/);

      // ensure the start is actually masked
      expect(result).toMatch(/^\*+/);
    });

    it("works with numeric-only input", () => {
      const input = "4500123456789010";
      const result = maskCreditCard(input);
      expect(result).toBeDefined();
      expect(result).toContain("*");
    });
  });

  // CASE 4
  describe("Whitespace Handling", () => {
    const wsCases: string[] = [
      "4500  1234  5678  9010",
      "  4500 1234 5678 9010  ",
      "4500\t1234\t5678\t9010",
    ];

    it.each(wsCases)("preserves last 4 digits for '%s'", (input) => {
      const result = maskCreditCard(input);
      expect(result).toBeDefined();
      expect(result).toMatch(/\d{4}$/);
    });
  });

  // CASE 5
  describe("Consistency & Output Assertions", () => {
    it("produces deterministic output for same input", () => {
      const input = "4500 1234 5678 9010";
      expect(maskCreditCard(input)).toBe(maskCreditCard(input));
    });

    it("masks digits except last 4 and uses asterisks", () => {
      const input = "4500 1234 5678 9010";
      const result = maskCreditCard(input);
      const digits = result.replace(/[^0-9*]/g, "");
      expect(digits).toMatch(/^\*+9010$/);
    });
  });

  // CASE 6
  describe("Real-world Scenarios", () => {
    it("masks batches of cards", () => {
      const cards = [
        "4500 1234 5678 9010",
        "5556 1234 5678 9010",
        "3700 1234 5678 9010",
      ];
      const masked = cards.map(maskCreditCard);
      masked.forEach((m) => {
        expect(m).toContain("*");
        expect(m).toMatch(/\d{4}$/);
      });
    });
  });
});
