import React from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';

const CarGrid = ({ cars, onCardClick }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {cars.map((car) => (
                <Card key={car.id} onClick={() => onCardClick(car)} className="cursor-pointer">
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image={car.photos}
                            alt={car.model}
                        />
                        <CardContent>
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
                    </CardActionArea>
                </Card>
            ))}
        </div>
    );
};

export default CarGrid;
