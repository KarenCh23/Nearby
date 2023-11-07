import Slider from 'infinite-react-carousel'; // yarn add infinite-react-carousel
import './Carousel.scss'
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/customHooks';
import { actionSliderProducer } from '../../store/thunks/producer';
import React from 'react';
import { Link } from 'react-router-dom';
import { setCurrentProducerId } from '../../store/actions/actions';

const Carousel = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(actionSliderProducer());
  }, []);

  const producerSlider = useAppSelector(
    (state) => state.producerListReducer.sliderProducer
  );
  
  return (
  <Slider dots>    
    {producerSlider.map((producer, key) => {
    return(
      
      <div key={key}>
        <div className="slider_content">
          <div className="slider__producer">
              <img  
                src={`https://nearbyfiles.s3.eu-west-3.amazonaws.com/users/${producer.picture}`}
                alt="" 
              />
              <Link 
                key={producer.id} 
                to={`/producteur/${producer.firstname}-${producer.lastname}`} 
                onClick={() => {
                  dispatch(setCurrentProducerId(producer.id));
                }}>
                  <h2>{producer.lastname} {producer.firstname}</h2>
              </Link>
            <h4>Region : {producer.region}</h4>
          </div>
          <div className="slider__product">

          
            {producer.product.map((product, key) => (
              <div className="slider__product__item" key={key}>
                <div className="slider__product__image">
                <Link key={product.id} to={`/produits/${product.id}`}>
                  <img
                  key={product.id} 
                  className="image__product"
                  src={`https://nearbyfiles.s3.eu-west-3.amazonaws.com/products/${product.picture}`}
                  alt="Photo Producteur"
                  /> 
                  </Link>
                </div>
                <div className="slider__product__content">
                  <h3>{product.name}</h3>
                  <span className='slider__product__content__description'>{product.description}</span>
                  <span className='slider__product__content__price'>Prix : {product.price} € Kilo</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div> 
      )
    })} 
  </Slider>
  );
};

export default Carousel;