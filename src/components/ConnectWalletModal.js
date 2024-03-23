import React, { useState } from 'react';
import '../App.css'; // Import CSS for styling

function WalletConnectModal() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      {/* Button to open modal */}
      <button onClick={openModal}>Connect Wallet</button>
      
      {/* Wallet connect modal */}
      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <h2>Choose a Wallet to Connect</h2>
            <ul>
              <li>Metamask</li>
              <li>TrustWallet</li>
              <li>Bybit</li>
              <li>Concordium</li>
              <li>Empowered</li>
              <li>Phantom</li>
              {/* Add more wallet options as needed */}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default WalletConnectModal;