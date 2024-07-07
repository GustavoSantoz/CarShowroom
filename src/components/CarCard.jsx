import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';

const CarCard = ({ car, onClick }) => {
  return (
    <Card className="m-4" onClick={onClick}>
      <CardMedia
        component="img"
        height="140"
        image={car.photo}
        alt={car.model}
      />
      <CardContent>
        <Typography variant="h5" component="div">
          {car.brand} {car.model}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Ano: {car.year}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Preço: {car.price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Visualizações: {car.views}
        </Typography>
      </CardContent>
      <Button size="small">Ver Detalhes</Button>
    </Card>
  );
}

export default CarCard;
