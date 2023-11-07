import './Home.scss';

import { BsArrowDownCircle, BsFillGeoAltFill } from 'react-icons/bs';
import { AiOutlineSearch } from 'react-icons/ai';
import { useState, useEffect, FormEvent, useRef } from 'react';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../hooks/customHooks';
import { setIsLoginForm } from '../../store/actions/actions';
import ArrowButton from '../ArrowButton/ArrowButton';
import Carousel from '../Carousel/Carousel';
import { actionSliderProducer } from '../../store/thunks/producer';
import { actionFetchLatestProduct } from '../../store/thunks/product';
import React from 'react';

const Home = () => {
  const [product, setProduct] = useState('');
  const [region, setRegion] = useState('');
  const [current, setCurrent] = useState(0);
  const isLogged = useAppSelector((state) => state.userReducer.logged);
  const navigate = useNavigate();

  // ? Arrow scroll to Section //
  const contentSection = useRef<HTMLDivElement | null>(null);

  const useScrollToSection = () => {
    window.scrollTo({
      top: contentSection.current?.offsetTop,
      behavior: 'smooth',
    });
  };

  // ? End-Arrow scroll to Section //

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setIsLoginForm(true));
  }, []);

  useEffect(() => {
    dispatch(actionSliderProducer());
    dispatch(actionFetchLatestProduct())
  },[]);

  const producerSlider = useAppSelector(
    (state) => state.producerListReducer.sliderProducer
  );

  const latestProduct = useAppSelector(
    (state) => state.productListReducer.list
  )

  const nextSlide = () => {
    // Function for next slide
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    // Function for previous slide
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(producerSlider) || producerSlider.length <= 0) {
    return null;
  }

  const length = producerSlider.length;

  const handleSearchBarKey = (event: FormEvent) => {
    let value = (event.target as HTMLInputElement).value;
    setProduct(value);
  };
  const handleSearchBarRegion = (event: FormEvent) => {
    let value = (event.target as HTMLInputElement).value;
    setRegion(value);
  };

  return (
    <main>
      <section className="main__header">
        <h1 className="nearby__title">Nearby</h1>
        <p className="nearby__slogan">
          Un Goût de Proximité :
          Votre Portail vers les Saveurs Locales !
        </p>
        <div>
          <form>
            <div className="input__geo__home">
              <BsFillGeoAltFill />
              <input
                type="text"
                placeholder="Chercher par région"
                onChange={handleSearchBarRegion}
              />
            </div>
            <div className="input__search__home">
              <input
                type="text"
                placeholder="Chercher par mots-clés"
                onChange={handleSearchBarKey}
              />
              <AiOutlineSearch />
            </div>
          </form>
          <button
            className="search__producer__btn"
            onClick={() => {
              navigate('/produits', {
                state: { product: product, region: region },
              });
            }}
          >
            Recherche ton produit
          </button>
        </div>
        {isLogged ? (
          ''
        ) : (
          <>
            <h2>Vous êtes producteur ?</h2>
            <ArrowButton />
          </>
        )}
        <BsArrowDownCircle
          className="icon__scroll"
          onClick={useScrollToSection}
        />
      </section>
      <section className="main__content">
        <div className="main__responsive" ref={contentSection}>
          <Carousel />
        </div>

        <div className="main__new__product">
          <h2>Nouveaux produits</h2>
          <div className="product__list__content">
          {latestProduct.map((product, key) => {
            return (
              <div className="product__list" key={key}>
              <Link key={product.id} to={`/produits/${product.id}`}>
              <img
                className="image__product"
                src={`https://nearbyfiles.s3.eu-west-3.amazonaws.com/products/${product.picture}`}
                alt={product.name}
              />
              </Link>
              <h4>{product.name}</h4>
            </div>
            )
          })}
          </div>
        </div>
      </section>
    </main>
  );
};
export default Home;
