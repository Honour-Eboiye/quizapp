import React, {useState} from 'react'
import {  BounceLoader } from 'react-spinners'
import { useNavigate } from 'react-router-dom'


const Welcome = () => {
  const [isLoading, setIsLoading] = useState(false)
  const redirect = useNavigate()
  const handleNext = ()=>{
    return(
      (
        setIsLoading(true)
      ),
      setTimeout(()=>{
        redirect('/quiz/question')
      }, 3000)
    )
    
  }
  return (
    <div className=' flex flex-col mx-auto relative w-full max-w-[345px] shadow'>
      {isLoading ? (
        <div className="w-[300px] h-[400px] flex justify-center items-center">
          <BounceLoader color="white" size={35} />
        </div>
      ) : (
        <button onClick={handleNext}>
        Start
      </button>
      )}
    </div>
  )
}

export default Welcome