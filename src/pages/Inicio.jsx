import { Container, Grid, Box, Button, Typography, CircularProgress } from "@mui/material"
import { useEffect, useState } from "react"
import { totalProductos } from "../helpers/useAxios"

export const Inicio = () => {
  const [productos, setProductos] = useState(null)


  useEffect(() => {
    totalProductos(setProductos)
  }, [])

  return (
    <Box sx={{ mt: 13, mb: 8 }}>
      <Container maxWidth="lg">
        <Grid container spacing={5}>
        { productos != null ? 
          productos.map( (product) => (
            <Grid item xs={12} sm={3} key={product}>
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
                <p>Cantidad: 0</p>
                <Button   size="small"> <i className="fa-solid fa-minus"></i> </Button>
              </div>
            </Box>
            </Grid>
          ))         
          : ( <CircularProgress size="6rem" sx={{ mx: 'auto', mt: '10rem', alignSelf: 'center'}}/>)}
        </Grid>
      </Container>
    </Box>
  )
}
