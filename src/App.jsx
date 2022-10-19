import {BrowserRouter, Routes, Route } from 'react-router-dom'
import { AppTheme } from './theme/AppTheme';
import { Header } from './components/Header';
import { Inicio } from './pages/Inicio';
import { Provider } from 'react-redux';
import { store } from './store/store';
import './styles.css';


export const App = () => {

  

  return (
    <Provider store={ store }>
      <AppTheme>
        <BrowserRouter>
            <Header />
            <Inicio />
        </BrowserRouter>    
      </AppTheme>
    </Provider>
  )
}

