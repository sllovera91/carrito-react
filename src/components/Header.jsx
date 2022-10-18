import { AppBar, Toolbar, Typography } from "@mui/material"


export const Header = () => {
  return (
      <AppBar position='fixed'>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between'}}>
          <div className="Logo">
            <Typography variant='h6'>Santiago Carrito</Typography>
          </div>
          <div className="Usuario">
            <p>Bienvenido: Usuario</p>
          </div>
        </Toolbar>
      </AppBar>

  )
}
