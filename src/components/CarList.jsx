import React from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';

const CarList = ({ cars, onCardClick }) => {
  return (
    <div>
      {cars.map((car) => (
        <Card key={car.id} onClick={() => onCardClick(car)} className="cursor-pointer mb-4">
          <CardActionArea>
            <div className="flex">
              <CardMedia
                component="img"
                height="140"
                image={car.photos}
                alt={car.model}
              />
              <CardContent className="flex-1">
                <Typography gutterBottom variant="h6" component="div">
                  {car.brand} - {car.model}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Ano: {car.year}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Preço: R$ {car.price}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Localização: {car.city}
                </Typography>
              </CardContent>
            </div>
          </CardActionArea>
        </Card>
      ))}
    </div>
  );
};

export default CarList;
