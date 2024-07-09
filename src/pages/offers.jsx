import React, { useState, useEffect } from 'react';
import CarList from '../components/CarList';
import CarGrid from '../components/CarGrid';
import CarModal from '../components/CarModal';
import { ButtonGroup, Button } from '@mui/material';
import axios from 'axios';

const Offers = () => {
    const [view, setView] = useState('grid');
    const [selectedCar, setSelectedCar] = useState(null);
    const [cars, setCars] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCars = async () => {
            try {
                const response = await axios.get('https://json-server-vercel-git-main-pascal-project.vercel.app/offers');
                if (Array.isArray(response.data)) {
                    setCars(response.data);
                } else {
                    console.error('A resposta da API não é um array:', response.data);
                    setError('A resposta da API não é válida.');
                }
            } catch (error) {
                console.error('Erro ao buscar dados da API', error);
                setError('Erro ao buscar dados da API.');
            }
        };

        fetchCars();
    }, []);

    const handleCardClick = (car) => {
        setSelectedCar(car);
        // Atualizar as visualizações do carro (opcional)
        setCars(cars.map(c => c.id === car.id ? { ...c, views: c.views + 1 } : c));
    };

    const handleCloseModal = () => {
        setSelectedCar(null);
    };

    return (
        <div className="container mx-auto p-4">
            {error && <p className="text-red-500">{error}</p>}
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
};

export default Offers;
