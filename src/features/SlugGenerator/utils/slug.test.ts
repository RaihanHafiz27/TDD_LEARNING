import { describe, it, expect } from "vitest";
import { generateSlug } from "./slugGenerator";

describe("Slug Generator", () => {
  describe("Basic Conversion", () => {
    it("should convert text to lowercase", () => {
      expect(generateSlug("HELLO")).toBe("hello");
      expect(generateSlug("HeLLo WoRLd")).toBe("hello-world");
    });

    it("should replace spaces with hyphens", () => {
      expect(generateSlug("hello world")).toBe("hello-world");
      expect(generateSlug("hello world test")).toBe("hello-world-test");
    });

    it("should handle the example case from requirements", () => {
      expect(generateSlug("Halo Dunia & Apa Kabar?")).toBe(
        "halo-dunia-apa-kabar",
      );
    });
  });

  describe("Special Characters Handling", () => {
    it("should remove special characters", () => {
      expect(generateSlug("Hello@World")).toBe("helloworld");
      expect(generateSlug("Test#Code!")).toBe("testcode");
    });

    it("should remove various special characters", () => {
      expect(generateSlug("Test$%^&*()Text")).toBe("testtext");
      expect(generateSlug("abc!@#$%^&*()def")).toBe("abcdef");
    });

    it("should handle punctuation marks", () => {
      expect(generateSlug("Hello, World!")).toBe("hello-world");
      expect(generateSlug("Question?")).toBe("question");
      expect(generateSlug("End.")).toBe("end");
      expect(generateSlug("Semi;Colon")).toBe("semicolon");
    });

    it("should handle multiple special characters in a row", () => {
      expect(generateSlug("Hello!!!World")).toBe("helloworld");
      expect(generateSlug("Test@#$%Code")).toBe("testcode");
    });

    it("should handle ampersand and plus signs", () => {
      expect(generateSlug("Rock & Roll")).toBe("rock-roll");
      expect(generateSlug("A+B")).toBe("ab");
      expect(generateSlug("Bread & Butter")).toBe("bread-butter");
    });

    it("should handle quotes and apostrophes", () => {
      expect(generateSlug("It's Amazing")).toBe("its-amazing");
      expect(generateSlug('Say "Hello"')).toBe("say-hello");
      expect(generateSlug("Don't Stop")).toBe("dont-stop");
    });

    it("should handle slashes and backslashes", () => {
      expect(generateSlug("Road/Path")).toBe("roadpath");
      expect(generateSlug("Back\\Slash")).toBe("backslash");
    });

    it("should handle dots and commas", () => {
      expect(generateSlug("Hello.World")).toBe("helloworld");
      expect(generateSlug("A, B, C")).toBe("a-b-c");
    });
  });

  describe("Multiple Spaces and Hyphens", () => {
    it("should replace multiple spaces with single hyphen", () => {
      expect(generateSlug("hello   world")).toBe("hello-world");
      expect(generateSlug("a    b    c")).toBe("a-b-c");
    });

    it("should handle underscores as spaces", () => {
      expect(generateSlug("hello_world")).toBe("hello-world");
      expect(generateSlug("test__code")).toBe("test-code");
    });

    it("should handle mixed spaces and underscores", () => {
      expect(generateSlug("hello _ world")).toBe("hello-world");
      expect(generateSlug("test _ _ code")).toBe("test-code");
    });
  });

  describe("Edge Cases", () => {
    it("should handle empty string", () => {
      expect(generateSlug("")).toBe("");
    });

    it("should handle whitespace only string", () => {
      expect(generateSlug("   ")).toBe("");
    });

    it("should remove leading hyphens", () => {
      expect(generateSlug("-hello-world")).toBe("hello-world");
      expect(generateSlug("---test")).toBe("test");
    });

    it("should remove trailing hyphens", () => {
      expect(generateSlug("hello-world-")).toBe("hello-world");
      expect(generateSlug("test---")).toBe("test");
    });

    it("should remove both leading and trailing hyphens", () => {
      expect(generateSlug("-hello-world-")).toBe("hello-world");
      expect(generateSlug("---test---")).toBe("test");
    });

    it("should handle single character", () => {
      expect(generateSlug("a")).toBe("a");
      expect(generateSlug("Z")).toBe("z");
    });

    it("should handle single special character", () => {
      expect(generateSlug("!")).toBe("");
      expect(generateSlug("@")).toBe("");
    });
  });

  describe("Complex Real-world Cases", () => {
    it("should handle Indonesian text", () => {
      expect(generateSlug("Selamat Pagi Dunia")).toBe("selamat-pagi-dunia");
      expect(generateSlug("Apa Kabar Anda?")).toBe("apa-kabar-anda");
    });

    it("should handle mixed content", () => {
      expect(generateSlug("JavaScript & TypeScript 2024!")).toBe(
        "javascript-typescript-2024",
      );
      expect(generateSlug("Hello-World (Test)")).toBe("hello-world-test");
    });

    it("should handle email-like input", () => {
      expect(generateSlug("user@example.com")).toBe("userexamplecom");
    });

    it("should handle URL-like input", () => {
      expect(generateSlug("https://example.com/path")).toBe(
        "httpsexamplecompath",
      );
    });

    it("should handle numbers mixed with text", () => {
      expect(generateSlug("Test 123 Code")).toBe("test-123-code");
      expect(generateSlug("2024-01-15")).toBe("2024-01-15");
    });

    it("should handle hashtags", () => {
      expect(generateSlug("#TrendingTopic")).toBe("trendingtopic");
      expect(generateSlug("Python #code #programming")).toBe(
        "python-code-programming",
      );
    });
  });

  describe("Alphanumeric Preservation", () => {
    it("should preserve numbers", () => {
      expect(generateSlug("Test123")).toBe("test123");
      expect(generateSlug("123abc456")).toBe("123abc456");
    });

    it("should preserve hyphens between words", () => {
      expect(generateSlug("hello-world")).toBe("hello-world");
      expect(generateSlug("test-case-example")).toBe("test-case-example");
    });
  });
});
