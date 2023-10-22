import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCT = [
  {
    id: 'ip15pm',
    title: 'iPhone 15 Pro Max',
    price: 1199,
    description: 'Apple Product',
  },
  {
    id: 's23+',
    title: 'Samsung S23+',
    price: 799.99,
    description: 'Samsung Product',
  },
];

export default function Products(props) {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCT.map((item) => (
          <ProductItem
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            description={item.description}
          />
        ))}
      </ul>
    </section>
  );
}
