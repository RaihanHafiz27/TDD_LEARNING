import { PasswordForm } from "./components/PasswordForm";
import type { PasswordResult } from "./utils/password";
import { ModalPassword } from "./components/ModalPassword";
import { PageHeader } from "../../components/fragments/Header/PageHeader";

export interface PasswordProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  validation: PasswordResult;
}

export const PasswordView = ({
  isOpen,
  setIsOpen,
  password,
  setPassword,
  validation,
}: PasswordProps) => {
  return (
    <div className="grow flex justify-center items-center">
      <div className="w-full max-w-lg bg-indigo-300/5 rounded-lg p-8">
        {/* Header & Back Button */}
        <PageHeader title="🔒 Password Validator" />
        {/* Form Password */}
        <PasswordForm
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          password={password}
          setPassword={setPassword}
          validation={validation}
        />
        {/* Modal Popup */}
        {isOpen && <ModalPassword />}
      </div>
    </div>
  );
};
