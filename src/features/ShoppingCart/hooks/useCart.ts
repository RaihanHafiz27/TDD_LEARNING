import { useState } from "react";
import type { CartItem } from "../utils/cart";

export const useCart = () => {
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
      }),
    );
  };
  return {
    items,
    updateQty,
  };
};
