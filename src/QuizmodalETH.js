import React, { useState, useEffect } from 'react';
import './QuizModal.css';
//eth blockchain https://www.youtube.com/watch?v=IsXvoYeJxKA
let testAnswers = {}
const QuizModalETH = ({ onClose, onQuizComplete }) => {
  const [stepIndex, setStepIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [videoWatched, setVideoWatched] = useState(false);
  const [walletAddress, setWalletAddress] = useState('');
  const [showSubmitButton, setShowSubmitButton] = useState(false);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [quizFailed, setQuizFailed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSubmitButton(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, [stepIndex]);

  const handleOptionChange = (option, wuestionID) => {
      testAnswers[wuestionID - 1] = option
    setSelectedOption(option);
  };

  const handleNextStep = () => {
    if (stepIndex === videos.length + questions.length - 1) {
      calculateScore();
      return;
    }
    setSelectedOption();//test
    setStepIndex((prevIndex) => prevIndex + 1);
  };

  const handleVideoEnd = () => {
    setVideoWatched(true);
  };

  const calculateScore = () => {
    let userScore = 0;
    
    for (let i = 0; i < questions.length; i++) {  
       if (testAnswers[i] === questions[i].correctAnswer) {
         userScore++;
       }
     }
    
    setScore(userScore);
    if (userScore === questions.length) {
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
    setWalletAddress('');
    setShowSubmitButton(false);
    setScore(0);
    setQuizCompleted(false);
    setQuizFailed(false);
  };

  const videos = [
    {
      title: 'What is Ethereum? Everything you need to know',
      src: 'https://www.youtube.com/embed/IsXvoYeJxKA',
    },
    // Add more videos as needed
  ];

  const questions = [
    {
      question: 'What is Ethereum primarily known for?',
      options: ['Enabling online payments.', 'Providing tools for building decentralized applications.', ' Facilitating peer-to-peer transactions.'],
      correctAnswer: 'Providing tools for building decentralized applications.',
    },
    {
      question: 'How does Ether differ from Bitcoin?',
      options: ['Ether is only used for online purchases', 'Ether fuels the Ethereum network and is used for code execution, while Bitcoin is primarily a peer-to-peer electronic cash system', 'Ether is more secure.'],
      correctAnswer: 'Ether fuels the Ethereum network and is used for code execution, while Bitcoin is primarily a peer-to-peer electronic cash system.',
    },
    {
      question: 'When was crypto first introduced ?',
      options: ['2011', '2013', '2015', '2018'],
      correctAnswer: '2013',
    },
    {
      question: 'What does the crypto in Crypto curency stand for? ?',
      options: ['Money', 'Cryptografy', 'currency', 'Hidden'],
      correctAnswer: 'Cryptografy',
    },
    {
      question: 'How many blockchain can exist ?',
      options: ['Unlimited', 'Five', 'One'],
      correctAnswer: 'Unlimited',
    },
    // Add more questions as needed
  ];

  const currentStep = stepIndex < videos.length ? videos[stepIndex] : questions[stepIndex - videos.length];

  return (
    <div className="quiz-modal-overlay">
      <div className="quiz-modal">
        <button className="close-button" onClick={onClose}>X</button>
        <div className="header-container">
          {stepIndex < videos.length ? (
            <div className="video-container">
              <iframe
                title="YouTube Video"
                width="560"
                height="315"
                src={currentStep.src}
                frameBorder="0"
                allowFullScreen
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                onEnded={handleVideoEnd}
              ></iframe>
            </div>
          ) : null}
        </div>
        <div className="quiz-content">
        <div className="quiz-content">
          <div className="quiz-header">
            <h2>{stepIndex < videos.length ? `Video: ${currentStep.title}` : `Question ${stepIndex - videos.length + 1}`}</h2>
          </div>
          {stepIndex >= videos.length && (
            <p>{currentStep.question}</p>
          )}
          {stepIndex >= videos.length && currentStep.options.map((option, index) => (
            <label key={index}>
              <input
                type="radio"
                value={option}
                checked={selectedOption === option}
                onChange={() => handleOptionChange(option, stepIndex)}
              />
              {option}
            </label>
          ))}
        {!quizCompleted && showSubmitButton && !quizFailed &&(
    
           <button className="submit-button" onClick={handleNextStep}>
           Next (Questions)
           </button>
        )}
   
      </div>
          {quizCompleted && (
            <div>
              <h3>Congratulations! You have successfully completed the quiz.</h3>
              <p>Your Score: {score}/{questions.length}</p>
            </div>
          )}
          {quizFailed && (
            <div>
              <h3>Quiz Failed! Please try again.</h3>
              <p>Your Score: {score}/{questions.length}</p>
              <button onClick={handleRetry}>Retry Quiz</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuizModalETH;