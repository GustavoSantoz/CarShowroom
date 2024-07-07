import React, { useState } from 'react';
import CarList from '../components/CarList';
import CarGrid from '../components/CarGrid';
import CarModal from '../components/CarModal';
import { ButtonGroup, Button } from '@mui/material';

const Offers = () => {
    const [view, setView] = useState('grid');
    const [selectedCar, setSelectedCar] = useState(null);
    const [cars, setCars] = useState([
        // Exemplo de dados de carros
        {
            id: 1,
            photo: 'https://via.placeholder.com/150',
            photos: ['https://via.placeholder.com/150', 'https://via.placeholder.com/150'],
            price: 'R$ 50.000',
            brand: 'Marca A',
            model: 'Modelo A',
            year: 2020,
            color: 'Preto',
            plate: 'ABC-1234',
            city: 'Cidade A',
            mileage: '10.000 km',
            registrationDate: '01/01/2021',
            views: 0
        },
        // Adicione mais carros conforme necessário
    ]);

    const handleCardClick = (car) => {
        setSelectedCar(car);
        setCars(cars.map(c => c.id === car.id ? { ...c, views: c.views + 1 } : c));
    }

    const handleCloseModal = () => {
        setSelectedCar(null);
    }

    return (
        <div className="container mx-auto p-4">
            <ButtonGroup variant="contained" aria-label="outlined primary button group" className='gap-[6px]'>
                <Button onClick={() => setView('grid')}>Grade</Button>
                <Button onClick={() => setView('list')}>Lista</Button>
                <Button
                    variant="contained"
                    color="secondary"
                    href='home'
                >
                    Voltar para a Home
                </Button>
            </ButtonGroup>
            {view === 'grid' ? (
                <CarGrid cars={cars} onCardClick={handleCardClick} />
            ) : (
                <CarList cars={cars} onCardClick={handleCardClick} />
            )}
            {selectedCar && (
                <CarModal car={selectedCar} open={true} onClose={handleCloseModal} />
            )}
        </div>
    );
}

export default Offers;
