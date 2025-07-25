import React from 'react';
import { useWallet } from '@solana/wallet-adapter-react';

const RegisterWallet = () => {
  const { publicKey } = useWallet();

  return (
    <div>
      <h3>Minha Wallet</h3>
      {publicKey ? (
        <p>Registrada: {publicKey.toBase58()}</p>
      ) : (
        <p>Conecte sua wallet para registrar</p>
      )}
    </div>
  );
};

export default RegisterWallet;
