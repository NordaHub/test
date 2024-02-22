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
      options: ['Online payments', 'Running DApps.', 'Social networking.'],
      correctAnswer: 'Running DApps.',
    },
    {
      question: 'How does Ethereum differ from Bitcoin?',
      options: ['Same purpose', 'Focuses on DApps', 'Only for online shopping'],
      correctAnswer: 'Focuses on DApps',
    },
    {
      question: 'What is Ether ?',
      options: ['Gas', 'Ethereums cryptocurrency', 'Programming language'],
      correctAnswer: 'Ethereums cryptocurrency',
    },
    {
      question: 'What are smart contracts on Ethereum?',
      options: ['Legal documents on blockchain', 'Programs for asset exchange', 'Type of cryptocurrency'],
      correctAnswer: 'Programs for asset exchange',
    },
    {
      question: 'How does Ethereum serve as a computing platform?',
      options: ['Hosting social media', 'Enabling app creation on one platform', 'Enabling app creation on one platform'],
      correctAnswer: 'Enabling app creation on one platform',
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
