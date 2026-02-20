import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { toRelativeTime } from "./timeUtils";

describe("Relative Time Logic", () => {
  // BEFORE TEST : freeze time
  beforeEach(() => {
    vi.useFakeTimers();
    // “Current” time to: January 1, 2024, 12:00:00
    const mockNow = new Date("2024-01-01T12:00:00Z");
    vi.setSystemTime(mockNow);
  });

  // AFTER TEST: Return time to normal
  afterEach(() => vi.useRealTimers());

  // CASE 1: Recently (< 1 minute)
  it("must return “Recently” if the difference is < 1 minute", () => {
    // 30 seconds before “Now” time
    const past = new Date("2024-01-01T11:59:30Z").getTime();

    expect(toRelativeTime(past)).toBe("Recently");
  });

  // CASE 2: A Few Minutes Ago
  it("must return 'X Minutes Ago'", () => {
    const past = new Date("2024-01-01T11:55:00Z").getTime();

    expect(toRelativeTime(past)).toBe("5 Minutes Ago");
  });

  // CASE 3: A Few Hours Ago
  it("must return 'X Hours Ago'", () => {
    const past = new Date("2024-01-01T10:00:00Z").getTime();

    expect(toRelativeTime(past)).toBe("2 Hours Ago");
  });

  // CASE 4: A Few Days Ago
  it("must return 'X Days Ago'", () => {
    const past = new Date("2023-12-29T12:00:00Z").getTime();

    expect(toRelativeTime(past)).toBe("3 Days Ago");
  });
});
