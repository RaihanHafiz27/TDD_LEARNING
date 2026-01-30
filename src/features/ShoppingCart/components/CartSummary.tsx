import type { CartProps } from "../CartView";

type SummaryProps = Pick<CartProps, "formatRupiah" | "summary">;

export const CartSummary = ({ formatRupiah, summary }: SummaryProps) => {
  return (
    <div className="md:col-span-2">
      <div className="p-6 h-full rounded-xl shadow-lg border border-gray-100 flex flex-col justify-between sticky top-4">
        <h3 className="text-lg font-bold text-slate-200 mb-4 border-b pb-2">
          Summary
        </h3>
        <div className="space-y-2 text-sm text-gray-300">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>{formatRupiah(summary.subtotal)}</span>
          </div>
          {summary.discountAmount > 0 && (
            <div className="flex justify-between text-green-500 font-medium animate-pulse">
              <span>Diskon (10%)</span>
              <span>- {formatRupiah(summary.discountAmount)}</span>
            </div>
          )}
          <div className="border-t pt-2 mt-2 flex justify-between font-bold text-lg text-slate-200">
            <span>Total</span>
            <span>{formatRupiah(summary.total)}</span>
          </div>
          <button
            disabled={summary.total === 0}
            className={`w-full mt-6  text-white py-2 rounded-lg font-bold shadow-md transition-all ${
              summary.total === 0
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-indigo-600 text-slate-200 hover:bg-indigo-700 cursor-pointer"
            }`}
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};
