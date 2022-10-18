import axios from "axios";

export const totalProductos = async (state) => {
    const peticion = await axios.get('https://fakestoreapi.com/products')
    state(peticion.data)
}