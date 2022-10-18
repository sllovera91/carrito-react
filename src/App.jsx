import {BrowserRouter, Routes, Route } from 'react-router-dom'
import { AppTheme } from './theme/AppTheme';
import { Header } from './components/Header';
import { Inicio } from './pages/Inicio';
import './styles.css';







export const App = () => {

  

  return (
    <AppTheme>
      <BrowserRouter>
          <Header />
          <Inicio />
      </BrowserRouter>    
    </AppTheme>
  )
}

