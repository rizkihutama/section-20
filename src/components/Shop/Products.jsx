import ProductItem from './ProductItem';
import classes from './Products.module.css';

export default function Products(props) {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        <ProductItem
          id='ip15pm'
          title='iPhone 15 Pro Max'
          price={1199}
          description='Apple Product'
        />
        <ProductItem
          id='s23+'
          title='Samsung S23+'
          price={799.99}
          description='Samsung Product'
        />
      </ul>
    </section>
  );
}
