import classes from './CartItem.module.css';

import { addItem, subtractItem } from '../../store/slice/cartSlice';
import { useDispatch } from 'react-redux';

export default function CartItem({ items }) {
  const dispatch = useDispatch();

  const addItemHandler = (id) => {
    const itemIndex = items.findIndex((item) => item.id === id);
    dispatch(addItem(items[itemIndex]));
  };

  const substractItemHandler = (id) => {
    const itemIndex = items.findIndex((item) => item.id === id);
    dispatch(subtractItem(items[itemIndex]));
  };

  return (
    <>
      {items.map((item) => (
        <li className={classes.item} key={item?.id}>
          <header>
            <h3>{item?.title}</h3>
            <div className={classes.price}>
              ${item?.subtotal.toFixed(2)}{' '}
              <span className={classes.itemprice}>
                (${item?.price.toFixed(2)}/item)
              </span>
            </div>
          </header>
          <div className={classes.details}>
            <div className={classes.quantity}>
              x <span>{item?.quantity}</span>
            </div>
            <div className={classes.actions}>
              <button onClick={() => substractItemHandler(item?.id)}>-</button>
              <button onClick={() => addItemHandler(item?.id)}>+</button>
            </div>
          </div>
        </li>
      ))}
    </>
  );
}
