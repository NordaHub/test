import React, { useState, useEffect } from 'react';
import './App.css';
import logo from './images/Nordahub_logo.svg';
import middleLogo from './images/Nordahub_logo_white.svg';
import FAQModal from './components/FAQModal.js';
import QuizModal0 from './components/QuizModal0.js'; 
import QuizModal from './components/QuizModal.js'; 
import QuizModal2 from './components/QuizModal2.js'; 
import Spacer from './Spacer.js';
import NewsModal from './components/NewsModal.js';
import QuizModalETH from './components/QuizmodalETH.js';
import QuizModalETH2 from './components/QuizmodalETH2.js';
import QuizModalsolar from './components/QuizModalsolar.js';
import QuizModalBybit from './components/QuizModalBybit.js';
import QuizModalBybit2 from './components/QuizModalBybit2.js';
import BybitSVG from './images/bybit-seeklogo.svg'; 
import ETHsvg from './images/ethereum-eth-logo-full-horizontal_white.svg'; 
import concordiumsvg from './images/Concordium-Logo-White.svg';
import solanasvg from './images/solanaLogo.svg';
import Polygonsvg from './images/Polygon_Logo.svg';
import BSCsvg from './images/Binance_logo.svg';
import ReadMore from './components/Readmore.js';
import FNXsvg from'./images/FNX.svg';
import WalletConnector from './components/WalletConnector.js';

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedContent, setSelectedContent] = useState("");
  const [activeButton, setActiveButton] = useState(null);
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
<div>
      <WalletConnector />
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
    src="https://media.discordapp.net/attachments/972039284410449920/1248705358571241492/bybit_menu.png?ex=6664a2fd&is=6663517d&hm=dc62aeb1229738cdb21d448cca93fbfc2265db82dd3d49cbdf1d55a52fd8499e&=&format=webp&quality=lossless"
    alt="Bybit"
  />
</button>
<button
  className={`menu-button ${activeButton === "Category 2" ? "active" : ""}`}
  onClick={() => handleCategorySelect("Category 2")}
>
  <img
    src="https://cdn.discordapp.com/attachments/972039284410449920/1248704833804828793/erc20_menu.png?ex=6664a280&is=66635100&hm=f83f79010604e27727e61fdbbc27ebc229b18fc4607285c5df26e37f4302f215&"
    alt="Ethereum"
  />
</button>
<button
  className={`menu-button ${activeButton === "Category 3" ? "active" : ""}`}
  onClick={() => handleCategorySelect("Category 3")}
>
  <img
    src="https://cdn.discordapp.com/attachments/972039284410449920/1248704854524690595/bsc_menu.png?ex=6664a285&is=66635105&hm=2bd002e41d9cb388ddcdcfda6ce1e642b7995d0f7d9d8683e95ca8078d9e3e64&"
    alt="BSC"
  />
</button>
<button
  className={`menu-button ${activeButton === "Category 4" ? "active" : ""}`}
  onClick={() => handleCategorySelect("Category 4")}
>
  <img
    src="https://media.discordapp.net/attachments/972039284410449920/1248704874376462447/polygon_menu.png?ex=6664a289&is=66635109&hm=5f2c6bd94eb03a715bf78e7375adfabf5446afa6991b2a01c660f8feda8d4f7a&=&format=webp&quality=lossless"
    alt="Polygon"
  />
</button>
<button
  className={`menu-button ${activeButton === "Category 6" ? "active" : ""}`}
  onClick={() => handleCategorySelect("Category 6")}
>
  <img
    src="https://media.discordapp.net/attachments/972039284410449920/1248705032833077248/solana_menu_2.png?ex=6664a2af&is=6663512f&hm=333c2a355638e18e3b6203e74cd921354fba2431f6f676b3e57f15cdf08f4086&=&format=webp&quality=lossless"
    alt="solana"
  />
</button>
<button
  className={`menu-button ${activeButton === "Category 1" ? "active" : ""}`}
  onClick={() => handleCategorySelect("Category 1")}
>
  <img
    src="https://media.discordapp.net/attachments/972039284410449920/1248704890700562532/concordium_menu.png?ex=6664a28d&is=6663510d&hm=5a2c4287355dc52588e533b835297ebf07a2e86f247fdc076149f5e3b3b867b0&=&format=webp&quality=lossless"
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
          <h2>Welcome To NordaHub L2E </h2>          <hr className="section-divider" />
          <div className="quizintro">
            <div className="text-box">
            <div className="object-details">
                      <p>
                      Our platform also features a robust quiz and task system to reinforce learning and track your progress. Challenge yourself with interactive quizzes and complete tasks to earn rewards and certificates. This system ensures you understand the material thoroughly and stay motivated throughout your learning journey
                      </p>
                    </div>
            </div>
            <div className="image-container">
              <div className="image-inner-container">
                <img className="object-image" src="https://cdn.discordapp.com/attachments/972039284410449920/1248705982247469077/Nordahub_logo_white.png?ex=6664a392&is=66635212&hm=0d289defcab042aca8d743d81c3e70a6b0ad56d189cab17ec74cbf562d8bc1ca&" alt="Object Image" />
              </div>
            </div>
          </div>
          </div></div>

        <div className="body-content">
          {/* Render different content based on selectedContent */}
          {selectedContent === "Category 1" && (
          <div>
            {/* <div className="dividerbox"> */}
              {/* <div className="dividercontent"> */}
                <h2 className="section-header"><img src={concordiumsvg} alt="concoarduim" width="400" height="500" /></h2>
              {/* </div> */}
            {/* </div> */}

            {/* Content for Category 1 */}
            <div className="Quizmenu">
              <div className="quizlist">
                <h2>What is Concordium?</h2>                <div className='Rewardsleft'>
                  <p>Rewards Left 500/500</p>
                </div>
                <div className="quizintro">
                  <div className="text-box">
                    <div className="object-details">
                      <p>
                        Explore the innovative world of Concordium, a groundbreaking blockchain platform redefining digital trust. Discover its integration of identity verification, privacy, and regulatory compliance. Learn about its unique governance model balancing decentralization and legal adherence. Whether you're a blockchain enthusiast or curious learner, join us to uncover Concordium's transformative potential in shaping the future of blockchain technology.        Let's begin!
                      </p>
                    </div>
                  </div>
                  <div className="image-container">
                    <div className="image-inner-container">
                      <img className="object-image" src="https://cdn.discordapp.com/attachments/972039284410449920/1248706217950580808/bc41c6caba1ab416c7f42a6f8b2b725c.png?ex=6664a3ca&is=6663524a&hm=c1fe7224382b43135a970335084941d10024b0f9a29d1fbcc6e5fd111e77148a&" alt="Object Image" />
                    </div>
                  </div>
                </div>
                <button className="clickable-button" onClick={openQuizModal0}> Start Quiz </button>

              </div> 
            </div>
          </div>
        )}
          {selectedContent === "Category 2" && (
            <div>        
          <div className="dividerbox">
            <div className="dividercontent">
            <img src={ETHsvg} alt="ETH" width="200" height="50" />
            </div>    
          </div>
              {/* Content for Category 2  */}
      </div>
          )}
          {selectedContent === "Category 3" && (
          <div className="dividerbox">
            <div className="dividercontent">
             <img src={BSCsvg} alt="BSC" width="200" height="50" />
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
        <div className="footer-text fackdiv ">
          <p>Powered by FNX.</p>      <div className="fnx-logo-container">
        <img src={FNXsvg} alt="FNX" width="300" height="100" />
        </div>
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
    </div>
  );
};

export default App;