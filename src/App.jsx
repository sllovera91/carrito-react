
import {BrowserRouter, Routes, Route, HashRouter, Link } from 'react-router-dom'
import { AppTheme } from './theme/AppTheme';
import { Provider } from 'react-redux';
import { store } from './store/store';

import { Inicio } from './pages/Inicio';
import { Header } from './components/Header';
import { Carrito } from './pages/Carrito';
import { Productos } from './pages/Productos';
import { Footer } from './components/Footer';

import { ToastContainer } from 'react-toastify';  
 
import 'react-toastify/dist/ReactToastify.css'
import './styles.css';



export const App = () => {



  return (
    <Provider store={ store }>
      <AppTheme>
        <BrowserRouter>
          <ToastContainer />
              <Header />
              <Routes>
                <Route path='/' element={ <Inicio /> } />
                <Route path='/Productos/:id' element={ <Productos /> } />
                <Route path='/Carrito' element={ <Carrito /> } />
              </Routes>
        </BrowserRouter>
      </AppTheme>
    </Provider> 
  )
}

