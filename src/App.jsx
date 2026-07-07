import './App.css'
import Home from './components/Home'
import Contato from './components/Contato'
import Empresa from './components/Empresa'
import NovoProjeto from './components/NovoProjeto'

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Projeto from './components/Projeto'
import AnalisaProjeto from './components/AnalisaProjeto'
import { useEffect } from 'react'
import { limparProjetos } from './services/api'

function App() {
  useEffect(() => {
    limparProjetos();

    const intervalId = window.setInterval(() => {
      limparProjetos();
    }, 5 * 60 * 1000);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/projeto" element={<Projeto/>}/>
        <Route path="/contato" element={<Contato/>}/>
        <Route path="/empresa" element={<Empresa/>}/>
        <Route path="/novo-projeto" element={<NovoProjeto/>}/>
        <Route path="/analisa/:id" element={<AnalisaProjeto/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

