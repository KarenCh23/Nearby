import ImageUpload from '../../ImageUpload/ImageUpload';
import { useForm, SubmitHandler } from 'react-hook-form';
import { registerNewProduct } from '../../../utils/utils';
import { useAppDispatch, useAppSelector } from '../../hooks/customHooks';
import { actionFetchCategories } from '../../../store/thunks/category';
import { useEffect, useState } from 'react';

import Checkbox from '../Checkbox/Checkbox';
import '../AddProductForm/AddProductForm.scss';
import { productData } from '../../../@types/product';
import { getUserData } from '../../../store/thunks/user';

interface formatedCategory {
  id: number;
}

interface AddProductProps {
  setOpenAddForm: Function;
}

const preloadedValues = {
  id: '',
  name: '',
  price: 0,
  weight: 0,
  picture: '',
  description: '',
  category: [],
};

const AddProductForm = ({ setOpenAddForm }: AddProductProps) => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.userReducer.user_id);
  const token = useAppSelector((state) => state.userReducer.token);

  const categories = useAppSelector(
    (state) => state.categoryReducer.categoriesList
  );

  useEffect(() => {
    dispatch(actionFetchCategories());
  }, []);

  useEffect(() => {
    dispatch(getUserData);
  }, [setOpenAddForm]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<productData>();
  const onSubmit: SubmitHandler<productData> = (data) => {
    const formatedSelectedCategories: formatedCategory[] = [];
    data.category.map((id) => {
      const formatedCategory: formatedCategory = { id: parseInt(id) };
      formatedSelectedCategories.push(formatedCategory);
    });
    data.category = formatedSelectedCategories;
    registerNewProduct(data, token, user);
    setOpenAddForm(false);
  };

  return (
    <section className="main__container product__form">
      <div className="header__section"></div>
      <h2 className="add__form__title">Ajouter un produit</h2>
      <form className="add__product__form" onSubmit={handleSubmit(onSubmit)}>
        <fieldset className="form__card__wrapper">
          <div className="form__card">
            <input className="form__input" required {...register('name')} />
            <label className="form__label" htmlFor="name">
              Nom du produit
            </label>
          </div>
          <div className="form__card">
            <input className="form__input" required {...register('price')} />
            <label className="form__label" htmlFor="price">
              Prix
            </label>
          </div>

          <div className="form__card">
            <input className="form__input" required {...register('weight')} />
            <label className="form__label" htmlFor="weight">
              Poids
            </label>
          </div>
        </fieldset>

        <fieldset className="ford__card form__description__wrapper">
          <div className="form__card product__description">
            <textarea
              className="form__textarea  form__input description"
              placeholder="Description"
              rows={3}
              required
              {...register('description')}
            ></textarea>
          </div>
        </fieldset>

        <fieldset className="form__categories__wrapper">
          <legend>Choisissez une ou plusieurs catégories :</legend>
          {categories.map((category, key) => {
            return (
              <Checkbox id={key} category={category} register={register} />
            );
          })}
        </fieldset>
        <div className="btn__wrap">
          <button>Ajouter</button>
        </div>
      </form>
    </section>
  );
};

export default AddProductForm;
