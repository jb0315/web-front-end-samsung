import { useCart } from '../../contents/cart';
import CartTotal from './CartTotal';

function CartFooter({ ...restProps }) {
  const { totalPrice } = useCart();

  return (
    <footer {...restProps}>
      <CartTotal>{ totalPrice }</CartTotal>
    </footer>
  );
}

export default CartFooter;
