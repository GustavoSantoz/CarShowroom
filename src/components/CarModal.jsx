import React from 'react';
import { Modal, Box, Typography, Grid } from '@mui/material';

const CarModal = ({ car, open, onClose }) => {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {car.brand} {car.model}
        </Typography>
        <Grid container spacing={2}>
          {car.photos.map((photo, index) => (
            <Grid item xs={6} key={index}>
              <img src={photo} alt={`${car.model} ${index}`} width="100%" />
            </Grid>
          ))}
        </Grid>
        <Typography variant="body2" color="text.secondary">
          Preço: {car.price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Ano: {car.year}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Cor: {car.color}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Placa: {car.plate}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Cidade: {car.city}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Quilometragem: {car.mileage}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Data de Cadastro: {car.registrationDate}
        </Typography>
      </Box>
    </Modal>
  );
}

export default CarModal;
