import { CssBaseline } from "@mui/material"
import { ThemeProvider } from "@mui/system"
import { tema } from './tema'

export const AppTheme = ({ children }) => {
  return (
    <ThemeProvider theme={ tema }>
        <CssBaseline />
        {children}
    </ThemeProvider>
  )
}
