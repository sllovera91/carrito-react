import { Box, Button, CircularProgress, Grid, Typography } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { useGetProductosByIdQuery } from '../store/api/productosApi';


export const Productos = () => {
    const navigate = useNavigate()
    const params = useParams()


  const { data: productos = [], isLoading } = useGetProductosByIdQuery(params.id);


  return (
    <>
      <div className='ProductBox'>
        <Box sx={{ display: 'flex', flexDirection: 'column', mt: 9, width: '50%'}}>
          <hr />
         <Typography variant='h5' align='center' sx={{ mt: 4 }} fontWeight='bold' > {productos.title} - ${productos.price}</Typography>  
          <img  className='Productos'  src={productos.image} alt="" />
          <hr />
          <Typography variant='p'> {productos.description} </Typography>
          <hr />
            <div className="Boton2">
                <Button variant='contained' size="small" onClick={()=> navigate(-1)}> <i class="fa-solid fa-arrow-left"></i>   Volver </Button>
                <Button variant='contained' size="small"> <i className="fa-solid fa-cart-plus"></i>    Agregar al carrito </Button>
            </div>
        </Box>
      </div>

      <div className="Loader">
        { isLoading ? <CircularProgress size="8rem" /> : null }
      </div>
    </>


  )
}
