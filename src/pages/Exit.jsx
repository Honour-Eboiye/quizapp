import React, { useState } from 'react'
import { useNavigate, useLocation} from 'react-router-dom'
import { BounceLoader } from 'react-spinners'
import Welcome from './Welcome'


const Exit = () => {
  const [isLoading, setIsLoading] = useState(false)
  const redirect = useNavigate()
  const location = useLocation()
  const score = location.state?.score || 0;
  const handleRestart = () => {
    setIsLoading(true)
    setTimeout(() => {
      redirect('/quiz/home')
      window.location.reload()
    }, 3000)
  }

  return (
    <div className="py-7">
      <div className="flex flex-col mx-auto relative w-full max-w-[345px] shadow bg-blue-500 p-8 h-[400px]">
        {isLoading ? (
          <div className="w-[300px] h-[400px] flex justify-center items-center">
            <BounceLoader color="white" size={35} />
          </div>
        ) : (
          <div className="text-center">
            <h1 className="text-white text-3xl font-semibold mb-6">You got {score} out of 30</h1>
            <button
              onClick={handleRestart}
              className="bg-yellow-400 text-blue-900 font-bold py-2 px-6 shadow-lg hover:bg-yellow-300 transition-all"
            >
              Play Again
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Exit