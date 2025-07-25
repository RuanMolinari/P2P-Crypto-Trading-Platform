import React from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletModalProvider, WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { PhantomWalletAdapter } from '@solana/wallet-adapter-wallets';
import CreateOffer from './components/CreateOffer';
import OffersList from './components/OffersList';
import RegisterWallet from './components/RegisterWallet';
import AdminDashboard from './components/AdminDashboard';

require('@solana/wallet-adapter-react-ui/styles.css');

const App = () => {
  const wallets = [new PhantomWalletAdapter()];

  return (
    <ConnectionProvider endpoint="https://api.devnet.solana.com">
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
          <div>
            <h1>Plataforma P2P Solana</h1>
            <WalletMultiButton />
            <RegisterWallet />
            <CreateOffer />
            <OffersList />
            <AdminDashboard />
          </div>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};

export default App;
