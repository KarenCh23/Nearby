import Product from '../../Products/Product/Product';
import { Products } from '../../../../src/@types/product';
import { useAppSelector } from '../../hooks/customHooks';
import '../ProducerProducts/ProducerProducts.scss';
import { Link } from 'react-router-dom';

const ProducerProducts = () => {
  const producerData = useAppSelector(
    (state) => state.producerListReducer.producerData
  );
  const { products } = producerData;

  return (
    <main className="main__content__maker__products">
      <h2 className="productsList__title">Nos produits</h2>
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
                  picture={product.picture}
                  price={product.price}
                  weight={product.weight}
                  isMakerProducts={true}
                />
              </div>
            </article>
          );
        })}
      </section>
      <div className="return__button__div">
        <Link
          to={`/producteur/${producerData.firstname}${producerData.lastname}`}
          className="return__button"
        >
          Retour
        </Link>
      </div>
    </main>
  );
};

export default ProducerProducts;
