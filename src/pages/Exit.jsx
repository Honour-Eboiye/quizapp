import React from 'react'
import { useNavigate } from 'react-router-dom'
import { BounceLoader } from 'react-spinners'
import Welcome from './Welcome'

const Exit = () => {
  const {score} = Welcome
  return (
    <div>
      <h1>Score {score} out of 30</h1>
    </div>
  )
}

export default Exit