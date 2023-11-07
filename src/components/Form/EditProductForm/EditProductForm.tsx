import { useForm, SubmitHandler } from 'react-hook-form';
import { editCurrentProduct } from '../../../utils/utils';
import { useAppDispatch, useAppSelector } from '../../hooks/customHooks';
import { actionFetchCategories } from '../../../store/thunks/category';
import { useEffect } from 'react';
import Checkbox from '../Checkbox/Checkbox';
import '../EditProductForm/EditProductForm.scss';
import { productData } from '../../../@types/product';

interface formatedCategory {
  id: number;
}

const preloadedValues = {
  id: undefined,
  name: '',
  price: 0,
  weight: 0,
  picture: '',
  description: '',
  category: {},
};

const EditProductForm = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.userReducer.user_id);
  const token = useAppSelector((state) => state.userReducer.token);

  const currentProductId = useAppSelector(
    (state) => state.productListReducer.currentProductId
  );

  console.log(currentProductId);

  const categories = useAppSelector(
    (state) => state.categoryReducer.categoriesList
  );

  useEffect(() => {
    dispatch(actionFetchCategories());
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<productData>(/* {
    defaultValues: preloadedValues,
  } */);
  const onSubmit: SubmitHandler<productData> = (data) => {
    if (currentProductId !== null) {
      const formatedSelectedCategories: formatedCategory[] = [];
      if (Array.isArray(data.category)) {
        data.category.forEach((id) => {
          if (typeof id === 'number' && id !== null) {
            const formatedCategory: formatedCategory = { id: id };
            formatedSelectedCategories.push(formatedCategory);
          }
        });
        data.category = formatedSelectedCategories;
        editCurrentProduct(currentProductId, token, data);
      } else {
        // Gérer le cas où data.category n'est pas de type tableau (ou est absent)
        console.error('Data.category doit être un tableau.');
      }
    } else {
      // Gérer le cas où currentProductId est null
      console.error('currentProductId ne peut pas être null.');
    }
  };

  return (
    <main>
      <section className="main__container">
        {/* Profile Buttons navigation to insert */}
        <h2 className="edit__form__title">Éditer un produit</h2>
        <form className="edit__product__form" onSubmit={handleSubmit(onSubmit)}>
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
            <button>Éditer</button>
          </div>
        </form>
      </section>
    </main>
  );
};

export default EditProductForm;
