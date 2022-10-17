import { Container } from "@mui/material"
import { Producto } from "../components/Producto"


export const Inicio = () => {
  return (
    <Container maxWidth="fixed" sx={{ display: 'flex', mt: 12, justifyContent: 'space-between' }}>
        <div>
            <Producto />
            <Producto />
            <Producto />
            <Producto />
            <Producto />
            <Producto />

        </div>
    </Container>
  )
}
