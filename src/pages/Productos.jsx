import { Box, Button, CircularProgress, Grid, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { useGetProductosByIdQuery } from '../store/api/productosApi';
import { agregarAlCarrito } from '../store/marketSlice';
import { Footer } from "../components/Footer";


export const Productos = () => {

    const navigate = useNavigate()
    const params = useParams()
    const dispatch = useDispatch()

    const { data: productos = [] } = useGetProductosByIdQuery(params.id);

    const agregarCarrito = ( productos ) => {
      dispatch(agregarAlCarrito(productos))
    }

  return (
    <>
      <div className='ProductBox animate__animated animate__fadeIn'>
        <Box sx={{ display: 'flex', flexDirection: 'column', mt: 9, mb: 8, width: '50%'}}>
          <hr />
         <Typography variant='h5' align='center' sx={{ mt: 4 }} fontWeight='bold' > {productos.title} - ${productos.price}</Typography>  
          <img  className='Productos'  src={productos.image} alt="" />
          <hr />
          <Typography variant='p'> {productos.description} </Typography>
          <hr />
            <div className="Boton2">
                <Button variant='contained' size="small" onClick={()=> navigate(-1)}> <i className="fa-solid fa-arrow-left"></i>   Volver </Button>
                <Button variant='contained' size="small" onClick={() => agregarCarrito(productos) }  > <i className="fa-solid fa-cart-plus"></i>    Agregar al carrito </Button>            </div>
        </Box>
      </div>
      <Footer />
    </>


  )
}
