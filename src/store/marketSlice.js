import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

export const marketSlice = createSlice({
    name: 'market',
    initialState: {
        marketItems: localStorage.getItem("marketItems") 
        ? JSON.parse(localStorage.getItem('marketItems')) 
        : [],
        marketCantidad: 0,
        marketTotal: 0
    },
    reducers: {
        agregarAlCarrito: (state, { payload }) => {
            const itemIndex = state.marketItems.findIndex( item => item.id === payload.id );
            if(itemIndex >= 0){
              state.marketItems[itemIndex].marketCantidad += 1 
            }else {
              const tempMarket = {...payload, marketCantidad: 1  } 
              state.marketItems.push(tempMarket);
              toast.success(`Agregaste ${payload.title} al carrito`, {
                position: 'bottom-left'
              })
            }
            localStorage.setItem("marketItems", JSON.stringify(state.marketItems));
        },
        eliminarCarrito: (state, { payload }) => {
          const nuevosProductos = state.marketItems.filter(
            marketItem => marketItem.id !== payload.id
          )
          state.marketItems = nuevosProductos;
          toast.error('Eliminaste el producto', {
            position: 'bottom-left'
          });
          localStorage.setItem("marketItems", JSON.stringify(state.marketItems));
        },
        limpiarCarrito: (state) => {
          state.marketItems = [];
          toast.error('Vaciaste el carrito', {
            position: 'bottom-left'
          });
          localStorage.setItem("marketItems", JSON.stringify(state.marketItems));
        }
    }
});


// Action creators are generated for each case reducer function
export const { agregarAlCarrito, limpiarCarrito, eliminarCarrito } = marketSlice.actions;
