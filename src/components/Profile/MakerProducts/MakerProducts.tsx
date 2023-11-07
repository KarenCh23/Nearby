import Product from '../../Products/Product/Product';
import '../MakerProducts/MakerProducts.scss';
import { Products } from '../../../../src/@types/product';
import { useAppSelector } from '../../hooks/customHooks';

const MakerProducts = () => {
  const userData = useAppSelector((state) => state.userReducer.userData);
  const { products } = userData;
  return (
    <main className="main__content__maker__products">
      <section className="maker__products__list">
        {products.map((product: Products) => {
          return (
            <article className="product__item" id={product.id.toString()}>
              <div className="product__item__card">
                <Product
                  key={product.id}
                  name={product.name}
                  description={product.description}
                  lastname="toto"
                  firstname="lulu"
                  pictureItem={`https://nearbyfiles.s3.eu-west-3.amazonaws.com/products/${product.picture}`}
                  picture=""
                  price={product.price}
                  weight={product.weight}
                  isMakerProducts={true}
                />
              </div>
            </article>
          );
        })}
      </section>
    </main>
  );
};

export default MakerProducts;
