import React from 'react'
import Navbar from '../components/Navbar'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate=useNavigate()
  const RedirectQuizPage =()=>{
     navigate("/Quiz")
  }
  return (
<>
<div className= "w-full min-h-[90vh] bg-black flex flex-col items-center justify-center text-center px-4">
  <h1 className="text-6xl font-bold text-blue-600 mb-6"><span className='text-white'>Welcome </span>to Score</h1>
  <p className="text-xl text-gray-400 mb-8 max-w-2xl">
    Track your scores, analyze your performance, and improve your game with our comprehensive scoring platform.
  </p>
  <button onClick={RedirectQuizPage} className="px-8 py-3 cursor-pointer text-lg font-semibold rounded-lg bg-blue-600 text-white hover:bg-blue-800 transition-all duration-300">
    Get Started
  </button>
</div>
</>
  )
}

export default Home