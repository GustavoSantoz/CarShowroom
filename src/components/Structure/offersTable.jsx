import React from 'react';
import { Button } from '@mui/material';

function OfferTable({ offers }) {
  return (
    <table className="min-w-full bg-white border">
      <thead>
        <tr>
          <th className="px-4 py-2 border">Marca</th>
          <th className="px-4 py-2 border">Modelo</th>
          <th className="px-4 py-2 border">Ano</th>
          <th className="px-4 py-2 border">Preço</th>
          <th className="px-4 py-2 border">Cor</th>
          <th className="px-4 py-2 border">Quilometragem</th>
          <th className="px-4 py-2 border">Placa</th>
          <th className="px-4 py-2 border">Cidade</th>
          <th className="px-4 py-2 border">Data de Cadastro</th>
          <th className="px-4 py-2 border">Ações</th>
        </tr>
      </thead>
      <tbody>
        {offers.map((offer, index) => (
          <tr key={index}>
            <td className="px-4 py-2 border">{offer.brand}</td>
            <td className="px-4 py-2 border">{offer.model}</td>
            <td className="px-4 py-2 border">{offer.year}</td>
            <td className="px-4 py-2 border">{offer.price}</td>
            <td className="px-4 py-2 border">{offer.color}</td>
            <td className="px-4 py-2 border">{offer.mileage}</td>
            <td className="px-4 py-2 border">{offer.licensePlate}</td>
            <td className="px-4 py-2 border">{offer.city}</td>
            <td className="px-4 py-2 border">{offer.date}</td>
            <td className="px-4 py-2 border">
              <Button variant="contained" color="secondary" size="small">Editar</Button>
              <Button variant="contained" color="error" size="small">Excluir</Button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default OfferTable;
