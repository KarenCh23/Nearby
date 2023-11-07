import Producer from './Producer/Producer';
import './Producers.scss';
import { useAppDispatch, useAppSelector } from '../hooks/customHooks';
import { actionFetchProducer } from '../../store/thunks/producer';
import { FormEvent, useEffect, useState } from 'react';
import { BsFillGeoAltFill } from 'react-icons/bs';
import { AiOutlineSearch } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { setCurrentProducerId } from '../../store/actions/actions';
import React from 'react';

const Producers = () => {
  const [searchProducer, setSearchProducer] = useState('');
  const [searchRegion, setSearchRegion] = useState('');

  const dispatch = useAppDispatch();

  const producerList = useAppSelector(
    (state) => state.producerListReducer.listProducer
  );

  useEffect(() => {
    dispatch(actionFetchProducer());
  }, []);

  const handleSearchBarProducer = (event: FormEvent) => {
    let value = (event.target as HTMLInputElement).value;
    setSearchProducer(value);
  };
  const handleSearchBarRegion = (event: FormEvent) => {
    let value = (event.target as HTMLInputElement).value;
    setSearchRegion(value);
  };

  return (
    <main>
      <div className="header__searchBar__producer">
        <form action="">
          <div className="input__geo__producer">
            <BsFillGeoAltFill />
            <input
              type="text"
              placeholder="Chercher par région"
              onChange={handleSearchBarRegion}
            />
          </div>
          <div className="input__search__producer">
            <input
              type="text"
              placeholder="Chercher par mots-clés"
              onChange={handleSearchBarProducer}
            />
            <AiOutlineSearch />
          </div>
        </form>
      </div>
      <h1>Liste des Producteurs</h1>
      <div className="cards__producers">
        {producerList
          .filter((producer) => {
            return (
              producer.lastname &&
              producer.firstname
                .toLowerCase()
                .replace(/[\s-]/g, '')
                .includes(searchProducer.toLowerCase().replace(/[\s-]/g, '')) &&
              producer.region
                .toLowerCase()
                .replace(/[\s-]/g, '')
                .includes(searchRegion.toLowerCase().replace(/[\s-]/g, ''))
            );
          })
          .map((producer) => {
            return (
              <Link
                to={`/producteur/${producer.firstname}-${producer.lastname}`}
                className="card__producer"
                key={producer.id}
                onClick={() => {
                  dispatch(setCurrentProducerId(producer.id));
                }}
              >
                <Producer
                  key={producer.id}
                  picture={`https://nearbyfiles.s3.eu-west-3.amazonaws.com/users/${producer.picture}`}
                  firstname={producer.firstname}
                  lastname={producer.lastname}
                  region={producer.region}
                  city={producer.city}
                  description={producer.description}
                />
              </Link>
            );
          })}
      </div>
    </main>
  );
};

export default Producers;
