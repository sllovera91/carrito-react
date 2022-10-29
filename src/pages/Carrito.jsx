import { Box, Button, Typography } from "@mui/material" 
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { Footer } from "../components/Footer";
import { agregarAlCarrito, eliminarCarrito, limpiarCarrito , precioFinal, reducirCarrito } from "../store/marketSlice";


export const Carrito = () => {

    const carrito = useSelector( state => state.market)
    const dispatch = useDispatch()

    const agregarCarrito = ( producto ) => {
        dispatch(agregarAlCarrito(producto))
      }
      
      const vaciarCarrito = () => {
        dispatch(limpiarCarrito())
      }

      const eliminarProducto = (producto) => {
        dispatch(eliminarCarrito(producto))
      }

      const decrecerProducto = (producto) => {
        dispatch(reducirCarrito(producto))
      }

      useEffect(() => {
        dispatch(precioFinal())
      }, [carrito])
      
         

  return (
    
    <Box  className='animate__animated animate__fadeIn'>
    <div className="carrito-container">
    <Typography variant='h4' align='center' mt={8} mb={5}> Tus Productos </Typography>
    {carrito.marketItems.length === 0 ? (
      <div className="carro-vacio">
        <p>No tenes ningun producto!</p>
          <Link to="/">
            <Button>Volver a la tienda</Button>
          </Link>
      </div>
    ) : (
      <div>
        <div className="titulos">
          <h3 className="product-title">Producto</h3>
          <h3 className="price">Precio</h3>
          <h3 className="quantity">Cantidad</h3>
          <h3 className="total">Total</h3>
        </div>
        <div className="carrito-items">
          {carrito.marketItems &&
            carrito.marketItems.map((producto) => (
              <div className="carrito-item" key={producto.id}>
                <div className="carrito-product">
                  <img src={producto.image} alt={producto.title} />
                  <div>
                    <Typography variant='h5'>{producto.title}</Typography>
                    <p>{producto.desc}</p>
                    <Button variant='outlined' onClick={ () => eliminarProducto( producto) }>
                      Eliminar
                    </Button>
                  </div>
                </div>
                <div className="carrito-producto-precio">${producto.price}</div>
                <div className="carrito-producto-cantidad">
                  <Button  onClick={ () => {decrecerProducto(producto)}}>
                    -
                  </Button>
                  <div className="count">{producto.marketCantidad}</div>
                  <Button onClick={ () => {agregarCarrito(producto)}} >+</Button>
                </div>
                <div className="carrito-producto-total">
                  ${producto.price * producto.marketCantidad}
                </div>  
              </div>
            ))}
        </div>
        <div className="carrito-resumen">
          <Button variant='contained' onClick={ ()=> vaciarCarrito()}>
            Borrar todo
          </Button>
          <div className="carrito-checkout">
            <div className="total">
              <span>Subtotal</span>
              <span className="monto">{carrito.marketTotalPrecio}</span>
            </div>
            <Button sx={{ mt: 2, width: '100%' }}variant='contained'>Comprar</Button>
            <Link to='/'>
                <Button sx={{ mt: 2, width: '100%' }}variant='contained'>Volver</Button>
            </Link>
          </div>
        </div>
      </div>
    )}
  </div>
  <Footer />
  </Box>
    
  )
}


