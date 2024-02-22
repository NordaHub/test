import React from 'react';

const NewsModal = ({ onClose }) => {
  return (
    <div className="news-modal-overlay"> 
      <div className="news-modal">          

        <div className="header-container">
          {/* News Section 1 */}
          <div className="news-section">
            <h2>BETA Release Of NordaHub Quiz App</h2>         <button className="close-button" onClick={onClose}>
            X
          </button>
            <img
    src="https://media.discordapp.net/attachments/972039284410449920/1210024450959872061/asdasd.png?ex=65e90e16&is=65d69916&hm=3ba64dab59f4aa5b6d6f5165aab7e42b5247884320791cd46fc353773d932bcd&=&format=webp&quality=lossless&width=598&height=141"
    alt="News Image 1"
    className="news-image"
    style={{ width: '75vh', height: '15vh' }} // Adjust the width and height here
  />
  <p>
            Introducing NordaHub Beta: Your Gateway to Crypto Learning and Earning!<p> Embark on a revolutionary journey into the world of cryptocurrency with NordaHub Beta,</p>
            <p>our cutting-edge Learn-to-Earn decentralized application (DApp). Designed to empower users with both</p> knowledge and tangible rewards, NordaHub Beta is your passport to unlocking the full potential of blockchain technology.</p>
         </div>
          {/* Section Divider */}
          <hr className="section-divider" />
          {/* News Section 2 */}
          <div className="news-section">
            <h2></h2>
            <img
              src=""
              alt=""
              className="news-image"
            />
            </div>
          {/* ... other news sections ... */}

        </div>
      </div>
    </div>
  );
};

export default NewsModal;