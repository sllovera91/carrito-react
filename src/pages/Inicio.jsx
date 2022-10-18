import { Container, Grid, Box } from "@mui/material"
import { Producto } from "../components/Producto"

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
            <Producto key={product}>
            </Producto>
          ))
          : ('No hay personajes')}
        </Grid>
      </Container>
    </Box>
  )
}
