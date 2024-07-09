import React from 'react';
import { Modal, Box, Typography, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

function CarModal({ car, open, onClose }) {
    if (!car) return null;

    // Função para verificar e formatar as fotos
    const renderPhotos = () => {
        if (!car.photos) return null;

        // Se 'photos' for uma string (URL única), converta para um array
        const photosArray = typeof car.photos === 'string' ? [car.photos] : car.photos;

        return (
            <div className="flex space-x-4 mt-4">
                {photosArray.map((photo, index) => (
                    <img
                        key={index}
                        src={photo}
                        alt={`Foto ${index + 1}`}
                        className="max-w-full h-auto"
                    />
                ))}
            </div>
        );
    };

    return (
        <Modal open={open} onClose={onClose}>
            <Box className="bg-white p-4 rounded shadow-lg max-w-md mx-auto mt-20">
                <IconButton
                    aria-label="Fechar"
                    onClick={onClose}
                    className="absolute top-2 right-2"
                >
                    <CloseIcon />
                </IconButton>
                <Typography variant="h5" gutterBottom>
                    Detalhes do Carro
                </Typography>
                <Typography variant="body1" gutterBottom>
                    Marca: {car.brand}
                </Typography>
                <Typography variant="body1" gutterBottom>
                    Modelo: {car.model}
                </Typography>
                <Typography variant="body1" gutterBottom>
                    Ano: {car.year}
                </Typography>
                <Typography variant="body1" gutterBottom>
                    Preço: {car.price}
                </Typography>
                <Typography variant="body1" gutterBottom>
                    Cor: {car.color}
                </Typography>
                <Typography variant="body1" gutterBottom>
                    Quilometragem: {car.mileage}
                </Typography>
                <Typography variant="body1" gutterBottom>
                    Placa: {car.licensePlate}
                </Typography>
                <Typography variant="body1" gutterBottom>
                    Cidade: {car.city}
                </Typography>
                <Typography variant="body1" gutterBottom>
                    Data de Cadastro: {car.date}
                </Typography>
                {renderPhotos()}
            </Box>
        </Modal>
    );
}

export default CarModal;
