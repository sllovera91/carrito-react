import { AppBar, Toolbar, Typography } from "@mui/material"
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


export const Header = () => {

  const { marketTotalCantidad } = useSelector( state => state.market)

  

  
  return (
      <AppBar position='fixed'>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between'}}>
          <div className="Logo">
            <Link style={{ color:'white'}}to={'/'}><Typography variant='h4'> The Market </Typography></Link>
          </div>
          <div className="Usuario">
          <Typography>
          <Link to={'/Carrito'} >
            <ShoppingCartIcon sx={{ mr: 1 }}   />  
            Ir al Carrito !
          </Link>
          </Typography>
          </div>
        </Toolbar>
      </AppBar>

  )
}
