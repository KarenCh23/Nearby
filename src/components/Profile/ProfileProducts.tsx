import '../Profile/ProfileProducts.scss';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useAppDispatch } from '../hooks/customHooks';
import MakerProducts from './MakerProducts/MakerProducts';
import AddProductForm from '../Form/AddProductForm/AddProductForm';
import { getUserData } from '../../store/thunks/user';

const ProfileProducts = () => {
  const dispatch = useAppDispatch();
  const [openAddForm, setOpenAddForm] = useState(false);

  useEffect(() => {
    dispatch(getUserData());
    return () => {
      <MakerProducts />;
    };
  });

  return (
    <main className="main_content">
      <section className="profile__section">
        <div className="profile__products__buttons">
          <NavLink to="/profil" className="profile__button">
            Mon profil
          </NavLink>

          <NavLink to="/profil/mes-produits" className="profile__button">
            Mes produits
          </NavLink>
          <NavLink
            to=""
            className="profile__button create__produ"
            onClick={() => setOpenAddForm(true)}
          >
            Créer un produit
          </NavLink>
        </div>
        {openAddForm ? (
          <AddProductForm setOpenAddForm={setOpenAddForm} />
        ) : (
          <>
            <h2 className="productsList__title">Mes produits</h2>
            <section className="products__section">
              <MakerProducts />
            </section>
          </>
        )}
      </section>
    </main>
  );
};

export default ProfileProducts;
