import React, { useState } from 'react'
import { BounceLoader } from 'react-spinners'
import { useNavigate } from 'react-router-dom'

const Welcome = () => {
  const [isLoading, setIsLoading] = useState(false)
  const redirect = useNavigate()
  const handleNext = () => {
    setIsLoading(true)
    setTimeout(() => {
      redirect('/quiz/question')
    }, 3000)
  }

  return (
    <div className="py-7">
      <div className="flex flex-col mx-auto relative w-full max-w-[345px] shadow bg-blue-500 p-6 h-[400px]">
        {isLoading ? (
          <div className="w-[300px] h-[400px] flex justify-center items-center">
            <BounceLoader color="white" size={35} />
          </div>
        ) : (
          <div className="text-center">
            <h1 className="text-white text-2xl font-bold mb-6">Let's Play</h1>
            <p className="text-white text-sm mb-8">Choose a category to start playing</p>
            <button
              onClick={handleNext}
              className="bg-yellow-400 text-blue-900 font-bold py-2 px-6 shadow-lg hover:bg-yellow-300 transition-all"
            >
              Start
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Welcome