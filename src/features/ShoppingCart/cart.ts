// 1. Define the Data Item Structure
export interface CartItem {
  id: number;
  name: string;
  price: number;
  qty: number;
}

// 2. Define Output Calculation
export interface CartSummary {
  subtotal: number;
  discountAmount: number;
  total: number;
}

// 3. Main Logic
export const calculateCart = (items: CartItem[]): CartSummary => {
  // Logic for Calculate Subtotal
  const subtotal = items.reduce((sum, item) => {
    return sum + item.price * item.qty;
  }, 0);

  // Logic for Calculate Discount
  let discountAmount = 0;
  if (subtotal > 100000) {
    discountAmount = subtotal * 0.1;
  }

  // Logic for Calculate Total
  const total = subtotal - discountAmount;

  return {
    subtotal,
    discountAmount,
    total,
  };
};

// 4. Helper Function (Formatter)
export const formatRupiah = (amount: number): string => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(amount);
};
