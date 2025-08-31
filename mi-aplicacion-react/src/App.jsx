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
// import NewForm from './components/newFormBox'
// import NewFormBox from './components/newFormBox'
import Ejemplo1 from './components/ejemplo1'
import Ejemplo2 from './components/ejemplo2'
import MovingDot from './components/MovingDot'
import BotonLoco from './components/BotonLoco'


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
          {/* <Route path="/new-form" element={<NewFormBox />} /> */}
          <Route path="/ejemplo1" element={<Ejemplo1 />} />
          <Route path="/ejemplo2" element={<Ejemplo2/>}/>
          <Route path="bola" element={<MovingDot/>}/>
          <Route path="boton" element={<BotonLoco/>}/>

        </Routes>
      </Router>




  )

}


export default App
