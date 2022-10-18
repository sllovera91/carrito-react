import axios from "axios"
import { Button, Box, Grid  } from "@mui/material"


const getProducts = async() => {
  const peticion = await axios.get('https://fakestoreapi.com/products')
  console.log(peticion.data)
}

getProducts();


export const Producto = () => {


  return (
    <Grid item xs={12} sm={3}>
      <Box sx={{ borderStyle: 'dotted' }}>  
            <h2> Hola </h2>
            <img src="https://img.freepik.com/vector-gratis/pelota-futbol-dibujado-mano_1034-741.jpg?w=2000" alt=""/>
            <p>price</p>
          <div className="Boton">
            <Button   size="small"> <i className="fa-solid fa-plus"></i> </Button>
            <p>Cantidad: 0</p>
            <Button   size="small"> <i className="fa-solid fa-minus"></i> </Button>
          </div>
          
      </Box>
    </Grid>

  )
}


