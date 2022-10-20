import React from 'react'
import { useGetProductosByIdQuery } from '../store/api/productosApi';


export const Productos = () => {
    

  const { data: productos = [], isLoading } = useGetProductosByIdQuery(productos);


  return (
    <div>

    <p>El producto es {productos} </p>

    </div>
  )
}
