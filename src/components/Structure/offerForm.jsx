import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';

function OfferForm({ onAddOffer }) {
    const [offer, setOffer] = useState({
        brand: '',
        model: '',
        year: '',
        price: '',
        color: '',
        mileage: '',
        licensePlate: '',
        city: '',
        date: '',
        photos: [],
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setOffer({ ...offer, [name]: value });
    };

    const handleFileChange = (e) => {
        // Convertendo os URLs das imagens em um array
        const files = Array.from(e.target.files);
        const photos = files.map(file => URL.createObjectURL(file));
        setOffer({ ...offer, photos });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Criando o objeto no formato esperado
        const newOffer = {
            id: Math.floor(Math.random() * 1000) + 1, // Gerando um ID aleatório (simulação)
            brand: offer.brand,
            model: offer.model,
            year: parseInt(offer.year),
            price: `R$ ${offer.price}`,
            color: offer.color,
            mileage: `${offer.mileage} km`,
            licensePlate: offer.licensePlate,
            city: offer.city,
            date: offer.date,
            photos: offer.photos,
        };

        // Chamando a função externa para adicionar a oferta
        onAddOffer(newOffer);

        // Resetando o estado do formulário
        setOffer({
            brand: '',
            model: '',
            year: '',
            price: '',
            color: '',
            mileage: '',
            licensePlate: '',
            city: '',
            date: '',
            photos: [],
        });
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <TextField
                name="brand"
                label="Marca"
                fullWidth
                margin="normal"
                value={offer.brand}
                onChange={handleChange}
                required
            />
            <TextField
                name="model"
                label="Modelo"
                fullWidth
                margin="normal"
                value={offer.model}
                onChange={handleChange}
                required
            />
            <TextField
                name="year"
                label="Ano"
                type="number"
                fullWidth
                margin="normal"
                value={offer.year}
                onChange={handleChange}
                required
            />
            <TextField
                name="price"
                label="Preço"
                fullWidth
                margin="normal"
                value={offer.price}
                onChange={handleChange}
                required
            />
            <TextField
                name="color"
                label="Cor"
                fullWidth
                margin="normal"
                value={offer.color}
                onChange={handleChange}
                required
            />
            <TextField
                name="mileage"
                label="Quilometragem"
                fullWidth
                margin="normal"
                value={offer.mileage}
                onChange={handleChange}
                required
            />
            <TextField
                name="licensePlate"
                label="Placa"
                fullWidth
                margin="normal"
                value={offer.licensePlate}
                onChange={handleChange}
                required
            />
            <TextField
                name="city"
                label="Cidade"
                fullWidth
                margin="normal"
                value={offer.city}
                onChange={handleChange}
                required
            />
            <TextField
                name="date"
                label="Data de Cadastro"
                type="date"
                fullWidth
                margin="normal"
                value={offer.date}
                onChange={handleChange}
                required
            />
            <input
                type="text"
                name="photos"
                onChange={handleFileChange}
                placeholder="URL das Imagens"
                className="w-full p-2 mb-4 border rounded"
                required
            />
            <Button type="submit" variant="contained" color="primary">
                Salvar Oferta
            </Button>
        </form>
    );
}

export default OfferForm;
