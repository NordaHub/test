import React from 'react';
import '../App.css'; // Import CSS for styling

const FAQModal = ({ onClose }) => {
  return (
    <div className="faq-modal-overlay">
      <div className="faq-modal">
        <div className="faq-header">
          <h2>Frequently Asked Questions</h2>
          <button className="close-button" onClick={onClose}>
            X
          </button>
        </div>
        <div className="faq-content">
          <div className="faq-section">
            <h3>What is NordaHub L2E?</h3>
            <p>NordaHub is a decentralized Quizplatform Where Learn to Earn </p>
          </div>
          <div className="faq-section">
            <h3>How do I get started?</h3>
            <p>To get started, you need to have a metamask wallet to be edgible for airdrop</p>
          </div>
          <div className="faq-section">
            <h3>Can I withdraw my earnings?</h3>
            <p>You Earning will be automaticly airdropped to you walletAddress</p>
          </div>
          {/* Add more FAQ sections as needed */}
        </div>
      </div>
    </div>
  );
};

export default FAQModal;