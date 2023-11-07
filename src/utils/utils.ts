import axiosInstance from '../axios/axios';
import { user } from '../@types/user';
import { productData } from '../@types/product';

// User CRUD
export const registerNewUser = async (newUser: user) => {
  const { email, firstname, lastname, password, region, role } = newUser;
  console.log('données envoyées');
  await axiosInstance
    .post('api/register', {
      email,
      firstname,
      lastname,
      password,
      region,
      role: [role],
    })
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
};
export const editCurrentUser = async (
  user: user,
  user_id: number | null,
  token: string | null,
  email: string,
  role: [string],
  picture: string
) => {
  const {
    firstname,
    lastname,
    region,
    house_number,
    street,
    postal_code,
    city,
    country,
    description,
    phone,
  } = user;
  console.log('données envoyées');
  axiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
  await axiosInstance
    .patch('api/v1/users/' + user_id + '/edit', {
      firstname,
      lastname,
      region,
      house_number: parseInt(house_number),
      street,
      postal_code: parseInt(postal_code),
      city,
      country,
      description,
      phone: phone,
      id: user_id,
      email: email,
      role: [role],
      picture: picture,
    })
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
};
export const checkIsMaker = (role: [string]) => {
  if (role[0] === 'ROLE_MAKER') {
    return true;
  }
};

// Product CRUD

export const registerNewProduct = async (
  data: productData,
  token: string,
  user: number | null
) => {
  const { name, price, weight, picture, description, category } = data;
  console.log('données envoyées');
  axiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
  await axiosInstance
    .post('api/v1/products/add', {
      name,
      price: parseInt(price),
      weight: parseInt(weight),
      picture,
      description,
      categories: category,
    })
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const editCurrentProduct = async (
  id: number,
  token: string,
  data: productData
) => {
  console.log('édition produit');
  const { name, price, weight, description, picture, category } = data;
  axiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
  await axiosInstance
    .patch(`api/v1/products/${id}/edit`, {
      id,
      name,
      price: parseInt(price),
      weight: parseInt(weight),
      description,
      picture,
      categories: category,
    })
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const deleteProduct = (id: number, token: string) => {
  console.log('produit supprimé');
  axiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
  axiosInstance
    .delete(`api/v1/products/${id}/delete`)
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
};
