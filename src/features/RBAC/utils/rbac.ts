export type Roles = "ADMIN" | "EDITOR" | "USER";

export type Permission =
  | "view_dashboard"
  | "create_post"
  | "edit_post"
  | "delete_post"
  | "delete_user"
  | "edit_settings";

interface canAccessProps {
  role: Roles;
  action: Permission;
}

// ACCESS RIGHT (SOURCE OF THRUTH)
const PERMISSION_MAP: Record<Roles, Permission[]> = {
  ADMIN: [], // CAN ACCESS ANYTHING (WILDCARD)
  EDITOR: ["view_dashboard", "create_post", "edit_post", "delete_post"],
  USER: ["view_dashboard"],
};

export const canAccess = (props: canAccessProps) => {
  const { role, action } = props;

  if (!role) return false;

  if (role === "ADMIN") return true;

  const allowedActions = PERMISSION_MAP[role];
  if (!allowedActions) return false;

  return allowedActions.includes(action);
};
