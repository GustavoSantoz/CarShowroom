import React, { useState, useEffect } from 'react';
import axios from 'axios';
import OfferTable from '../components/Structure/offersTable';
import OfferForm from '../components/Structure/offerForm';
import { Button, Modal, Box } from '@mui/material';
import Navbar from '../components/Structure/navbar';

const API_URL = 'https://json-server-vercel-git-main-pascal-project.vercel.app/api';

function AdminPage() {
  const [offers, setOffers] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOffer, setSelectedOffer] = useState(null); // Estado para armazenar a oferta selecionada para edição

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
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedOffer(null); // Limpar a oferta selecionada ao fechar o modal
  };

  const handleEditOffer = (index) => {
    const offerToEdit = offers[index];
    setSelectedOffer(offerToEdit); // Define a oferta selecionada para edição
    handleOpenModal(); // Abre o modal de edição
  };

  const handleAddOffer = async (newOffer) => {
    try {
      const photosArray = typeof newOffer.photos === 'string' ? [newOffer.photos] : newOffer.photos;

      const response = await axios.post(`${API_URL}/offers`, {
        ...newOffer,
        photos: photosArray
      });

      setOffers([...offers, response.data]);
      fetchOffers(); // Atualiza a lista de ofertas após adicionar uma nova
      handleCloseModal(); // Fecha o modal após adicionar a nova oferta com sucesso
    } catch (error) {
      console.error('Erro ao adicionar oferta:', error);
    }
  };

  const handleUpdateOffer = async (updatedOfferData) => {
    try {
      const response = await axios.put(`${API_URL}/offers/${selectedOffer.id}`, updatedOfferData);

      // Atualiza o estado local com os dados da oferta editada
      const updatedOffers = offers.map(offer =>
        offer.id === selectedOffer.id ? response.data : offer
      );
      setOffers(updatedOffers);

      handleCloseModal(); // Fecha o modal após a edição
      console.log('Oferta editada com sucesso:', response.data);
    } catch (error) {
      console.error('Erro ao editar oferta:', error);
    }
  };

  const handleDeleteOffer = async (index) => {
    const offerToDelete = offers[index];

    try {
      await axios.delete(`${API_URL}/offers/${offerToDelete.id}`);

      const newOffers = offers.filter((offer, idx) => idx !== index);
      setOffers(newOffers);
    } catch (error) {
      console.error('Erro ao deletar oferta:', error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="p-8 mt-12">
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
        <OfferTable offers={offers} onEditOffer={handleEditOffer} onDeleteOffer={handleDeleteOffer} />
        <Modal open={isModalOpen} onClose={handleCloseModal}>
          <Box className="bg-white p-4 rounded shadow-lg max-w-md mx-auto mt-20">
            {selectedOffer ? (
              <OfferForm
                initialData={selectedOffer}
                onSubmit={handleUpdateOffer}
              />
            ) : (
              <OfferForm
                onAddOffer={handleAddOffer}
              />
            )}
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
    </>
  );
}

export default AdminPage;
