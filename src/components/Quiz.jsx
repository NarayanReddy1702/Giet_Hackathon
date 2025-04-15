import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const questions = [
  {
    question: "What is the primary purpose of version control systems like Git?",
    options: [
      "To store code backups",
      "To track changes and collaborate on code",
      "To compile code",
      "To debug code"
    ],
    correctAnswer: 1
  },
  {
    question: "Which of these is not a JavaScript framework?",
    options: [
      "React",
      "Angular",
      "Django",
      "Vue"
    ],
    correctAnswer: 2
  },
  {
    question: "What does API stand for?",
    options: [
      "Application Programming Interface",
      "Advanced Programming Integration",
      "Automated Program Interface",
      "Application Process Integration"
    ],
    correctAnswer: 0
  },
  {
    question: "Which data structure is best for implementing a priority queue?",
    options: [
      "Array",
      "Linked List",
      "Binary Heap",
      "Stack"
    ],
    correctAnswer: 2
  },
  {
    question: "What is the main advantage of using Docker?",
    options: [
      "Faster code execution",
      "Consistent environment across different machines",
      "Better code organization",
      "Automatic code testing"
    ],
    correctAnswer: 1
  }
]

const Quiz = () => {
  const navigate=useNavigate()
  const [attempt,setAttempt]=useState(1)

  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedOption, setSelectedOption] = useState(null)
  const [score, setScore] = useState(0)
  const [showScore, setShowScore] = useState(false)
  const [progress, setProgress] = useState(0)

  const updateAtm=JSON.parse(window.localStorage.getItem("updateAtm"))
  const handleOptionClick = (optionIndex) => {
    setSelectedOption(optionIndex)
  }

  const handleNext = () => {
    if (selectedOption === questions[currentQuestion].correctAnswer) {
      setScore(score + 1)
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedOption(null)
      setProgress(progress + 20) // Increase progress by 20% for each question
    } else {
      setShowScore(true)
      navigate("/Score")
      window.localStorage.setItem("score",JSON.stringify(score))
      window.localStorage.setItem("Attempt",JSON.stringify(attempt))
    }
  }

  return (
    <div className="min-h-screen bg-black text-white py-20">
      <div className="max-w-3xl mx-auto px-4">
        {!showScore ? (
          <>
            <div className="mb-8">
              <div className="w-full bg-gray-700 rounded-full h-2.5 mb-4">
                <div 
                  className="bg-blue-600 h-2.5 rounded-full transition-all duration-300"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
              <div className="flex justify-between text-sm text-blue-600">
                <span>Question {currentQuestion + 1} of {questions.length}</span>
                <span>Attempt: {updateAtm>1?updateAtm:attempt}</span>
              </div>
            </div>

            <div className="bg-blue-800 rounded-lg p-8 shadow-lg">
              <h2 className="text-2xl font-bold mb-6">
                {questions[currentQuestion].question}
              </h2>
              
              <div className="space-y-4">
                {questions[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleOptionClick(index)}
                    className={`w-full p-4 text-left rounded-lg transition-all duration-300 ${
                      selectedOption === index
                        ? 'bg-blue-600 text-white'
                        : 'bg-black hover:bg-gray-600 text-white'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>

              <div className="mt-8 flex justify-end">
                <button
                  onClick={handleNext}
                  disabled={selectedOption === null}
                  className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
                    selectedOption === null
                      ? 'bg-gray-700 text-gray-400 cursor-not-allowed'
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}
                >
                  {currentQuestion === questions.length - 1 ? 'Finish' : 'Next'}
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="bg-blue-800 text-white rounded-lg p-8 shadow-lg text-center">
            <h2 className="text-3xl font-bold mb-4">Quiz Completed!</h2>
            <p className="text-xl text-black mb-6">
              Your score: {score} out of {questions.length}
            </p>
            <button
              onClick={() => {
                setCurrentQuestion(0)
                setSelectedOption(null)
                setScore(0)
                setShowScore(false)
                setProgress(0) // Reset progress when restarting
              }}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-all duration-300"
            >
              Restart Quiz
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Quiz 