import { describe, expect, it } from "vitest";
import { canAccess, type Permission, type Roles } from "./rbac";

describe("RBAC Security Logic", () => {
  // CASE 1 ROLE SUPER ADMIN CAN ACCESS ANYTHING
  it("ADMIN must be allowed to do anything (Wildcard)", () => {
    const resources: Permission[] = [
      "view_dashboard",
      "create_post",
      "edit_post",
      "delete_post",
      "delete_user",
      "edit_settings",
    ];
    resources.forEach((r) =>
      expect(canAccess({ role: "ADMIN", action: r })).toBe(true),
    );
  });

  // CASE 2 ROLE EDITOR
  it("EDITOR can write and edits, but cannot delete users", () => {
    // CAN ACCESS
    expect(canAccess({ role: "EDITOR", action: "view_dashboard" })).toBe(true);
    expect(canAccess({ role: "EDITOR", action: "create_post" })).toBe(true);
    expect(canAccess({ role: "EDITOR", action: "edit_post" })).toBe(true);
    expect(canAccess({ role: "EDITOR", action: "delete_post" })).toBe(true);

    // CAN'T ACCESS
    expect(canAccess({ role: "EDITOR", action: "delete_user" })).toBe(false);
    expect(canAccess({ role: "EDITOR", action: "edit_settings" })).toBe(false);
  });

  // CASE 3 ROLE USER
  it("USER only view and read dashboard", () => {
    // CAN ACCESS
    expect(canAccess({ role: "USER", action: "view_dashboard" })).toBe(true);

    // CAN'T ACCESS
    expect(canAccess({ role: "USER", action: "create_post" })).toBe(false);
    expect(canAccess({ role: "USER", action: "delete_user" })).toBe(false);
  });

  // UNKNOW ROLE (HACK/GUEST)
  it("Invalid roles should be automatically denied by default", () => {
    expect(
      canAccess({ role: "HACKER" as Roles, action: "view_dashboard" }),
    ).toBe(false);
    expect(
      canAccess({ role: null as unknown as Roles, action: "view_dashboard" }),
    ).toBe(false);
  });
});
