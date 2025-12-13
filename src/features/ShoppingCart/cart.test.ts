import { describe, expect, it } from "vitest";
import { calculateCart, type CartItem } from "./cart";

describe("Shopping Cart Logic", () => {
  // Dummy Data for Testing
  const itemA: CartItem = { id: 1, name: "Book", price: 20000, qty: 2 };
  const itemB: CartItem = { id: 2, name: "Pencil", price: 5000, qty: 1 };
  const itemMahal: CartItem = { id: 3, name: "Bag", price: 100000, qty: 1 };

  // CASE 1 : Basic Calculation
  it("Must calculate the total price (subtotal) correctly", () => {
    const items = [itemA, itemB];

    // Logic : (20000 * 2) + (5000 * 1) = 45000
    const result = calculateCart(items);

    expect(result.subtotal).toBe(45000);
    expect(result.total).toBe(45000);
    expect(result.discountAmount).toBe(0);
  });

  // CASE 2 : Discount Logic
  it("must give a 10% discount if the purchase > 100.000", () => {
    // Total : 100000 (Bag) + 5000 (Pencil) = 105000
    const items = [itemMahal, itemB];
    // discount requirements are met

    const result = calculateCart(items);

    expect(result.subtotal).toBe(105000);
    // Discount 10% from 105000 = 10500
    expect(result.discountAmount).toBe(10500);
    // Total : 105000 - 10500 = 94500
    expect(result.total).toBe(94500);
  });

  // CASE 3 : Empty Cart
  it("must return 0 (zero) if cart is empty", () => {
    const result = calculateCart([]);

    expect(result.total).toBe(0);
  });
});
