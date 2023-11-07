import './App.scss';
import Header from '../Header/Header';
import Home from '../Home/Home';
import LegalNotices from '../LegalNotices/LegalNotices';
import PrivacyPolicy from '../PrivacyPolicy/PrivacyPolicy';
import Cgv from '../Cgv/Cgv';
import Faq from '../Faq/Faq';

import About from '../About/About';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Products from '../Products/Products';
import { Route, Routes } from 'react-router-dom';
import ProfileMaker from '../Profile/Profile';
import SigninForm from '../Form/SigninForm/SigninForm';
import useScrollToTop from '../hooks/useScrollToTop';
import { useAppSelector } from '../hooks/customHooks';
import Error from '../Error/Error';
import Producers from '../Producers/Producers';
import ProfileProducts from '../Profile/ProfileProducts';
import AddProductForm from '../Form/AddProductForm/AddProductForm';
import EditProductForm from '../Form/EditProductForm/EditProductForm';
import ProductSheet from '../Products/ProductSheet/ProductSheet';
import ProducerDetails from '../ProducerDetails/ProducerDetails';
import ProducerProducts from '../ProducerDetails/ProducerProducts/ProducerProducts';
import React from 'react';

function App() {
  const error = useAppSelector((state) => state.userReducer.error);
  const isLogged = useAppSelector((state) => state.userReducer.logged);
  useScrollToTop();

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inscription" element={<SigninForm />} />
        <Route path="/produits" element={<Products />} />
        <Route path="/produits/:id" element={<ProductSheet />} />
        <Route path="/producteurs" element={<Producers />} />
        <Route path="/a-propos" element={<About />} />
        <Route path="/producteur/:slug" element={<ProducerDetails />} />
        <Route
          path="/producteur/:slug/produits"
          element={<ProducerProducts />}
        />
        {isLogged && (
          <>
            <Route path="/profil" element={<ProfileMaker />} />
            <Route path="/profil/mes-produits" element={<ProfileProducts />} />
            <Route
              path="/profil/mes-produits/modifier"
              element={<EditProductForm />}
            />
            <Route path="/profil/modifier" element={<SigninForm />} />
          </>
        )}
        <Route path="/mentions-legales" element={<LegalNotices />} />
        <Route path="/cgu-cgv" element={<Cgv />} />
        <Route path="/faq" element={<Faq />} />

        <Route
          path="/politique-de-confidentialite"
          element={<PrivacyPolicy />}
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error error={error} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
