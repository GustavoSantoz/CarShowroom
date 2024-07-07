import React from 'react';
import CarCard from './CarCard';

const CarList = ({ cars, onCardClick }) => {
  return (
    <div className="flex flex-col items-center">
      {cars.map((car) => (
        <CarCard key={car.id} car={car} onClick={() => onCardClick(car)} />
      ))}
    </div>
  );
}

export default CarList;
