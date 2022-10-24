
import {BrowserRouter, Routes, Route, HashRouter, Link } from 'react-router-dom'
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
        <BrowserRouter>
              <Header />
              <Routes>
                <Route path='/' element={ <Inicio /> }></Route>
                <Route path='/Productos/:id' element={ <Productos /> }></Route>
              </Routes>
              <Footer />
        </BrowserRouter>
      </AppTheme>
    </Provider> 
  )
}

