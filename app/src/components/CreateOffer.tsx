import React, { useState } from 'react';

const CreateOffer = () => {
  const [token, setToken] = useState('');
  const [amount, setAmount] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Oferta criada: ${amount} ${token} por ${price} USDT`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Criar Nova Oferta</h2>
      <input placeholder="Token" value={token} onChange={(e) => setToken(e.target.value)} />
      <input placeholder="Quantidade" value={amount} onChange={(e) => setAmount(e.target.value)} />
      <input placeholder="Preço (USDT)" value={price} onChange={(e) => setPrice(e.target.value)} />
      <button type="submit">Criar</button>
    </form>
  );
};

export default CreateOffer;
