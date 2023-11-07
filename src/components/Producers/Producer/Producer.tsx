import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import './Producer.scss';

import { useAppDispatch } from '../../hooks/customHooks';
import React from 'react';

export interface ProducerItem {
  picture: string;
  lastname: string;
  firstname: string;
  region: string;
  city: string;
  description: string;
}

const Producer = ({
  picture,
  lastname,
  firstname,
  region,
  city,
  description,
}: ProducerItem) => {
  const dispatch = useAppDispatch();

  return (
    <Card className="card__item__producer" sx={{ maxWidth: 345 }}>
      <CardHeader
        className="card__avatar__producer"
        title={lastname + ' ' + firstname}
        subheader={region + ' : ' + city}
      />
      <CardMedia
        className="card__picture__producer"
        component="img"
        height="194"
        image={picture}
        alt="Paella dish"
      />
      <CardContent className="card__content__producer">
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Producer;
