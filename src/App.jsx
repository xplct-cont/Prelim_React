import { useState } from 'react'
import reactLogo from './assets/react.svg'
// import './App.css'
import Crud from './components/Crud';
import Navbar from './components/Navbar';

function App() {
 
  return (
    <div className="App">
          <Navbar/>
          <Crud/>
    </div>
  )
}

export default App
