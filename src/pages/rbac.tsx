import React, { useState } from "react";
import { RBACView } from "../features/RBAC/components/RbacView";
import {
  canAccess,
  type Permission,
  type Roles,
} from "../features/RBAC/utils/rbac";

export const RBACPage = () => {
  const [currentRole, setCurrentRole] = useState<Roles>("USER");

  const renderSecureButton = (
    action: Permission,
    label: string,
    colorClass: string,
  ): React.ReactNode | null => {
    const hasPermission = canAccess({ role: currentRole, action });

    if (hasPermission) {
      return (
        <button
          className={`w-full py-3 rounded-lg font-bold text-white shadow-md transition-all ${colorClass}`}
        >
          ✅ {label}
        </button>
      );
    }

    return (
      <button
        disabled
        className="w-full py-3 rounded-lg font-bold bg-gray-100 text-gray-400 border border-gray-200 cursor-not-allowed"
      >
        🔒 Access Denied
      </button>
    );
  };

  return (
    <RBACView
      roleValue={currentRole}
      onRoleChange={setCurrentRole}
      renderSecureButton={renderSecureButton}
    />
  );
};
