import { ProductList } from '../components/ProductList';
import { getProducts } from '../FakeAPI';

export const Products = () => {
  const products = getProducts();
  return (
    <main>
      <ProductList products={products} />
    </main>
  );
};
