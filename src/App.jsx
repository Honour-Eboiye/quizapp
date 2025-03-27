import './App.css'
import Welcome from './pages/Welcome'
import Home from './pages/Home'
import Exit from './pages/Exit'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Background from './components/Background'

function App() {
  return (
    <>
      <BrowserRouter>
        <Background></Background>
       <Routes>
        <Route path='/' element={<Navigate to='/quiz/home'></Navigate>}/>
        <Route path='/quiz/home' element={<Welcome></Welcome>}/>
        <Route path='/quiz/question' element={<Home></Home>}/>
        <Route path='/quiz/submit' element={<Exit></Exit>}/>
       </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
