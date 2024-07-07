import React, { useState } from 'react';
import OfferTable from '../components/Structure/offersTable';
import OfferForm from '../components/Structure/offerForm';
import { Button, Modal, Box } from '@mui/material';

function AdminPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [offers, setOffers] = useState([]);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleAddOffer = (newOffer) => {
    setOffers([...offers, newOffer]);
    handleCloseModal();
  };

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Administração de Ofertas</h1>
        <Button variant="contained" color="primary" onClick={handleOpenModal}>
          Adicionar Nova Oferta
        </Button>
      </div>
      <input
        type="text"
        className="w-full p-2 mb-4 border rounded"
        placeholder="Buscar ofertas..."
      />
      <OfferTable offers={offers} />
      <Modal open={isModalOpen} onClose={handleCloseModal}>
        <Box className="bg-white p-4 rounded shadow-lg max-w-md mx-auto mt-20">
          <OfferForm onAddOffer={handleAddOffer} />
        </Box>
      </Modal>
    </div>
  );
}

export default AdminPage;
