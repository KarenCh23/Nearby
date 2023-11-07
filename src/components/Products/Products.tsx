import { BsFillGeoAltFill } from 'react-icons/bs';
import { AiOutlineSearch } from 'react-icons/ai';
import Product from './Product/Product';
import './Products.scss';
import { FormEvent, useEffect, useState } from 'react';
import { actionFetchProducts } from '../../store/thunks/product';
import { useAppDispatch, useAppSelector } from '../hooks/customHooks';
import { Link, useLocation } from 'react-router-dom';
import React from 'react';

const Products = () => {
  const location = useLocation();

  const [searchProduct, setSearchProduct] = useState('');
  const [searchRegion, setSearchRegion] = useState('');

  const dispatch = useAppDispatch();

  const productList = useAppSelector((state) => state.productListReducer.list);

  useEffect(() => {
    if (location.state && location.state.product && location.state.region) {
      setSearchProduct(location.state.product),
        setSearchRegion(location.state.region);
    } else if (location.state && location.state.region) {
      setSearchRegion(location.state.region);
    } else if (location.state && location.state.product) {
      setSearchProduct(location.state.product);
    }
    dispatch(actionFetchProducts());
  }, []);

  const handleSearchBarProduct = (event: FormEvent) => {
    let value = (event.target as HTMLInputElement).value;
    setSearchProduct(value);
  };
  const handleSearchBarRegion = (event: FormEvent) => {
    let value = (event.target as HTMLInputElement).value;
    setSearchRegion(value);
  };

  return (
    <main>
      <div className="header__searchBar__product">
        <form action="">
          <div className="input__geo__product">
            <BsFillGeoAltFill />
            <input
              type="text"
              placeholder="Chercher par région"
              onChange={handleSearchBarRegion}
            />
          </div>
          <div className="input__search__product">
            <input
              type="text"
              placeholder="Chercher par mots-clés"
              onChange={handleSearchBarProduct}
            />
            <AiOutlineSearch />
          </div>
        </form>
      </div>
      <h1>Liste des Produits</h1>
      <section className="all__products">
        <div className="card__product">
          {productList
            .filter((products) => {
              return (
                products.name
                  .toLowerCase()
                  .replace(/[\s-]/g, '')
                  .includes(
                    searchProduct.toLowerCase().replace(/[\s-]/g, '')
                  ) &&
                products.user.region
                  .toLowerCase()
                  .replace(/[\s-]/g, '')
                  .includes(searchRegion.toLowerCase().replace(/[\s-]/g, ''))
              );
            })
            .map((products) => {
              return (
                <div className="product__item__card">
                  <Link key={products.id} to={`/produits/${products.id}`}>
                    <Product
                      key={products.id}
                      name={products.name}
                      //pictureItem={pictureData}
                      pictureItem={`https://nearbyfiles.s3.eu-west-3.amazonaws.com/products/${products.picture}`}
                      description={products.description}
                      picture={`https://nearbyfiles.s3.eu-west-3.amazonaws.com/users/${products.user.picture}`}
                      firstname={products.user.firstname}
                      lastname={products.user.lastname}
                      isMakerProducts={false}
                      price={products.price}
                      weight={products.weight}
                    />
                  </Link>
                </div>
              );
            })}
        </div>
      </section>
    </main>
  );
};

export default Products;
