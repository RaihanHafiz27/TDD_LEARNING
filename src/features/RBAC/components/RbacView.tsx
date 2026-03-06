import { PageHeader } from "../../../components/fragments/Header/PageHeader";
import type { Permission, Roles } from "../utils/rbac";
import type React from "react";
import { InforamtionCard } from "./card/InforamtionCard";

interface RBACViewProps {
  roleValue: Roles;
  onRoleChange: (e: Roles) => void;
  renderSecureButton: (
    action: Permission,
    label: string,
    colorClass: string,
  ) => React.ReactNode | null;
}

export const RBACView = (props: RBACViewProps) => {
  const { roleValue, onRoleChange, renderSecureButton } = props;
  return (
    <div className="grow grid place-items-center">
      <div className="w-full max-w-xl p-6 bg-indigo-300/5 rounded-lg">
        <PageHeader title="🛡️ RBAC Simulator" />
        <div className="space-y-8">
          {/* LOGIN SIMULATOR */}
          <div className="bg-indigo-50 border border-indigo-200 p-6 rounded-xl space-y-4">
            <label className="block text-sm font-bold text-indigo-900 mb-2">
              Login as:
            </label>
            <p className="text-xs text-indigo-500 mt-2">
              *Change roles to see changes in access rights below in real time.
            </p>
            <select
              value={roleValue}
              onChange={(e) => onRoleChange(e.target.value as Roles)}
              className="w-full p-4 border border-indigo-300 rounded-lg outline-none font-bold text-indigo-700 bg-white"
            >
              <option value="ADMIN">👑 ADMIN (Super)</option>
              <option value="EDITOR">✍️ EDITOR (Manager)</option>
              <option value="USER">👤 USER (Regular)</option>
            </select>
            {/* DASHBOARD SIMULATOR */}
            <div className="space-y-4">
              {/* View Dashboard (Everyone can do it) */}
              <InforamtionCard
                title="View The Report"
                desc="View visitor data"
                SecureButton={renderSecureButton(
                  "view_dashboard",
                  "Open",
                  "bg-blue-600 hover:bg-blue-700",
                )}
              />

              {/* Create Post (Only Admin & Editor) */}
              <InforamtionCard
                title="Write Article"
                desc="Create new content"
                variant="bg-green-100"
                SecureButton={renderSecureButton(
                  "create_post",
                  "Write",
                  "bg-green-600 hover:bg-green-700",
                )}
              />

              {/* Manage Users (Only Admin) */}
              <InforamtionCard
                title="Remove User"
                desc="Dangerous action (Danger Zone)"
                variant="bg-red-100"
                SecureButton={renderSecureButton(
                  "delete_user",
                  "Remove",
                  "bg-red-600 hover:bg-red-700",
                )}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
