import Card from '../UI/Card';
import classes from './ProductItem.module.css';

import { useDispatch } from 'react-redux';
import { addItem } from '../../store/slice/cartSlice';

export default function ProductItem(props) {
  const { title, price, description } = props;

  const dispacth = useDispatch();

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={() => dispacth(addItem(props))}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
}
