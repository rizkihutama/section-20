import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';

import { useSelector } from 'react-redux/es/hooks/useSelector';

export default function App() {
  const showCart = useSelector((state) => state.cart.showCart);

  return (
    <Layout>
      {showCart ? (
        <>
          <Cart />
          <Products />
        </>
      ) : (
        <>
          <Products />
        </>
      )}
    </Layout>
  );
}
