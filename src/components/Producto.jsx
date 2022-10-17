import { Button  } from "@mui/material"

export const Producto = () => {
  return (
      <div className="card">
          <h2> Nombre del producto</h2>
          <hr/>
          <img src="https://img.freepik.com/vector-gratis/pelota-futbol-dibujado-mano_1034-741.jpg?w=2000" alt="" srcset="" />
          <p>Precio</p>
          <div className="Boton">
            <Button   size="small"> <i class="fa-solid fa-plus"></i> </Button>
            <p>Cantidad: 0</p>
            <Button   size="small"> <i class="fa-solid fa-minus"></i> </Button>
          </div>
      </div>

  )
}
