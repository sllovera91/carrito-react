import { AppBar, Toolbar } from "@mui/material"


export const Header = () => {
  return (
      <AppBar position='fixed'>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between'}}>
          <div className="Logo">
            <h3>Santiago Carrito</h3>
          </div>
          <div className="Usuario">
            <p>Bienvenido: Usuario</p>
          </div>
        </Toolbar>
      </AppBar>

  )
}
