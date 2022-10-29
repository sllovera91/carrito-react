import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

export const marketSlice = createSlice({
    name: 'market',
    initialState: {
        marketItems: localStorage.getItem("marketItems") 
        ? JSON.parse(localStorage.getItem('marketItems')) 
        : [],
        marketTotalPrecio: 0
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

        
        reducirCarrito: (state, { payload }) => {
          const itemIndex = state.marketItems.findIndex( item => item.id === payload.id );

            if(state.marketItems[itemIndex].marketCantidad > 1) {
              state.marketItems[itemIndex].marketCantidad -= 1;
            } 
              else if (state.marketItems[itemIndex].marketCantidad === 1 ) {
                const nuevosProducto = state.marketItems.filter(  
                  (marketItem) => marketItem.id !== payload.id
                  );
                  state.marketItems = nuevosProducto;

                toast.error('Eliminaste el producto', {
                  position: 'bottom-left'
                });
              }
              localStorage.setItem("marketItems", JSON.stringify(state.marketItems));   
            },
        limpiarCarrito: (state) => {
          state.marketItems = [];
          toast.error('Vaciaste el carrito', {
            position: 'bottom-left'
          });
          localStorage.setItem("marketItems", JSON.stringify(state.marketItems));
        },
        precioFinal(state, {payload}) {
          let { final, marketCantidad } = state.marketItems.reduce(
            (marketTotal, marketItem) => {
              const { price, marketCantidad } = marketItem;
              const precioFinal = price * marketCantidad;
    
              marketTotal.final += precioFinal;
    
              return marketTotal;
            },
            {
              final: 0
            }
          );
          state.marketTotalPrecio = final;
        },
    }
});


export const { agregarAlCarrito, limpiarCarrito, eliminarCarrito, reducirCarrito, precioFinal } = marketSlice.actions;