import React, { useState, useEffect } from 'react';
import '../QuizModal.css';

let testAnswers = {};

const QuizModal0 = ({ onClose, onQuizComplete }) => {
  const [stepIndex, setStepIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [videoWatched, setVideoWatched] = useState(false);
  const [showSubmitButton, setShowSubmitButton] = useState(false);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [quizFailed, setQuizFailed] = useState(false);
  const handleSubmit = () => {
    console.log("Quiz submitted! Score:", score);
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSubmitButton(true);
    }, 50);

    return () => clearTimeout(timer);
  }, [stepIndex]);

  const handleOptionChange = (option, questionID) => {
    testAnswers[questionID - 1] = option;
    setSelectedOption(option);
  };

  const handleNextStep = () => {
    if (stepIndex === steps.length - 1) {
      calculateScore();
      return;
    }
    setSelectedOption(null); // reset selected option
    setStepIndex((prevIndex) => prevIndex + 1);
    setShowSubmitButton(false); // reset the submit button
  };

  const handleVideoEnd = () => {
    setVideoWatched(true);
    setShowSubmitButton(true); // Show the button after the video ends
  };

  const calculateScore = () => {
    let userScore = 0;

    for (let i = 0; i < steps.length; i++) {
      if (steps[i].type === 'question' && testAnswers[i] === steps[i].correctAnswer) {
        userScore++;
      }
    }

    setScore(userScore);
    if (userScore === steps.filter(step => step.type === 'question').length) {
      setQuizCompleted(true);
    } else {
      setQuizFailed(true);
    }
  };

  const handleRetry = () => {
    // Reset quiz state
    setStepIndex(0);
    setSelectedOption(null);
    setVideoWatched(false);
    setShowSubmitButton(false);
    setScore(0);
    setQuizCompleted(false);
    setQuizFailed(false);
    testAnswers = {}; // Reset the answers
  };

  const steps = [
    {
      type: 'video',
      title: 'Concordium?',
      src: 'https://www.youtube.com/embed/qadvDTkuQAw',
    },
    {
      type: 'question',
      question: 'What is the unique feature of the Concordium blockchain and what does it provide?',
      options: ['The Concordium protocol is EVM compatible and therefore compatible with all EVM-dAPPS. Fast onboarding for Ethereum developers.', ' At the protocol level, Concordium contains an identity layer that allows it to provide an additional level of trust between interacting parties.', 'The Concordium protocol is a three-part protocol that is unprecedentedly secure while being highly scalable.'],
      correctAnswer: ' At the protocol level, Concordium contains an identity layer that allows it to provide an additional level of trust between interacting parties.',
      infoLink: 'https://developer.concordium.software/en/mainnet/net/guides/learn-about-concordium.html#learn-about-concordium'
    },
    {
      type: 'video',
      title: 'ConcordiumBFT ',
      src: 'https://www.youtube.com/embed/baPCYS6zKe4',
    },
    {
      type: 'question',
      question: 'How long does it take to send a transaction and what is the throughput in the context of TPS?',
      options: [
        'The transaction finalization time is 12-14 seconds. Throughput is 15 transactions per second',
        'Transaction finalization time is approximately 2 seconds. Throughput can be up to 2 thousand transactions per second',
        'Since Concordium is based on scientific research, it initially has a fairly high throughput of 70 thousand transactions per second with a transaction finalization speed of up to 0.6 seconds'
      ],
      correctAnswer: 'Thanks to the latest major update to ConcordiumBFT, transaction finalization time is approximately 2 seconds. Throughput can be up to 2 thousand transactions per second',
      infoLink: 'https://github.com/Concordium/concordium-update-proposals/blob/main/updates/P6.txt'
    },
    {
      type: 'question',
      question: 'To create an account and use dAPPs, I must go through a verification process. What happens to my personal data? Will this affect my privacy?',
      options: ['The blockchain is a public ledger, so all my personal data is available to any network participant and any dAPPs immediately after creating an account.', 'My personal data never gets into the blockchain network and is not stored publicly, but is stored offline in encrypted form on the ID-provider side. ZKP technology is used to verify user data. I personally choose what information can be provided to the dAPPs'],
      correctAnswer: 'Both technical and fundamental factors',
      image: '',
      infoLink: 'https://developer.concordium.software/en/mainnet/net/concepts/id-accounts.html'
      
    },
    {
      type: 'question',
      question: 'What are shielded transactions in the Concordium blockchain?',
      options: ['A special type of transaction for a delegation', 'Transaction type to deploy a smart contract', 'A transaction in which the amount that is transferred is only visible to the sender and the receiver.'],
      correctAnswer: 'A transaction in which the amount that is transferred is only visible to the sender and the receiver.',
      infoLink: 'https://developer.concordium.software/en/mainnet/net/guides/shield-ccd-wallets.html',
      image: 'https://cdn.discordapp.com/attachments/972039284410449920/1249958745270779964/cartoon-style-blue-shield_78370-1110.png?ex=6669324b&is=6667e0cb&hm=6bc0f962aa9659769a12dc296c62aae4c4d21b3144caef384b3a9e3ba95fb3a6&',
      
    },
    {
      type: 'question',
      question: 'What was the name of the native Concordium token before the rebranding?',
      options: ['CCT - Common Concordium token', 'CBT - Concordiums base token', 'GTU - Global transaction unit', 'TBT - Total binding token'],
      correctAnswer: 'GTU -Global transaction unit',
      image: 'https://cdn.discordapp.com/attachments/972039284410449920/1249959508889833575/1_K1Obh-od304wFc26N9EnaQ.png?ex=66693302&is=6667e182&hm=a02844c264b968d7ed852b9371c4b8a11e0f642558edc579e30871b54a6767b2&',
      
    },
    {
      type: 'question',
      question: 'What is the official tagline at Concordium?',
      options: ['Building a safer tomorrow', 'Identification is the future', 'Creating an environment of trust.'],
      correctAnswer: 'A transaction in which the amount that is transferred is only visible to the sender and the receiver.',
      infoLink: 'https://www.concordium.com/about',
      image: 'https://cdn.discordapp.com/attachments/972039284410449920/1249958548004143166/images.jpg?ex=6669321c&is=6667e09c&hm=c9d7c6431286dc615eb7f12943f2b80c6ee61d5c535582224e6726e006befbb8&',
      
    },
    {
      type: 'video',
      title: 'What is Concordium? ',
      src: 'https://www.youtube.com/embed/EcV_bPQXcWc',
    },
    {
      type: 'question',
      question: 'What is Concordium Academy',
      options: ['This is the name of the department at the partner university in Aarhus', 'This portal allows you to learn how to develop dApps on Concordium and get NFT for its deployment on the blockchain', 'Concordium Academy is a Governance Committee that evaluates and implements parameter changes and protocol updates, and oversees and adjusts the tokenomics'],
      correctAnswer: 'This portal allows you to learn how to develop dApps on Concordium and get NFT for its deployment on the blockchain.',
      image: 'https://cdn.discordapp.com/attachments/972039284410449920/1249957902219743263/images.jpg?ex=66693182&is=6667e002&hm=dff2c2ff420eb2f685d691fea1b9d34c564bb7b657897592b36a5ff41d73962d&',
      
  
    },
    {
      type: 'question',
      question: 'Concordium transaction fees are',
      options: ['Transaction fees are free, the user does not spend any money to send the transaction.', 'Transaction costs are designed to be relatively stable in EUR terms', 'Unpredictable and depends on many factors, such as network load, number of active validators, etc.'],
      correctAnswer: 'Transaction costs are designed to be relatively stable in EUR terms',
      image: 'https://cdn.discordapp.com/attachments/972039284410449920/1249957740697092106/hiddenfees-900x387.webp?ex=6669315c&is=6667dfdc&hm=e5d3ce1e15ad200899bd03902a147ed28780d3f062febf04264fcf8fc668e9a7&',
      
    },
    {
      type: 'final step',
      question: 'SCORE',
    },
    
  ];

  const currentStep = steps[stepIndex];

  return (
    <div className="quiz-modal-overlay">
      <div className="quiz-modal">
        <button className="close-button" onClick={onClose}>X</button>
        <div className="header-container">
          <div className="quiz-header">
            <h2>{currentStep.type === 'video' ? `Video: ${currentStep.title}` : currentStep.question}</h2>
            {currentStep.type === 'question' && currentStep.image && (
              <div className="image-container">
                <img src={currentStep.image} alt="Question Image" className="centered-image" />
              </div>
            )}
          </div>
          {currentStep.type === 'video' && (
            <div className="video-container">
              <iframe
                title="YouTube Video"
                width="100%"
                height="100%"
                src={currentStep.src}
                frameBorder="0"
                allowFullScreen
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                onEnded={handleVideoEnd}
              ></iframe>
            </div>
          )}
        </div>
        <div className="quiz-content">
          {currentStep.type === 'question' && (
            <div>
              {currentStep.infoLink && (
                <p>Please read<a href={currentStep.infoLink} target="_blank" rel="noopener noreferrer"> This</a> before answering the question:</p>
              )}
              {currentStep.options.map((option, index) => (
                <label key={index} className={option.length < 20 ? 'short-option' : 'long-option'}>
                  <input
                    type="radio"
                    value={option}
                    checked={selectedOption === option}
                    onChange={() => handleOptionChange(option, stepIndex + 1)}
                  />
                  {option}
                  <br /> {/* Add a line break after each option */}
                </label>
              ))}
            </div>
          )}
          {!quizCompleted && showSubmitButton && !quizFailed && (
            <button className="submit-button" onClick={handleNextStep}>
              Next
            </button>
          )}
        </div>
        {(quizCompleted || quizFailed) && (
            <div className="final-screen">
            {quizCompleted && (
              <>
                <img src="success_image_url" alt="Success" />
                <h3>Congratulations! You have successfully completed the quiz.</h3>
              </>
            )}
            {quizFailed && (
              <>
                <img src="" alt="Retry" />
                <h3>Quiz Failed! Please try again.</h3>
              </>
            )}
            <p>Your Score: {score}/{steps.filter(step => step.type === 'question').length}</p>
            {!quizFailed && <button className="submit-button" onClick={handleSubmit}>Submit</button>}
            <button onClick={handleRetry}>Retry Quiz</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizModal0;