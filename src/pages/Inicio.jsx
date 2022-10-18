import { Container, Grid, Box, Button } from "@mui/material"

import { useEffect, useState } from "react"
import { totalProductos } from "../helpers/useAxios"

export const Inicio = () => {
  const [productos, setProductos] = useState(null)


  useEffect(() => {
    totalProductos(setProductos)
  }, [])


  return (
    <Box sx={{ mt: 13 }}>
      <Container maxWidth="lg">
        <Grid container spacing={5}>
        { productos != null ? 
          productos.map( (product) => (
            <Grid item xs={12} sm={3} key={product}>
            <Box sx={{ border: 1 }}>
              <h3>{product.title}</h3>
              <img src={product.image} alt=""/>
              <p>USD-{product.price}</p>
              <div className="Boton">
                <Button   size="small"> <i className="fa-solid fa-plus"></i> </Button>
                <p>Cantidad: 0</p>
                <Button   size="small"> <i className="fa-solid fa-minus"></i> </Button>
              </div>
            </Box>
            </Grid>
          ))         
          : ('Cargando')}
        </Grid>
      </Container>
    </Box>
  )
}
