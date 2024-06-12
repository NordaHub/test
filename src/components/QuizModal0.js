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
    },
    {
      type: 'question',
      question: 'What is the overall mission of Concordium according to Holger Fischer, and how does the identity-layer contribute to achieving this mission?',
      options: [
        'To create a decentralized economy by eliminating intermediaries; the identity-layer ensures privacy.', 
        'To empower individuals and organizations to harness the potential of blockchain, creating a safer digital world; the identity-layer ensures accountability and regulation readiness.',
        'To promote financial inclusion and accessibility; the identity-layer supports user-friendly interfaces.'],
      correctAnswer: 'To empower individuals and organizations to harness the potential of blockchain, creating a safer digital world; the identity-layer ensures accountability and regulation readiness.',
      
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
      image: '',
      
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
    },
    {
      type: 'question',
      question: 'What does the speaker believe is necessary for blockchain projects to succeed after the current market downturn?',
      options: ['Increased speculative investments and aggressive marketing.', ' Building real value through increased security, efficiency, transparency, and aligning with real business needs.','Focusing on decentralized applications and ignoring regulatory compliance'],
      correctAnswer: ' Building real value through increased security, efficiency, transparency, and aligning with real business needs.',
      
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
      image: 'https://cdn.discordapp.com/attachments/972039284410449920/1249957902219743263/images.jpg?ex=66693182&is=6667e002&hm=dff2c2ff420eb2f685d691fea1b9d34c564bb7b657897592b36a5ff41d73962d&',
      
  
    },
    {
      type: 'question',
      question: 'What is one of the big problems with AI?',
      options: ['AI is a black box where data goes in, decisions come out, and the process in the middle is unknown.', 'AI systems are too slow for practical applications.', 'AI requires too much computational power, making it inefficient.'],
      correctAnswer: 'AI is a black box where data goes in, decisions come out, and the process in the middle is unknown.',
      image: 'https://cdn.discordapp.com/attachments/972039284410449920/1249958745270779964/cartoon-style-blue-shield_78370-1110.png?ex=6669324b&is=6667e0cb&hm=6bc0f962aa9659769a12dc296c62aae4c4d21b3144caef384b3a9e3ba95fb3a6&',
      
    },
    {
      type: 'question',
      question: 'What needs to be verified to ensure the reliability of AI models?',
      options: ['The user interface, the scalability, and the accessibility of the technology.', 'The speed of the model, the cost of training, and the energy consumption.', 'The authenticity of the data going into the model, the model itself, and the authenticity of the data coming out of the model'],
      correctAnswer: 'The authenticity of the data going into the model, the model itself, and the authenticity of the data coming out of the model',
      image: '',
      
    },
    {
      type: 'question',
      question: 'How is the EU addressing AI regulation?',
      options: ['By creating guidelines for AI hardware development and deployment.', 'By working on new rules around AI, including regulating the models, verifying the input, and ensuring the output is accurate.', 'By implementing policies to increase AI adoption in small businesses and startups.'],
      correctAnswer: 'By working on new rules around AI, including regulating the models, verifying the input, and ensuring the output is accurate.',
      image: 'https://cdn.discordapp.com/attachments/972039284410449920/1249958548004143166/images.jpg?ex=6669321c&is=6667e09c&hm=c9d7c6431286dc615eb7f12943f2b80c6ee61d5c535582224e6726e006befbb8&',
      
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
