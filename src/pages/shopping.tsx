import { useState } from "react";
import { Link } from "react-router";
import {
  calculateCart,
  formatRupiah,
  type CartItem,
} from "../features/ShoppingCart/cart";

export const ShoppingPage = () => {
  const [items, setItems] = useState<CartItem[]>([
    { id: 1, name: "Mechanical Keyboard", price: 750000, qty: 1 },
    { id: 2, name: "Mousepad Gaming", price: 50000, qty: 1 },
    { id: 3, name: "Kopi Susu", price: 1800, qty: 2 },
  ]);

  // Helper function for update qty
  const updateQty = (id: number, delta: number) => {
    setItems((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          const newQty = Math.max(0, item.qty + delta);
          return { ...item, qty: newQty };
        }
        return item;
      })
    );
  };

  const summary = calculateCart(items);

  return (
    <div className="w-4xl mx-auto mt-10 border border-gray-500 p-8 rounded-lg">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-slate-200">🛒 Shopping Cart</h2>
        <Link to="/" className="text-sky-600 hover:underline text-sm">
          ← Menu Utama
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left Column : List Items */}
        <div className="md:col-span-2 space-y-4">
          {items.map((item) => (
            <div
              key={item.id}
              className=" hover:border-sky-600 transition-all duration-300 group p-4 rounded-xl border border-gray-100 flex justify-between items-center"
            >
              <div>
                <h4 className="font-semibold text-gray-500 group-hover:text-slate-200">
                  {item.name}
                </h4>
                <p className="text-sm text-gray-500">
                  {formatRupiah(item.price)}
                </p>
              </div>
              {/* Button Quantity */}
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => updateQty(item.id, -1)}
                  className="cursor-pointer w-8 h-8 rounded-full bg-sky-600 hover:bg-sky-800 text-slate-200 font-bold"
                >
                  -
                </button>
                <span className=" w-6 text-center text-slate-200">
                  {item.qty}
                </span>
                <button
                  onClick={() => updateQty(item.id, +1)}
                  className="cursor-pointer w-8 h-8 rounded-full bg-sky-600 hover:bg-sky-800 text-slate-200 font-bold"
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>
        {/* Right Column : Summary (Receipt) */}
        <div className="md:col-span-1">
          <div className="p-6 h-full rounded-xl shadow-lg border border-gray-100 flex flex-col justify-between sticky top-4">
            <h3 className="text-lg font-bold text-slate-200 mb-4 border-b pb-2">
              Summary
            </h3>
            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>{formatRupiah(summary.subtotal)}</span>
              </div>
              {summary.discountAmount > 0 && (
                <div className="flex justify-between text-green-600 font-medium animate-pulse">
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
                    : "bg-sky-600 hover:bg-sky-700 cursor-pointer"
                }`}
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
