import { PageHeader } from "../../../components/fragments/Header/PageHeader";
import { CreditCard } from "./CreditCard/CreditCard";

interface MaskingViewProps {
  rawInput: string;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  maskedNumber: string;
}

export const MaskingView = (props: MaskingViewProps) => {
  const { rawInput, handleInputChange, maskedNumber } = props;

  return (
    <div className="grow grid place-items-center">
      <div className="max-w-xl bg-indigo-300/5 rounded-lg p-6">
        {/* Header */}
        <PageHeader title="💳 CC Masking" />
        <div className="space-y-6">
          {/* Credit Card (Preview) */}
          <CreditCard maskedNumber={maskedNumber} />
          {/* Input Form user */}
          <div className="bg-slate-200 p-6 rounded-xl border border-gray-200 shadow-sm">
            <label className="block text-sm font-bold text-gray-700 mb-2">
              Enter Credit Card Number:
            </label>
            <input
              type="text"
              value={rawInput}
              onChange={handleInputChange}
              placeholder="Example: 4500 1234 5678 9010"
              className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none font-mono text-lg transition"
            />
            <p className="text-xs text-gray-500 mt-3">
              *Type any number. Letters and symbols are automatically discarded
              by TDD logic.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
