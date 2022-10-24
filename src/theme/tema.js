import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";
 
export const tema = createTheme({
    palette:{
        primary: {
            main: '#F96167'
        },
        secondary:{
            main: '#FCE77D'
        },
        error: {
            main: red.A400
        },
    },
})