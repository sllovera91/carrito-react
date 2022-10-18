import {BrowserRouter, Routes, Route } from 'react-router-dom'

import { Header } from './components/Header';
import { Inicio } from './pages/Inicio';
import './styles.css';





export const App = () => {

  

  return (
    <BrowserRouter>
        <Header />
        <Inicio />
    </BrowserRouter>    
  )
}

