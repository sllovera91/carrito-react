import { Container, Grid, Box, Button, Typography, CircularProgress } from "@mui/material"
import { useGetProductosQuery } from "../store/api/productosApi"

export const Inicio = ( ) => {

  const { data: productos = [], isLoading } = useGetProductosQuery();
  return (
    <>
    <Box sx={{ mt: 13, mb: 8 }}>
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
              <img src={product.image} alt=""/>
              <h4>${product.price}</h4>
              <small> { product.title.length > 20 ? product.title.substring(0,20) + '...' : product.title} </small>
              <div className="Boton">
                <Button variant='contained' size="small"> <i className="fa-solid fa-cart-plus"></i>    Agregar al carrito </Button>
              </div>
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

    </>
  )
}
