// // import { useState } from 'react'
// // import reactLogo from './assets/react.svg'
// // import viteLogo from '/vite.svg'
// // import './App.css'
// // import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ThingsBox from './components/ThingsBox'
import MyUserBox from './components/MyUserBox'
import OtherBox from './components/OtherBox'
import MyForm from './components/myForm'
import PruebaRegister from './components/PruebaRegister'
import NewForm from './components/newFormBox'
import NewFormBox from './components/newFormBox'


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ThingsBox />} />
        <Route path="/things" element={<ThingsBox />} />
        <Route path="/my-user" element={<MyUserBox />} />
        <Route path="/other" element={<OtherBox />} />
        <Route path="/my-form" element={<MyForm />} />
        <Route path="/prueba-register" element={<PruebaRegister />} />
        <Route path="/new-form" element={<NewFormBox/>} />
        
      </Routes>
    </Router>

  )

}


export default App
