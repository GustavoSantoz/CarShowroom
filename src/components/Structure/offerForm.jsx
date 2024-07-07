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
        setOffer({ ...offer, photos: e.target.files });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddOffer(offer);
    };

    return (
        <form onSubmit={handleSubmit}>
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
                type="number"
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
                type="file"
                name="photos"
                multiple
                onChange={handleFileChange}
                required
            />
            <Button type="submit" variant="contained" color="primary">
                Salvar Oferta
            </Button>
        </form>
    );
}

export default OfferForm;
