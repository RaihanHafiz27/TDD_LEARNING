import type { CartProps } from "../CartView";

type CartWithoutSummary = Omit<CartProps, "summary">;

export const CartList = ({
  items,
  formatRupiah,
  updateQty,
}: CartWithoutSummary) => {
  return (
    <div className="md:col-span-3 space-y-4">
      {items.map((item) => (
        <div
          key={item.id}
          className=" p-4 rounded-xl border border-gray-100 flex justify-between items-center"
        >
          <div>
            <h4 className="font-semibold text-slate-200">{item.name}</h4>
            <p className="text-sm text-gray-300">{formatRupiah(item.price)}</p>
          </div>
          {/* Button Quantity */}
          <div className="flex items-center space-x-3">
            <button
              onClick={() => updateQty(item.id, -1)}
              className="w-8 h-8 rounded-full bg-indigo-600 text-slate-200 hover:bg-indigo-700 cursor-pointer font-bold"
            >
              -
            </button>
            <span className=" w-6 text-center text-slate-200">{item.qty}</span>
            <button
              onClick={() => updateQty(item.id, +1)}
              className=" w-8 h-8 rounded-full bg-indigo-600 text-slate-200 hover:bg-indigo-700 cursor-pointer font-bold"
            >
              +
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
