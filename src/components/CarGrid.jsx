import React from 'react';
import CarCard from './CarCard';

const CarGrid = ({ cars, onCardClick }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {cars.map((car) => (
        <CarCard key={car.id} car={car} onClick={() => onCardClick(car)} />
      ))}
    </div>
  );
}

export default CarGrid;
