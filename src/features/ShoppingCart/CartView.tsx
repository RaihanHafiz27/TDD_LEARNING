import { PageHeader } from "../../components/fragments/Header/PageHeader";
import type { CartItem, ItemSummary } from "./utils/cart";
import { CartList } from "./components/CartList";
import { CartSummary } from "./components/CartSummary";

export interface CartProps {
  items: CartItem[];
  formatRupiah: (amount: number) => string;
  updateQty: (id: number, delta: number) => void;
  summary: ItemSummary;
}

export const CartView = ({
  items,
  formatRupiah,
  updateQty,
  summary,
}: CartProps) => {
  return (
    <div className="grow flex justify-center items-center">
      <div className="w-full max-w-3xl bg-indigo-300/5 rounded-lg p-8">
        {/* Header & Back Button */}
        <PageHeader title="🛒 Shopping Cart" />
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 w-full">
          {/* Left Column : List Items */}
          <CartList
            items={items}
            formatRupiah={formatRupiah}
            updateQty={updateQty}
          />
          {/* Right Column : Summary (Receipt) */}
          <CartSummary formatRupiah={formatRupiah} summary={summary} />
        </div>
      </div>
    </div>
  );
};
