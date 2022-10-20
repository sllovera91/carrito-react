// import {BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { AppTheme } from './theme/AppTheme';
import { Provider } from 'react-redux';
import { store } from './store/store';

import { Inicio } from './pages/Inicio';
import { Header } from './components/Header';
import { Productos } from './pages/Productos';
import { Footer } from './components/Footer';

import './styles.css';



export const App = () => {


  return (
    <Provider store={ store }>
      <AppTheme>
            <Header />
            <Inicio />
            <Footer />
      </AppTheme>
    </Provider> 
  )
}

