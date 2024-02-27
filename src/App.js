import React, { useState, useEffect } from 'react';
import './App.css';
import logo from './logo.png';
import FAQModal from './FAQModal.js'
import QuizModal0 from './QuizModal0.js'; 
import QuizModal from './QuizModal.js'; 
import QuizModal2 from './QuizModal2.js'; 
import Spacer from './Spacer.js';
import NewsModal from './NewsModal.js'
import QuizModalETH from './QuizmodalETH.js'
import QuizModalETH2 from './QuizmodalETH2.js'
import QuizModalsolar from './QuizModalsolar.js'



const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedContent, setSelectedContent] = useState("");
  const [isMetamaskConnected, setIsMetamaskConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState('');
  const [ethBalance, setEthBalance] = useState(0);
  const [walletValueInEuro, setWalletValueInEuro] = useState(0);

  const [quizModalOpen, setQuizModalOpen] = useState(false);
  const [quizModal0Open, setQuizModal0Open] = useState(false);
  const [quizModal2Open, setQuizModal2Open] = useState(false);

  const [quizModalETHOpen, setQuizModalETHOpen] = useState(false);
  const [quizModalETH2Open, setQuizModalETH2Open] = useState(false);

  const [quizModalsolarOpen, setQuizModalsolarOpen] = useState(false);

  const [NewsModalOpen, setNewsModalOpen] = useState(false);
  const [FAQModalOpen, setFAQModalOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const connectMetamask = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setIsMetamaskConnected(true);
        setWalletAddress(accounts[0]);
      } catch (error) {
        console.error('Metamask connection error:', error);
      }
    }
  };

  const handleCategorySelect = (content) => {
    setSelectedContent(content);
  };
  const openQuizModalsolar = () => {
    setQuizModalsolarOpen(true);
  };
  const closeQuizModalsolar = () => {
    setQuizModalsolarOpen(false);
  };
  const openQuizModal0 = () => {
    setQuizModal0Open(true);
  };
  const closeQuizModal0 = () => {
    setQuizModal0Open(false);
  };
  
  const openQuizModal = () => {
    setQuizModalOpen(true);
  };
  const closeQuizModal = () => {
    setQuizModalOpen(false);
  };
  
  const openQuizModal2 = () => {
    setQuizModal2Open(true);
  };
  const closeQuizModal2 = () => {
    setQuizModal2Open(false);
  };
  
  const openQuizModalETH = () => {
    setQuizModalETHOpen(true);
  };
  const closeQuizModalETH = () => {
    setQuizModalETHOpen(false);
  };
  
  const openQuizModalETH2 = () => {
    setQuizModalETH2Open(true);
  };
  const closeQuizModalETH2 = () => {
    setQuizModalETH2Open(false);
  };

  const openNewsModal = () => {
    setNewsModalOpen(true);
  };
  
  const openFAQModal = () => {
    setFAQModalOpen(true);
  };
  
  const closeNewsModal = () => {
    setNewsModalOpen(false);
  };
  
  const closeFAQModal = () => {
    setFAQModalOpen(false);
  };
  useEffect(() => {
    const fetchWalletData = async () => {
      // Fetch additional wallet data here (ETH balance, wallet value in Euro, etc.)
      // For demonstration, let's assume these values are obtained somehow.
    };

    if (isMetamaskConnected) {
      fetchWalletData();
    }
  }, [isMetamaskConnected]);

  const disconnectMetamask = () => {
    setIsMetamaskConnected(false);
    setWalletAddress('');
    console.log('Metamask disconnected!');
  };

  return (
   
   <div className="app">
      <body> <main> 
      <header className="header">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
          <button className="clickable-button2" onClick={openNewsModal}>
            News</button>
          <button className="clickable-button2" onClick={openFAQModal}>
            FAQ</button>
        </div>
        <div className='logomiddle'>
          <div className='logotop'><img src="https://media.discordapp.net/attachments/972039284410449920/1210024450959872061/asdasd.png?ex=65e90e16&is=65d69916&hm=3ba64dab59f4aa5b6d6f5165aab7e42b5247884320791cd46fc353773d932bcd&=&format=webp&quality=lossless&width=598&height=141" alt="middelogo" ></img>
          </div>
        </div>
        <div className="menu-tab" onClick={toggleMenu}>
          ☰
        </div>

      </header>
        <div className="wallet-info-section">
          {isMetamaskConnected && (
            <div>
              <div className="connected-wallet">
                Connected Wallet: <span>{walletAddress}</span>
              </div>
              <div>
                ETH Balance: <span>{ethBalance} ETH</span>
              </div>
              <div>
                Wallet Value (Euro): <span>{walletValueInEuro} Euro</span>
              </div>
            </div>
          )}
        <div className="wallet-connect-button" onClick={isMetamaskConnected ? disconnectMetamask : connectMetamask}>
          {isMetamaskConnected ? 'Disconnect Wallet' : 'Connect Wallet'}
        </div>
        </div>
             <div className={`menu ${menuOpen ? 'open' : ''}`}>
          <div className="menu-header">
            <span className="menu-header-text">Blockchains</span>
          </div>
          <div className="menu-content">
  {/* Buttons with images */}
        <button className="menu-button" onClick={() => handleCategorySelect("Category 2")}>
          <img src="https://cdn.discordapp.com/attachments/1144987172487835678/1211417097888989194/erc20_menu.png?ex=65ee1f17&is=65dbaa17&hm=cff9ccfab5bc046142e9d49b144ad9091fd459226c9730b093d91b1dd044b8cd&" alt="Ethereum" />
        </button>
        <button className="menu-button" onClick={() => handleCategorySelect("Category 3")}>
          <img src="https://cdn.discordapp.com/attachments/1144987172487835678/1211417432816615485/bsc_menu.png?ex=65ee1f67&is=65dbaa67&hm=73d43f6494c1692d3d292ac3be46bdf0ddd870b9f3cbce9ec6c69454648faa9a&" alt="BSC" />
        </button>
        <button className="menu-button" onClick={() => handleCategorySelect("Category 4")}>
          <img src="https://cdn.discordapp.com/attachments/1144987172487835678/1211417387933503488/polygon_menu.png?ex=65ee1f5c&is=65dbaa5c&hm=9fb33895749378cf635b03d1f240ec16d428853f478149d5f7e25dec72231eba&" alt="Polygon" />
        </button>
        <button className="menu-button" onClick={() => handleCategorySelect("Category 1")}>
          <img src="https://cdn.discordapp.com/attachments/1144987172487835678/1211417401489625148/concordium_menu.png?ex=65ee1f5f&is=65dbaa5f&hm=10575811523b1d59bd33c6ebea73e0a955f9b650d9dcfac835719f5f98817dc2&" alt="Concordium" />
        </button>
        </div>
          <div className="close-menu-tab" onClick={toggleMenu}> 
          </div>
          {menuOpen && (
            <div className="banner">
              <img src="./banner.png" alt="Advertisement Banner" />
            </div>
          )}
        </div>
        <div className="dividerbox">
           <div className="dividercontent">
              <h2 className="section-header">Inhouse Quizzes</h2>
           </div>
          </div>
        <div className="Quizmenu">
        <div className="quizlist">
          <h2>Welcome To NordaHub L2E Beta</h2>
          <div className="quizintro">
            <div className="text-box">
              <div className="object-details">
                <p>

                This quiz aims to provide foundational knowledge to kickstart your journey into the realm of cryptocurrency. It serves as a stepping stone, offering essential insights before delving into the intricacies of various blockchain technologies. By understanding these basics, you'll be better equipped to explore the diverse landscape of blockchain systems and their applications.
                
                </p>
              </div>
            </div>
            <div className="image-container">
              <div className="image-inner-container">
                <img className="object-image" src="https://cdn.discordapp.com/attachments/972039284410449920/1210024450959872061/asdasd.png?ex=65e90e16&is=65d69916&hm=3ba64dab59f4aa5b6d6f5165aab7e42b5247884320791cd46fc353773d932bcd&" alt="Object Image" />
              </div>
            </div>
          </div>
          <button className="clickable-button" onClick={openQuizModal0}>
            Start Quiz
          </button><div class="MM">
          <img src="https://cdn.discordapp.com/attachments/810276022980444200/1211420551252545637/metamask.png?ex=65ee224e&is=65dbad4e&hm=fa9c5ae67d2d19b17736fff9f5646a0dbb7c31adb3350f03d78ea28d28877ece&" alt="Metamask Icon" />
          </div>
          </div></div>

        <div className="body-content">
          {/* Render different content based on selectedContent */}
          {selectedContent === "Category 1" && (
            <div>
          <div className="dividerbox">
           <div className="dividercontent">
              <h2 className="section-header">Concordium Quizzes</h2>
           </div>
          </div>

              {/* Content for Category 1 */}
      <div className="Quizmenu">
        <div className="quizlist">
          <h2>What is Concordium</h2>
          <div className="quizintro">
            <div className="text-box">
              <div className="object-details">
                <p>
                  Learn the fundamentals and explore the unique features of Concordium. 
                  Understand how it stands out in the crypto space. This card contains 
                  more text to demonstrate the increased size.
                </p>
              </div>
            </div>
            <div className="image-container">
              <div className="image-inner-container">
                <img className="object-image" src="https://cdn.discordapp.com/attachments/972039284410449920/1202254040248094771/maxresdefault.png?ex=65ccc953&is=65ba5453&hm=2497a9f1fc9ca23970e2526bad7af59e7fb3b489cd1a3f0d2add33bfa5b1d9bd&" alt="Object Image" />
              </div>
            </div>
          </div>
          <button className="clickable-button" onClick={openQuizModal}>
            Start Quiz
          </button>
        </div>
      </div>
      </div>
          )}
          {selectedContent === "Category 2" && (
            <div>        
          <div className="dividerbox">
           <div className="dividercontent">
              <h2 className="section-header">Ethereum Quizzes</h2>
           </div>
          </div>
              {/* Content for Category 2 */}
              <div className="Quizmenu">
        <div className="quizlist">
          <h2>What is Ethereum</h2>
          <div className="quizintro">
            <div className="text-box">
              <div className="object-details">
                <p>
                Welcome to the quiz on the basics of the ERC20 Blockchain, also known as Ethereum! Before you start, let's see how well you understand this fundamental concept in blockchain technology. This quiz will cover various aspects of ERC20 tokens, Ethereum smart contracts, and related concepts. There will be multiple-choice questions designed to test your understanding.
                </p>
              </div>
            </div>
            <div className="image-container">
              <div className="image-inner-container">
                <img className="object-image" src="https://cdn.discordapp.com/attachments/810276022980444200/1210007616684556368/images.png?ex=65e8fe68&is=65d68968&hm=ef798b610fb30de874dfb9ea16f3e3ceb50c1173544086f70c6bbb89ddd40555&" alt="Object Image" />
              </div>
            </div>
          </div>
          <button className="clickable-button" onClick={openQuizModalETH}>
          Start Quiz
          </button>
        </div>
        <div className="quizlist">
          <h2>OpenSea</h2>
          <div className="quizintro">
            <div className="text-box">
              <div className="object-details">
                <p>
                OpenSea is the leading decentralized marketplace for NFTs (non-fungible tokens),
                enabling users to buy, sell, and trade digital assets such as artwork, collectibles,
                and virtual real estate across various blockchain networks. It provides a seamless platform
                for creators and collectors to engage in the rapidly expanding world of digital ownership.
                </p>
              </div>
            </div>
            <div className="image-container">
              <div className="image-inner-container">
                <img className="object-image" src="https://media.discordapp.net/attachments/810276022980444200/1210007614419763221/1_ayHdl2UB47DgBrY6qwZW1g.png?ex=65e8fe68&is=65d68968&hm=052f0976fc0e26a3fe3eb710af2dfe4667b35f34046b1060535e135920ba5b6b&=&format=webp&quality=lossless&width=2100&height=973" alt="Object Image" />
              </div>
            </div>
          </div>
          <button className="clickable-button" onClick={openQuizModalETH2}>
            Start Quiz
          </button>
        </div>
      </div>
      </div>
          )}
          {selectedContent === "Category 3" && (
            <div>
              {/* Content for Category 3 */}
              <h1>Category 3 Content</h1>
              <p>This is the content for Category 3.</p>
            </div>
          )}
          {/* Add more conditional rendering for additional categories */}
        </div>
      <div>
          {selectedContent === "Category 4" && (
            <div>
              {/* Content for Category 3 */}
              <h1>Category 4 Content</h1>
              <p>This is the content for Category 3.</p>
            </div>
          )}
          {/* Add more conditional rendering for additional categories */}
        </div>
      </main>
      <Spacer height="500px" />
      <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          {/* Replace the src attribute with the path to your logo */}
          <img src={logo} alt="Logo" />
        </div>
        <div className="footer-text">
          <p>Powered by FNX.<img src="https://cdn.discordapp.com/attachments/972039284410449920/1204242416832348190/Project-Feenix-Logo-circle_500x500.png?ex=65e67a25&is=65d40525&hm=2f980c36b79152ddfdde6a57ac042e98dac374fa406f999bb796be3142cc7eca&" alt="FNX" /></p>
        </div>
        <div className="footer-copyright">
          <p>&copy; 2024 NordaHub AB. All rights reserved.</p>
        </div>
      </div>
    </footer></body>
      {NewsModalOpen && <NewsModal onClose={closeNewsModal} />}
      {FAQModalOpen && <FAQModal onClose={closeFAQModal} />}
      {quizModal0Open && <QuizModal0 onClose={closeQuizModal0} />}
      {quizModalOpen && <QuizModal onClose={closeQuizModal} />}
      {quizModal2Open && <QuizModal2 onClose={closeQuizModal2} />}
      {quizModalETHOpen && <QuizModalETH onClose={closeQuizModalETH} />}
      {quizModalETH2Open && <QuizModalETH2 onClose={closeQuizModalETH2} />}
      {quizModalsolarOpen && <QuizModalsolar onClose={closeQuizModalsolar} />}
    </div>
  );
};

export default App;
