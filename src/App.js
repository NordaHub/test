import React, { useState, useEffect } from 'react';
import './App.css';
import logo from './images/Nordahub_logo.svg';
import middleLogo from './images/Nordahub_logo_white.svg';
import FAQModal from './components/FAQModal.js'
import QuizModal0 from './components/QuizModal0.js'; 
import QuizModal from './components/QuizModal.js'; 
import QuizModal2 from './components/QuizModal2.js'; 
import Spacer from './Spacer.js';
import NewsModal from './components/NewsModal.js'
import QuizModalETH from './components/QuizmodalETH.js'
import QuizModalETH2 from './components/QuizmodalETH2.js'
import QuizModalsolar from './components/QuizModalsolar.js'
import QuizModalBybit from './components/QuizModalBybit.js';
import QuizModalBybit2 from './components/QuizModalBybit2.js';
import BybitSVG from './images/bybit-seeklogo.svg'; 
import concordiumsvg from './images/Concordium-Logo-White.svg';
import solanasvg from './images/solanaLogo.svg';
import Polygonsvg from './images/Polygon_Logo.svg';
import BSCsvg from './images/Binance_logo.svg';
import ConnectWalletModal from './components/ConnectWalletModal.js';


function ScrollingAd() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const intervalTime = 150000; // 15 seconds in milliseconds
  
  useEffect(() => {
    const adImages = document.querySelectorAll("./images.");
  
    const showNextImage = () => {
      adImages[currentImageIndex].style.display = "none";
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % adImages.length);
      adImages[currentImageIndex].style.display = "block";
    };
  
    // Show the first image initially
    adImages[0].style.display = "block";
  
     // Set interval to switch images
    const interval = setInterval(showNextImage, intervalTime);
  
    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, [currentImageIndex]); // Re-run effect when currentImageIndex changes
}


const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedContent, setSelectedContent] = useState("");
  const [isMetamaskConnected, setIsMetamaskConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState('');
  const [ethBalance, setEthBalance] = useState(0);
  const [walletValueInEuro, setWalletValueInEuro] = useState(0);
  const [activeButton, setActiveButton] = useState(null);
  const [ConnectWalletModalOpen, setConnectWalletModalOpen] = useState(false);

  const [quizModalOpen, setQuizModalOpen] = useState(false);
  const [quizModal0Open, setQuizModal0Open] = useState(false);
  const [quizModal2Open, setQuizModal2Open] = useState(false);

  const [quizModalETHOpen, setQuizModalETHOpen] = useState(false);
  const [quizModalETH2Open, setQuizModalETH2Open] = useState(false);

  const [quizModalBybitOpen, setQuizModalBybitOpen] = useState(false);
  const [quizModalBybit2Open, setQuizModalEBybit2Open] = useState(false);

  const [quizModalsolarOpen, setQuizModalsolarOpen] = useState(false);
  

  const [NewsModalOpen, setNewsModalOpen] = useState(false);
  const [FAQModalOpen, setFAQModalOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMenuButtonClick = (buttonId) => {
    setActiveButton(buttonId);
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


  const openQuizModalBybit = () => {
    setQuizModalBybitOpen(true);
  };
  const closeQuizModalBybit = () => {
    setQuizModalBybitOpen(false);
  };
  const openQuizModalBybit2 = () => {
    setQuizModalBybitOpen(true);
  };
  const closeQuizModalBybit2 = () => {
    setQuizModalBybitOpen(false);
  };

  const openConnectWalletModal = () => {
    setConnectWalletModalOpen(true);
  };
  const closeConnectWalletModal = () => {
    setConnectWalletModalOpen(false);
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
  const handleReset = () => {
    // Reload the entire app
    window.location.reload();
  };
  useEffect(() => {
    const menuButtons = document.querySelectorAll('.menu-button');
    const menu = document.querySelector('.menu');
  
    // Add event listener to each menu button
    menuButtons.forEach(menuButton => {
      menuButton.addEventListener('click', () => {
        // Toggle the 'open' class on the menu to show/hide it
        menu.classList.toggle('open');
  
        // Close the menu if it's already open on mobile
        if (window.matchMedia("(max-width: 800px)").matches && menu.classList.contains('open')) {
          menu.classList.remove('open');
        }
      });
    });
  }, []);

  return (
   <div className="app"> 
      <body> 
        <div class="scrollbarbs"> 
      <main> 
<header className="header">
<div className="left-section fackdiv">
  <div className="logo-container">
    <button className="clickable-button2" onClick={openNewsModal}>
      News
    </button>
    <button className="clickable-button2" onClick={openFAQModal}>
      FAQ
    </button>
  </div>
</div>

<button className="middle-section fackdiv" onClick={handleReset} style={{ background: 'transparent', border: 'none' }}>
        <div className="logotop">
          <img src={middleLogo} alt="middelogo" />
        </div>
      </button>

<div className="right-section fackdiv">
  <div className="headermenu">
    <div className="menu-tab" onClick={toggleMenu}>
      ☰
    </div>
  </div>
</div>
</header>
        <div className="wallet-info-section">
        <button className="clickable-button" onClick={openConnectWalletModal}>
            Connect Wallet
          </button>
        </div>
             <div className={`menu ${menuOpen ? 'open' : ''}`}>
          <div className="menu-header">
            <span className="menu-header-text">Blockchains</span>
          </div>
          <div className="menu-content">
  {/* Buttons with images */}
<button
  className={`menu-button ${activeButton === "Category 5" ? "active" : ""}`}
  onClick={() => handleCategorySelect("Category 5")}
>
  <img
    src="https://cdn.discordapp.com/attachments/972039284410449920/1220005689766838333/bybit_menu.png?ex=660d5dd7&is=65fae8d7&hm=d2d4c862631f5a9cc07a5a44c542c226163946b422c5db7172a3768f0e2ef2b6&"
    alt="Bybit"
  />
</button>
<button
  className={`menu-button ${activeButton === "Category 2" ? "active" : ""}`}
  onClick={() => handleCategorySelect("Category 2")}
>
  <img
    src="https://cdn.discordapp.com/attachments/972039284410449920/1220005029939773510/erc20_menu.png?ex=660d5d39&is=65fae839&hm=502741cd002d3ccc52ff65cd6b944efff4b26ce4336f81e9950b24cef5d12431&"
    alt="Ethereum"
  />
</button>
<button
  className={`menu-button ${activeButton === "Category 3" ? "active" : ""}`}
  onClick={() => handleCategorySelect("Category 3")}
>
  <img
    src="https://cdn.discordapp.com/attachments/972039284410449920/1220005047635804221/bsc_menu.png?ex=660d5d3d&is=65fae83d&hm=0504d89947b1d4f8f28537df8e2091b1f84f0cdf7b52d074869525be45722902&"
    alt="BSC"
  />
</button>
<button
  className={`menu-button ${activeButton === "Category 4" ? "active" : ""}`}
  onClick={() => handleCategorySelect("Category 4")}
>
  <img
    src="https://cdn.discordapp.com/attachments/972039284410449920/1220004997534715966/polygon_menu.png?ex=660d5d32&is=65fae832&hm=86a565631cc71d12f53b41bb4cb6c5bb9f8bf89794579aca60d0ed0a0e270a61&"
    alt="Polygon"
  />
</button>
<button
  className={`menu-button ${activeButton === "Category 6" ? "active" : ""}`}
  onClick={() => handleCategorySelect("Category 6")}
>
  <img
    src="https://cdn.discordapp.com/attachments/972039284410449920/1215709106137075753/solana_menu_2.png?ex=65fdbc55&is=65eb4755&hm=8b4d6d31b783d5f1e5f51c0917817a4963b53922dcca48f049abf41076d8cb33&"
    alt="solana"
  />
</button>
<button
  className={`menu-button ${activeButton === "Category 1" ? "active" : ""}`}
  onClick={() => handleCategorySelect("Category 1")}
>
  <img
    src="https://cdn.discordapp.com/attachments/972039284410449920/1220005061271228476/concordium_menu.png?ex=660d5d41&is=65fae841&hm=ddb7f88d71b01b6dc91b4c1c56c6e2821bab117a8124d17fef8f0a6afbc4f585&"
    alt="Concordium"
  />
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
        <div classname="cyka">
        <div className="dividerbox">
           <div className="dividercontent">
              <h2 className="section-header">-</h2>
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
                <img className="object-image" src="https://cdn.discordapp.com/attachments/972039284410449920/1220007547562623098/Nordahub_logo_white.png?ex=660d5f91&is=65faea91&hm=a42b501f95cb66449d31a21b07b706a2270feccd6c8336acfe082c9f51213277&" alt="Object Image" />
              </div>
            </div>
          </div>
          <button className="clickable-button" onClick={openQuizModal0}>
            Start Quiz
          </button>
          <div className='Rewardsleft'>
            <p>Rewards Left NaN/NaN</p>
          </div>
          <div class="MM">
          <img src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*jD8cypcmNwnzAZjI0y_lIg.png" alt="Metamask Icon" />
          </div>
          </div></div>

        <div className="body-content">
          {/* Render different content based on selectedContent */}
          {selectedContent === "Category 1" && (
            <div>
          <div className="dividerbox">
           <div className="dividercontent">
              <h2 className="section-header"><img src={concordiumsvg} alt="concoarduim" width="400" height="200" /></h2>
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
                <img className="object-image" src="https://media.discordapp.net/attachments/972039284410449920/1202257028417065020/bc41c6caba1ab416c7f42a6f8b2b725c.png?ex=65f1b61c&is=65df411c&hm=64558ad3cd6f3fb6d745aebf33adaabd58d32c7bd76645d3ca9d8c83434c7229&=&format=webp&quality=lossless&width=1200&height=675" alt="Object Image" />
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
                <img className="object-image" src="https://cdn.discordapp.com/attachments/972039284410449920/1220005455745777714/ETH_logo_white.png?ex=660d5d9f&is=65fae89f&hm=ed53552702a4da0d6808dcd32df8ae46dd151585793f396d42c6dc5aca41dc70&" alt="Object Image" />
              </div>
            </div>
          </div>
          <button className="clickable-button" onClick={openQuizModalETH}>
          Start Quiz
          </button>
          <div className='Rewardsleft'>
            <p>Rewards Left NaN/NaN</p>
          </div>
          <div class="MM">
          <img src="https://cdn.discordapp.com/attachments/810276022980444200/1211420551252545637/metamask.png?ex=65ee224e&is=65dbad4e&hm=fa9c5ae67d2d19b17736fff9f5646a0dbb7c31adb3350f03d78ea28d28877ece&" alt="Metamask Icon" />
          </div>
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
                <img className="object-image" src="https://cdn.discordapp.com/attachments/972039284410449920/1220005492940603452/opensea.png?ex=660d5da8&is=65fae8a8&hm=7543c05160a4dfb561355346df0405c17a37d7b91a93e189596c63d7001ad360&" alt="Object Image" />
              </div>
            </div>
          </div>
          <button className="clickable-button" onClick={openQuizModalETH2}>
            Start Quiz
          </button>
          <div className='Rewardsleft'>
            <p>Rewards Left NaN/NaN</p>
          </div>
          <div class="MM">
          <img src="https://cdn.discordapp.com/attachments/810276022980444200/1211420551252545637/metamask.png?ex=65ee224e&is=65dbad4e&hm=fa9c5ae67d2d19b17736fff9f5646a0dbb7c31adb3350f03d78ea28d28877ece&" alt="Metamask Icon" />
          </div>
        </div>
      </div>
      <div className="ad-container">
      <div className="ad-card">
        <div className="ad-header">
          <h3>Advertisement</h3>
        </div>
        <div className="ad-content">
          <img src="image1.jpg" alt="Ad Image 1" />
          <img src="image2.jpg" alt="Ad Image 2" />
          {/* Add more images as needed */}
        </div>
      </div>
    </div></div>
          )}
          {selectedContent === "Category 3" && (
             <div className="dividerbox">
             <div className="dividercontent">
             <img src={BSCsvg} alt="BSC" width="200" height="50" />
             </div>
             <div className="Quizmenu">
        <div className="quizlist">
          <h2>What is BSC</h2>
          <div className="quizintro">
            <div className="text-box">
              <div className="object-details">
                <p>
              BSC QUIZ1 INFO </p>
              </div>
            </div>
            <div className="image-container">
              <div className="image-inner-container">
                <img className="object-image" src="" alt="Object Image" />
              </div>
            </div>
          </div>
          <button className="clickable-button" onClick={openQuizModalETH}>
          Start Quiz
          </button>
          <div className='Rewardsleft'>
            <p>Rewards Left NaN/NaN</p>
          </div>
          <div class="MM">
          <img src="https://cdn.discordapp.com/attachments/810276022980444200/1211420551252545637/metamask.png?ex=65ee224e&is=65dbad4e&hm=fa9c5ae67d2d19b17736fff9f5646a0dbb7c31adb3350f03d78ea28d28877ece&" alt="Metamask Icon" />
          </div>
        </div>
        <div className="quizlist">
          <h2>BSC 2</h2>
          <div className="quizintro">
            <div className="text-box">
              <div className="object-details">
                <p>
                BSC QUIZ 2 INFO</p>
              </div>
            </div>
            <div className="image-container">
              <div className="image-inner-container">
                <img className="object-image" src="" alt="Object Image" />
              </div>
            </div>
          </div>
          <button className="clickable-button" onClick={openQuizModalETH2}>
            Start Quiz
          </button>
          <div className='Rewardsleft'>
            <p>Rewards Left NaN/NaN</p>
          </div>
          <div class="MM">
          <img src="https://cdn.discordapp.com/attachments/810276022980444200/1211420551252545637/metamask.png?ex=65ee224e&is=65dbad4e&hm=fa9c5ae67d2d19b17736fff9f5646a0dbb7c31adb3350f03d78ea28d28877ece&" alt="Metamask Icon" />
          </div>
        </div>
      </div>
      <div className="ad-container">
      <div className="ad-card">
        <div className="ad-header">
          <h3>Advertisement</h3>
        </div>
        <div class="ad-content">
    <img src="https://cdn.discordapp.com/attachments/972039284410449920/1213950315435659264/ad_banner_2.png?ex=65f75655&is=65e4e155&hm=7ed8ae28b3c4102e65b7755e07492a1f994c8530e555c71a12f8eaca340a6015&." alt="Ad 1"></img>
    <img src="./images/ad2.png" alt="Ad 2"></img>
    <img src="./images/ad3.png" alt="Ad 3"></img>
    </div>
      </div>
    </div>
      </div>

          )}
          {/* Add more conditional rendering for additional categories */}
        </div>
      <div>
          {selectedContent === "Category 4" && (
            <div>
          <div className="dividerbox">
           <div className="dividercontent">
           <img src={Polygonsvg} alt="Poly" width="3000" height="100" />
           </div>
          </div>
            </div>
          )}
    </div>
          {selectedContent === "Category 5" && (
            <div>        
          <div className="dividerbox">
           <div className="dividercontent">
           <img src={BybitSVG} alt="Bybit" width="200" height="50" />
           </div>
          </div>
              {/* Content for Category 5 */}
              <div className="Quizmenu">
        <div className="quizlist">
        <div>
        <h2>Welcome To Bybit</h2>
      </div>
          <div className="quizintro">
            <div className="text-box">
              <div className="object-details">
                <p>
                
       
       Learn The Basics! In this brief test, you'll uncover the essentials about Bybit, a prominent cryptocurrency derivatives exchange. 
        Learn who Bybit is, their role in the crypto trading landscape, and the basic features they offer. Whether you're a novice or seasoned trader, 
        this quiz will provide valuable insights into Bybit's platform and its significance in the world of digital assets. Let's dive in and explore the foundations of Bybit together!
                </p>
              </div>
            </div>
            <div className="image-container">
              <div className="image-inner-container">
                <img className="object-image" src="https://cdn.discordapp.com/attachments/972039284410449920/1213137908513644606/1650621936697-88a6b23b-f1cd-4c5f-a7f5-9940a10acbf0.jpg?ex=65f461b8&is=65e1ecb8&hm=a993aac1e3c8eadfb7bcec19dbfe1691e74af888952652a9a448babb09439699&" alt="Object Image" />
              </div>
            </div>
          </div>
          <button className="clickable-button" onClick={openQuizModalBybit}>
          Watch Intro video
          </button>
        </div>
        <div className="quizlist">
          <h2>Learn The Basics</h2>
          <div className="quizintro">
            <div className="text-box">
              <div className="object-details">
                <p>
                CardInfo
                </p>
              </div>
            </div>
            <div className="image-container">
              <div className="image-inner-container">
                <img className="object-image" src="img" alt="Object Image" />
              </div>
            </div>
          </div>
          <button className="clickable-button" onClick={openQuizModalBybit2}>
            Start Quiz
          </button>
        </div>
        </div>
        <div className="quizlist">
          <h2>Trading</h2>
          <div className="quizintro">
            <div className="text-box">
              <div className="object-details">
                <p>
                CardInfo
                </p>
              </div>
            </div>
            <div className="image-container">
              <div className="image-inner-container">
                <img className="object-image" src="img" alt="Object Image" />
              </div>
            </div>
          </div>
          <button className="clickable-button" onClick={openQuizModalBybit2}>
            Start Quiz
          </button>
          </div>
        <div className="quizlist">
          <h2>Interactive Task Quiz 1</h2>
          <div className="quizintro">
            <div className="text-box">
              <div className="object-details">
                <p>
                CardInfo
                </p>
              </div>
            </div>
            <div className="image-container">
              <div className="image-inner-container">
                <img className="object-image" src="img" alt="Object Image" />
              </div>
            </div>
          </div>
          <button className="clickable-button" onClick={openQuizModalBybit2}>
            Start Quiz
          </button>
      </div>
      </div>
          )}
          {/* Add more conditional rendering for additional categories */}
        </div>
        {selectedContent === "Category 6" && (
            <div>
          <div className="dividerbox">
           <div className="dividercontent">
           <img src={solanasvg} alt="Solana" width="3000" height="100" />
           </div>
          </div>
            </div>
          )}
    </main>
      <Spacer height="500px" />
      <footer className="footer">
      <div className="footer-content">
        <div className="fackdiv"></div>
        <div className="footer-text fackdiv">
          <p>Powered by FNX.<img src="https://cdn.discordapp.com/attachments/972039284410449920/1220005080519016478/FNX.png?ex=660d5d45&is=65fae845&hm=6a8fec2a9c48743407218faed40dffec19b97934a53da0e07b99b8ad4a34bcae&" alt="FNX" /></p>
        </div>
            
        <div className="footer-copyright fackdiv">
          <p>&copy; 2024 NordaHub AB. All rights reserved.</p>
        </div>
      </div>
    </footer>
    </div>
    </body>
      {NewsModalOpen && <NewsModal onClose={closeNewsModal} />}
      {FAQModalOpen && <FAQModal onClose={closeFAQModal} />}
      {quizModal0Open && <QuizModal0 onClose={closeQuizModal0} />}
      {quizModalOpen && <QuizModal onClose={closeQuizModal} />}
      {quizModal2Open && <QuizModal2 onClose={closeQuizModal2} />}
      {quizModalETHOpen && <QuizModalETH onClose={closeQuizModalETH} />}
      {quizModalETH2Open && <QuizModalETH2 onClose={closeQuizModalETH2} />}
      {quizModalsolarOpen && <QuizModalsolar onClose={closeQuizModalsolar} />}
      {quizModalBybitOpen && <QuizModalBybit onClose={closeQuizModalBybit} />}
      {quizModalBybit2Open && <QuizModalBybit2 onClose={closeQuizModalBybit2} />}
      {ConnectWalletModalOpen && <ConnectWalletModal onClose={closeConnectWalletModal} />}
    </div>
  );
};

export default App;