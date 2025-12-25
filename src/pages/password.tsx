import { Link } from "react-router";
import { PasswordForm } from "../features/PasswordChecker/PasswordForm";
import { useEffect, useState } from "react";

export const PasswordPage = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    if (!isOpen) return;

    const timer = setTimeout(() => {
      setIsOpen(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [isOpen]);

  return (
    <div className="grow grid place-items-center">
      <div className="w-xl border border-gray-200 rounded-lg p-8">
        {/* Header & Back Button */}
        <div className="mb-6 flex items-center justify-between space-y-4">
          <h2 className="text-2xl font-bold text-slate-200">
            🔒 Password Validator
          </h2>
          <Link
            to="/"
            className="text-sm text-sky-600 hover:text-sky-800 hover:underline font-medium"
          >
            ← Back to Menu
          </Link>
        </div>
        <PasswordForm isOpen={isOpen} setIsOpen={setIsOpen} />
        {isOpen && (
          <div className="absolute z-50 bg-gray-950/70 inset-0 grid place-items-center">
            <div className="bg-slate-50 w-96 h-[60vh] rounded-lg p-8 flex flex-col items-center justify-evenly">
              <img src="/check.png" alt="succes" className="w-36 h-auto" />
              <div className="text-center space-y-4">
                <h3 className="text-2xl font-bold text-green-600">
                  Success!!!
                </h3>
                <p className="text-gray-700">Your password has been saved.</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
