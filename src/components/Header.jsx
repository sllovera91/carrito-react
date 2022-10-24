import { AppBar, Toolbar, Typography } from "@mui/material"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from "react-router-dom";

export const Header = () => {
  return (
      <AppBar position='fixed'>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between'}}>
          <div className="Logo">
            <Link style={{ color:'white'}}to={'/'}><Typography variant='h4'> The Market </Typography></Link>
          </div>
          <div className="Usuario">
          <Typography>
          <ShoppingCartIcon sx={{ mr: 1 }} />
            0
          </Typography>
          </div>
        </Toolbar>
      </AppBar>

  )
}
