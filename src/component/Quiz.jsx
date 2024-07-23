
import React, { useState } from 'react';
import './Quiz.css'

const questions = [
  {
    questionText: 'What is the capital of India',
    answerOptions: [
      { answerText: 'Bombay', isCorrect: false },
      { answerText: 'Delhi', isCorrect: false },
      { answerText: 'Gujarat', isCorrect: true },
      { answerText: 'Tamilnadu', isCorrect: false },
    ],
  },
  {
    questionText: 'Who is the current ipl captain of RCB ?',
    answerOptions: [
      { answerText: 'Dhobi', isCorrect: false },
      { answerText: 'Virat Kohli', isCorrect: true },
      { answerText: 'Rohit Sharma', isCorrect: false },
      { answerText: 'Faf Duplesis', isCorrect: false },
    ],
  },
  {
    questionText: 'The iPhone was created by which company?',
    answerOptions: [
      { answerText: 'Apple', isCorrect: true },
      { answerText: 'Intel', isCorrect: false },
      { answerText: 'Amazon', isCorrect: false },
      { answerText: 'Microsoft', isCorrect: false },
    ],
  },
  {
    questionText: 'Which team has won the current ODI world cup?',
    answerOptions: [
      { answerText: 'India', isCorrect: false },
      { answerText: 'Australia', isCorrect: false },
      { answerText: 'Newzealand+', isCorrect: false },
      { answerText: 'South Africa', isCorrect: true },
    ],
  },
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className='quiz'>
      {showScore ? (
        <div className='score-section'>
          You scored {score} out of {questions.length}
        </div>
      ) : (
        <>
          <div className='question-section'>
            <div className='question-count'>
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className='question-text'>{questions[currentQuestion].questionText}</div>
          </div>
          <div className='answer-section'>
            {questions[currentQuestion].answerOptions.map((answerOption, index) => (
              <button key={index} onClick={() => handleAnswerButtonClick(answerOption.isCorrect)}>
                {answerOption.answerText}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Quiz;
