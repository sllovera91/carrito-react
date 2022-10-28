import { Container, Grid, Box, Button, Typography, CircularProgress } from "@mui/material"
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useGetProductosQuery } from "../store/api/productosApi"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { agregarAlCarrito } from "../store/marketSlice";
import { Footer } from "../components/Footer";

export const Inicio = ( ) => {

  const dispatch = useDispatch()
  
  const { data: productos = [], isLoading } = useGetProductosQuery();

  const agregarCarrito = ( product ) => {
    dispatch(agregarAlCarrito(product))
  }

  return (
    <>
    <Box sx={{ mt: 13, mb: 8 }} className='animate__animated animate__fadeIn'>
      <Container maxWidth="lg" >
        <Grid 
        container spacing={5}  >
        {
          productos.map( (product) => (
            <Grid item xs={12} sm={3} key={product.id}>
            <Box  sx={{border: 0, borderStyle: 'dotted', p: 2,
               backgroundColor: '#FFFFFF',
                '&:hover': {
              opacity: [0.9, 0.8, 0.7],
              boxShadow: 12},
              textAlign: 'center',
              width: '100%',
              height: '100%'                                  
        }}>
              <Typography variant='p'><a href={`/Productos/${product.id}`}>{}</a></Typography>
              <Link to={`/Productos/${product.id}`}><img src={product.image} alt=""/></Link>
              <Link to={`/Productos/${product.id}`}><h4>${product.price}</h4></Link>
              <small style={{fontWeight: 'bold'}}> <Link to={`/Productos/${product.id}`}>{ product.title.length > 20 ? product.title.substring(0,20) + '...' : product.title} </Link></small>
              <div className="Boton" >
              <Button variant='contained' size="small" onClick={() => agregarCarrito(product) }  > <i className="fa-solid fa-cart-plus"></i>    Agregar al carrito </Button>              </div>
            </Box>
            </Grid>
          ))         
          }
        </Grid>
      </Container>
    </Box>
          <div className="Loader">
        { isLoading ? <CircularProgress size="8rem" /> : null }
          </div>
          <Footer />

    </>
  )
}
