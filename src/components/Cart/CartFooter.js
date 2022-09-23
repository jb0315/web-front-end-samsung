import { useCart } from '../../contents/cart';
import CartTotal from './CartTotal';

function CartFooter({ ...restProps }) {
  const { total } = useCart();

  return (
    <footer {...restProps}>
      <CartTotal>{ total }</CartTotal>
    </footer>
  );
}

export default CartFooter;
