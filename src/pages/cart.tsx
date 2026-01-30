import {
  calculateCart,
  formatRupiah,
} from "../features/ShoppingCart/utils/cart";
import { CartView } from "../features/ShoppingCart/CartView";
import { useCart } from "../features/ShoppingCart/hooks/useCart";

export const ShoppingPage = () => {
  const stateCart = useCart();

  const summary = calculateCart(stateCart.items);

  return (
    <CartView {...stateCart} formatRupiah={formatRupiah} summary={summary} />
  );
};
