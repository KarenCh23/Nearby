import { useAppDispatch, useAppSelector } from '../../hooks/customHooks';
import { actionFetchProductsSheet } from '../../../store/thunks/product';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ProductSheet.scss';
import { Avatar, CardHeader } from '@mui/material';
import React from 'react';

const ProductSheet = () => {
  const { id } = useParams();

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(actionFetchProductsSheet(id));
  }, []);

  const product = useAppSelector((state) => state.productListReducer.detail);

  if (!product) {
    return <div>toto</div>;
  }

  return (
    <main>
      <section className="main__container">
        <div className="productSheet">
          <div className="productSheet__picture">
            <img
              src={`https://nearbyfiles.s3.eu-west-3.amazonaws.com/products/${product.picture}`}
              alt="product picture"
            />
          </div>
          <div className="productSheet__content">
            <h2>{product.name}</h2>
            <CardHeader
              className="card__avatar__product"
              avatar={<Avatar alt="Productrice" src={product.user.picture} />}
              title={product.user.lastname + ' ' + product.user.firstname}
            />
            <hr />
            <p className="description__item__product">{product.description}</p>
            <div className="price__item__product">
              <span className="price__item">Prix : {product.price} €</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProductSheet;
