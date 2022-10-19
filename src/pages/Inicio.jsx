import { Container, Grid, Box, Button, Typography, CircularProgress } from "@mui/material"
import { ProductModal } from "../components/ProductModal"
import { useUiStore } from "../hooks/useUiStore"
import { useGetProductosQuery } from "../store/api/productosApi"

export const Inicio = () => {



  const { openProduct } = useUiStore()

  const { data: productos = [], isLoading } = useGetProductosQuery();



  return (
    <>
    
    <Box sx={{ mt: 13, mb: 8 }}  onClick={() => {
    openProduct()
  }}>
      <Container maxWidth="lg">
        <Grid 
        container spacing={5}>
        {
          productos.map( (product) => (
            <Grid item xs={12} sm={3} key={product.id}>
            <Box  sx={{border: 1, borderStyle: 'dotted', p: 2,
               backgroundColor: '#FFFFFF',
                '&:hover': {
              backgroundColor: '#e9e9e9',
              opacity: [0.9, 0.8, 0.7],
              boxShadow: 12},
              textAlign: 'center'                                 
        }}>
              <Typography variant='h6'>{product.title}</Typography>
              <img src={product.image} alt=""/>
              <p>Precio-{product.price}</p>
              <div className="Boton">
                <Button   size="small"> <i className="fa-solid fa-plus"></i> </Button>
                <p>Cantidad: 100 </p>
                <Button   size="small"> <i className="fa-solid fa-minus"></i> </Button>
              </div>
            </Box>
            </Grid>
          ))         
          }
        </Grid>
      </Container>
    </Box>
    { isLoading ? <CircularProgress size="8rem" /> : null }
    <ProductModal />
    </>
  )
}
