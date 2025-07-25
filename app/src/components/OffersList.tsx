import React, { useState } from 'react';

const mockOffers = [
  { id: 1, token: 'USDC', amount: 100, price: 1.00 },
  { id: 2, token: 'SOL', amount: 10, price: 23.45 }
];

const OffersList = () => {
  const [offers] = useState(mockOffers);

  const handleAccept = (id: number) => {
    alert(`Oferta ${id} aceita`);
  };

  return (
    <div>
      <h2>Ofertas Disponíveis</h2>
      <ul>
        {offers.map((offer) => (
          <li key={offer.id}>
            {offer.amount} {offer.token} por {offer.price} USDT -
            <button onClick={() => handleAccept(offer.id)}>Aceitar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OffersList;
