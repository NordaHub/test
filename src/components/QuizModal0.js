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
      src: 'https://www.youtube.com/embed/EcV_bPQXcWc',

    },
    {
      type: 'question',
      question: 'What are the two key differentiators of the Concordium blockchain mentioned by Holger Fischer, and why are they important for organizations?',
      options: ['Stable transaction fees and an identity-layer at the protocol level; they are important for budget planning and accountability.', 'High transaction speed and low energy consumption; they are important for efficiency and sustainability.', 'Decentralized governance and open-source code; they are important for transparency and community involvement.'],
      correctAnswer: ' Stable transaction fees and an identity-layer at the protocol level; they are important for budget planning and accountability',
      image: 'https://i.postimg.cc/3JJ7LnGv/Learn-Illustration-Private-Key.png',
    },
    {
      type: 'question',
      question: 'How does Concordium aim to address the blockchain trilemma, and what additional component does it prioritize?',
      options: [
        'By focusing on decentralization, security, and scalability; it also prioritizes environmental sustainability.',
        'By perfecting decentralization, security, and scalability; it also prioritizes regulation and being regulation ready.',
        'By enhancing transaction speed, reducing costs, and improving user experience; it also prioritizes community engagement.'
      ],
      correctAnswer: 'By perfecting decentralization, security, and scalability; it also prioritizes regulation and being regulation ready',
      image: 'https://i.postimg.cc/DJ7bqb6m/1352632.jpg',
    },
    {
      type: 'question',
      question: 'What is the overall mission of Concordium according to Holger Fischer, and how does the identity-layer contribute to achieving this mission?',
      options: [
        'To create a decentralized economy by eliminating intermediaries; the identity-layer ensures privacy.', 
        'To empower individuals and organizations to harness the potential of blockchain, creating a safer digital world; the identity-layer ensures accountability and regulation readiness.',
        'To promote financial inclusion and accessibility; the identity-layer supports user-friendly interfaces.'],
      correctAnswer: 'To empower individuals and organizations to harness the potential of blockchain, creating a safer digital world; the identity-layer ensures accountability and regulation readiness.',
      image: 'https://i.postimg.cc/DJ7bqb6m/1352632.jpg',
    },
    {
      type: 'video',
      title: 'The vision of Concordium',
      src: 'https://www.youtube.com/embed/A4wt7ESNHpM',
    },
    {
      type: 'question',
      question: 'What is the overall vision of Concordium according to the speaker?',
      options: ['To be an industrial scale, compliant-ready blockchain based on deep cryptographic science and real understanding of business needs.', 'To focus solely on creating decentralized financial systems.', 'To provide a platform for speculative investments in the crypto space.'],
      correctAnswer: 'To be an industrial scale, compliant-ready blockchain based on deep cryptographic science and real understanding of business needs.',
      image: 'https://i.postimg.cc/DJ7bqb6m/1352632.jpg',
      
    },
    {
      type: 'question',
      question: 'According to the speaker, what were some of the issues with early generations of blockchain technology?',
      options: [
        'High transaction fees and lack of marketing strategies.',
        'Lack of cryptographic solidity, tech quality, scalability, and a mature understanding of business.',
        'Over-regulation and slow transaction speeds.'
      ],
      correctAnswer: 'Lack of cryptographic solidity, tech quality, scalability, and a mature understanding of business.',
      image: 'https://i.postimg.cc/DJ7bqb6m/1352632.jpg',
    },
    {
      type: 'question',
      question: 'What does the speaker believe is necessary for blockchain projects to succeed after the current market downturn?',
      options: ['Increased speculative investments and aggressive marketing.', ' Building real value through increased security, efficiency, transparency, and aligning with real business needs.','Focusing on decentralized applications and ignoring regulatory compliance'],
      correctAnswer: ' Building real value through increased security, efficiency, transparency, and aligning with real business needs.',
      image: 'https://i.postimg.cc/DJ7bqb6m/1352632.jpg',
    },
    {
      type: 'video',
      title: 'AI & Blockchain - AI, Use Cases and Regulation',
      src: 'https://www.youtube.com/embed/u3By5HlDeDU',
    },
    {
      type: 'question',
      question: 'Who is involved in creating the new AI regulations in the EU?',
      options: ['Individual AI developers and tech companies', 'Panels of people working in Brussels', 'University researchers and independent think tanks.'],
      correctAnswer: 'Panels of people working in Brussels',
      image: 'https://i.postimg.cc/DJ7bqb6m/1352632.jpg',
      
  
    },
    {
      type: 'question',
      question: 'What is one of the big problems with AI?',
      options: ['AI is a black box where data goes in, decisions come out, and the process in the middle is unknown.', 'AI systems are too slow for practical applications.', 'AI requires too much computational power, making it inefficient.'],
      correctAnswer: 'AI is a black box where data goes in, decisions come out, and the process in the middle is unknown.',
      image: 'https://i.postimg.cc/DJ7bqb6m/1352632.jpg',
      
    },
    {
      type: 'question',
      question: 'What needs to be verified to ensure the reliability of AI models?',
      options: ['The user interface, the scalability, and the accessibility of the technology.', 'The speed of the model, the cost of training, and the energy consumption.', 'The authenticity of the data going into the model, the model itself, and the authenticity of the data coming out of the model'],
      correctAnswer: 'The authenticity of the data going into the model, the model itself, and the authenticity of the data coming out of the model',
      image: 'https://i.postimg.cc/DJ7bqb6m/1352632.jpg',
      
    },
    {
      type: 'question',
      question: 'How is the EU addressing AI regulation?',
      options: ['By creating guidelines for AI hardware development and deployment.', 'By working on new rules around AI, including regulating the models, verifying the input, and ensuring the output is accurate.', 'By implementing policies to increase AI adoption in small businesses and startups.'],
      correctAnswer: 'By working on new rules around AI, including regulating the models, verifying the input, and ensuring the output is accurate.',
      image: 'https://i.postimg.cc/DJ7bqb6m/1352632.jpg',
      
    }, 
    {
      type: 'final step',
      question: 'SCORE',
      image: 'https://i.postimg.cc/DJ7bqb6m/1352632.jpg',
    },
    
  ];

  const currentStep = steps[stepIndex];

 return (
    <div className="quiz-modal-overlay">
      <div className="quiz-modal">
        <button className="close-button" onClick={onClose}>X</button>
        <div className="header-containerQ">
                        <div className="image-containerQ">
                <img src={currentStep.image} alt="QImage" className="centered-image" />
              </div>
          <div className="quiz-header">
            <h2>{currentStep.type === 'video' ? `Video: ${currentStep.title}` : currentStep.question}</h2>
          </div>
          {currentStep.type === 'video' && (
            <div className="video-container">
              <iframe
                title="YouTube Video"
                width="100%"
                height="100%"
                src={currentStep.src}
                allowFullScreen
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                onEnded={handleVideoEnd}
              ></iframe>
            </div>
          )}
        </div>
        <div className="quiz-content">
  {currentStep.type === 'question' && (
    <div className="quiz-options">
      {currentStep.infoLink && (
        <p>
          Please read
          <a href={currentStep.infoLink} target="_blank" rel="noopener noreferrer"> This</a> before answering the question:
        </p>
      )}
      {currentStep.options.map((option, index) => (
        <label key={index} className={option.length < 20 ? 'short-option' : 'long-option'}>
          <div className="option-container">
            <div className="radio-button-container">
              <input
                type="radio"
                value={option}
                checked={selectedOption === option}
                onChange={() => handleOptionChange(option, stepIndex + 1)}
              />
            </div>
            <div className="option-text-container">
              {option}
            </div>
          </div>
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