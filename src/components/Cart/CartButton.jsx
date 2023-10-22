import classes from './CartButton.module.css';

import { useSelector, useDispatch } from 'react-redux';
import { toggleShowCart } from '../../store/slice/showCartSlice';

export default function CartButton(props) {
  const cartItems = useSelector((state) => state.cart.items);

  const dispatch = useDispatch();

  return (
    <button
      className={classes.button}
      onClick={() => dispatch(toggleShowCart())}
    >
      <span>My Cart</span>
      <span className={classes.badge}>{cartItems.length}</span>
    </button>
  );
}
