import React from 'react';
import { Button } from '@mui/material';

function OfferTable({ offers, onEditOffer, onDeleteOffer }) {

  const handleEditClick = (index) => {
    // Chame a função de edição passando o índice ou a oferta diretamente
    onEditOffer(index);
  };

  const handleDeleteClick = (index) => {
    // Chame a função de exclusão passando o índice
    onDeleteOffer(index);
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Marca</th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Modelo</th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ano</th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Preço</th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cor</th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quilometragem</th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Placa</th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cidade</th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Data de Cadastro</th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ações</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {Array.isArray(offers) && offers.map((offer, index) => (
            <tr key={index} className="bg-white">
              <td className="px-4 py-4 whitespace-nowrap">{offer.brand}</td>
              <td className="px-4 py-4 whitespace-nowrap">{offer.model}</td>
              <td className="px-4 py-4 whitespace-nowrap">{offer.year}</td>
              <td className="px-4 py-4 whitespace-nowrap">{offer.price}</td>
              <td className="px-4 py-4 whitespace-nowrap">{offer.color}</td>
              <td className="px-4 py-4 whitespace-nowrap">{offer.mileage}</td>
              <td className="px-4 py-4 whitespace-nowrap">{offer.licensePlate}</td>
              <td className="px-4 py-4 whitespace-nowrap">{offer.city}</td>
              <td className="px-4 py-4 whitespace-nowrap">{offer.date}</td>
              <td className="px-4 py-4 whitespace-nowrap">
                <Button variant="contained" color="secondary" size="small" onClick={() => handleEditClick(index)}>Editar</Button>
                <Button variant="contained" color="error" size="small" onClick={() => handleDeleteClick(index)}>Excluir</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default OfferTable;
