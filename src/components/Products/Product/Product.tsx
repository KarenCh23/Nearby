import './Product.scss';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteIcon from '@mui/icons-material/Delete';
import { useAppDispatch, useAppSelector } from '../../hooks/customHooks';
import { Link } from 'react-router-dom';
import { deleteProduct } from '../../../utils/utils';
import { setCurrentProductId } from '../../../store/actions/actions';
import { FormEvent } from 'react';

interface ProductItem {
  name: string;
  description: string;
  pictureItem: string;
  picture: string;
  lastname: string;
  firstname: string;
  isMakerProducts: boolean;
  price: string | number;
  weight: string | number;
}

const Product = ({
  name,
  description,
  pictureItem,
  picture,
  lastname,
  firstname,
  isMakerProducts,
  price,
  weight,
}: ProductItem) => {
  const dispatch = useAppDispatch();

  const token = useAppSelector((state) => state.userReducer.token);

  const handleDelete = (event: FormEvent) => {
    const target = event.currentTarget;
    if (!target) return;

    const productId = target.closest('article')?.id;
    if (!productId) return;

    deleteProduct(parseInt(productId), token); // Conversion de string en number
  };

  const handleEdit = (event: FormEvent) => {
    const target = event.currentTarget;
    if (!target) return;

    const productId = target.closest('article')?.id;
    if (!productId) return;

    dispatch(setCurrentProductId(parseInt(productId))); // Conversion de string en number
  };

  return (
    <div className="full__card">
      <Card className="card__item__product" sx={{ maxWidth: 345 }}>
        {!isMakerProducts && (
          <CardHeader
            className="card__avatar__product"
            avatar={<Avatar alt="Productrice" src={picture} />}
            title={lastname + ' ' + firstname}
            subheader={name}
          />
        )}
        <CardMedia
          className="card__picture__product"
          component="img"
          height="194"
          image={pictureItem}
          alt="Paella dish"
        />
        <CardContent className="card__content__product">
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
        {isMakerProducts && (
          <>
            <p>{weight}kgs</p>
            <p>{price}€</p>

            <menu className="actions__product__btn">
              <Link
                to="/profil/mes-produits/modifier"
                className="edit__button"
                onClick={handleEdit}
              >
                <BorderColorIcon />
              </Link>
              <a className="delete__button" onClick={handleDelete}>
                <DeleteIcon />
              </a>
            </menu>
          </>
        )}
      </Card>
    </div>
  );
};

export default Product;
