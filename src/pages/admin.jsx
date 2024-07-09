import React, { useState, useEffect } from 'react';
import axios from 'axios';
import OfferTable from '../components/Structure/offersTable';
import OfferForm from '../components/Structure/offerForm';
import { Button, Modal, Box } from '@mui/material';

const API_URL = 'https://json-server-vercel-git-main-pascal-project.vercel.app';

function AdminPage() {
  const [offers, setOffers] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetchOffers();
  }, []);

  const fetchOffers = async () => {
    try {
      const response = await axios.get(`${API_URL}/offers`);
      setOffers(response.data);
    } catch (error) {
      console.error('Erro ao buscar ofertas:', error);
    }
  };

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleAddOffer = async (newOffer) => {
    try {
      // Verifique se 'photos' é uma string (URL) e converta para um array de strings, se necessário
      const photosArray = typeof newOffer.photos === 'string' ? [newOffer.photos] : newOffer.photos;

      const response = await axios.post(`${API_URL}/offers`, {
        ...newOffer,
        photos: photosArray
      });

      setOffers([...offers, response.data]);
      handleCloseModal();
    } catch (error) {
      console.error('Erro ao adicionar oferta:', error);
    }
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
      <Button
        variant="contained"
        color="secondary"
        onClick={() => window.location.href = '/home'}
      >
        Voltar para a Home
      </Button>
    </div>
  );
}

export default AdminPage;
