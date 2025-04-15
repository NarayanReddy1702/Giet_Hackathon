import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Score = () => {
  const score=JSON.parse(window.localStorage.getItem("score"))
  const attempt=JSON.parse(window.localStorage.getItem("Attempt"))
  console.log(score);
  const navigate=useNavigate()
  // This would typically come from your quiz state management
  const totalQuestions = 5
  const percentage = (score / totalQuestions) * 100

  const redirectQuiz=()=>{
  navigate("/Quiz")
  window.localStorage.setItem("updateAtm",JSON.stringify(attempt+1))
  }
  

  return (
    <div className="min-h-screen bg-black text-white py-20">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-gray-800 rounded-2xl p-8 shadow-xl">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4">Quiz Results</h1>
            <p className="text-gray-400">See how you performed in the software quiz</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="flex flex-col items-center">
              <div className="relative w-48 h-48 mb-4">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  {/* Background circle */}
                  <circle
                    className="text-gray-700"
                    strokeWidth="10"
                    stroke="currentColor"
                    fill="transparent"
                    r="45"
                    cx="50"
                    cy="50"
                  />
                  {/* Progress circle */}
                  <circle
                    className="text-blue-600"
                    strokeWidth="10"
                    strokeDasharray={`${percentage * 2.83} 283`}
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="transparent"
                    r="45"
                    cx="50"
                    cy="50"
                    style={{
                      transform: "rotate(-90deg)",
                      transformOrigin: "50% 50%",
                      animation: "progress 1.5s ease-out 0.5s forwards"
                    }}
                  />
                </svg>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                  <span className="text-4xl font-bold">{percentage}%</span>
                  <span className="block text-sm text-gray-400">Score</span>
                </div>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold mb-2">{score}/{totalQuestions}</p>
                <p className="text-gray-400">Correct Answers</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-700 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Performance Summary</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Accuracy</span>
                    <span className="text-blue-400 font-medium">{percentage}%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Questions Attempted</span>
                    <span className="text-blue-400 font-medium">{attempt}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Correct Answers</span>
                    <span className="text-blue-400 font-medium">{score}</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300">
                  Review Answers
                </button>
                <button onClick={redirectQuiz} className="flex-1 bg-gray-700 hover:bg-gray-600 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300">
                  Try Again
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Score