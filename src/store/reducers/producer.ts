import { Producer, ProducerSlider } from '../../@types/producer';
import {
  actionFetchProducer,
  actionSliderProducer,
  getProducerData,
} from '../thunks/producer';
import { createReducer } from '@reduxjs/toolkit';
import { setCurrentProducerId } from '../actions/actions';

interface initialState {
  producerId: number | null;
  listProducer: Producer[];
  sliderProducer: ProducerSlider[];
  producerData: {
    lastname: string;
    firstname: string;
    email: string;
    phone: string | null;
    password: string;
    description: string | null;
    role: [string];
    picture: string;
    house_number: string;
    street: string | null;
    postal_code: string;
    region: string;
    country: string | null;
    siren: string | null;
    city: string | null;
    products: [];
  };
}

const initialState: initialState = {
  producerId: null,
  listProducer: [],
  sliderProducer: [],
  producerData: {
    lastname: '',
    firstname: '',
    email: '',
    phone: '',
    password: '',
    description: '',
    role: [''],
    picture: '',
    house_number: '',
    street: '',
    postal_code: '',
    region: '',
    country: '',
    siren: '',
    city: '',
    products: [],
  },
};

const producerListReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(actionFetchProducer.fulfilled, (state, action) => {
      state.listProducer = action.payload;
    })
    .addCase(actionSliderProducer.fulfilled, (state, action) => {
      state.sliderProducer = action.payload;
    })
    .addCase(setCurrentProducerId, (state, action) => {
      state.producerId = action.payload;
    })
    .addCase(getProducerData.fulfilled, (state, action) => {
      state.producerData = action.payload.producerData;
    });
});

export default producerListReducer;
