import './App.css'
import Home from './components/Home'
import Contato from './components/Contato'
import Empresa from './components/Empresa'
import NovoProjeto from './components/NovoProjeto'

import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Projeto from './components/Projeto'
import AnalisaProjeto from './components/AnalisaProjeto'
function App() {
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

