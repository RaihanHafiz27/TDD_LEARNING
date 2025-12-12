import { useState } from "react";
import { validatePassword } from "./password";

export const PasswordForm = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [password, setPassword] = useState<string>("");

  console.log(password);

  const validation = validatePassword(password);

  console.log(validation);

  return (
    <div className="space-y-8">
      {/* input password */}
      <input
        onChange={(e) => setPassword(e.target.value)}
        type="text"
        placeholder="*******"
        className="border border-gray-300 w-full p-2 rounded-lg focus:border-none focus:ring-2 focus:ring-sky-600 outline-none placeholder:text-gray-500 text-slate-200"
      />

      {/* Feedback message */}
      <div className="">
        {/* if input is empty */}
        {password.length === 0 && (
          <p className="text-center text-slate-400">
            Please enter your password.
          </p>
        )}

        {/* If there is input but it is invalid */}
        {password.length > 0 && !validation.isValid && (
          <ul className="list-disc pl-6">
            {validation.errors.map((mess, idx) => (
              <li key={idx} className="text-red-400">
                {mess}
              </li>
            ))}
          </ul>
        )}

        {/* If there is input but it is valid */}
        {password.length > 0 && validation.isValid && (
          <p className="text-green-600 font-bold bg-green-50 p-2 rounded-md border border-green-200">
            ✅ Strong Password!
          </p>
        )}
      </div>

      {/* Button Submit */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        disabled={!validation.isValid}
        className={`w-full py-3 rounded-lg font-bold transition-all ${
          validation.isValid
            ? "bg-blue-600 text-white hover:bg-blue-700 cursor-pointer"
            : "bg-gray-300 text-gray-500 cursor-not-allowed"
        }`}
      >
        Submit
      </button>
    </div>
  );
};
