export function generateSlug(text: string): string {
  if (!text) return "";

  return (
    text
      // Convert to lowercase
      .toLowerCase()
      // Replace spaces and underscores with hyphens
      .replace(/[\s_]+/g, "-")
      // Remove or replace special characters, keep only alphanumeric and hyphens
      .replace(/[^\w\-]/g, "")
      // Replace multiple consecutive hyphens with single hyphen
      .replace(/\-+/g, "-")
      // Remove leading and trailing hyphens
      .replace(/^\-+|\-+$/g, "")
  );
}
