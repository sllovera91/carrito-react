import { Box, Container, Typography } from '@mui/material';
import { useState } from 'react';
import Modal from 'react-modal';
import { useUiStore } from '../hooks/useUiStore';



const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

 Modal.setAppElement('#root');


export const ProductModal = () => {

    const { isModalOpen, closeProduct } = useUiStore()

    const [productValues, setProductValues] = useState({
        title:'Prueba',
        img:'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
        precio: '$200',
        descripcion: 'CONTEXT tracks the business and consumer technology markets. Trusted by the world CONTEXT tracks the business and consumer technology markets. Trusted by the world CONTEXT tracks the business and consumer technology markets. Trusted by the world CONTEXT tracks the business and consumer technology markets. Trusted by the world CONTEXT tracks the business and consumer technology markets. Trusted by the world'
    })

    const onCloseModal = () => {
        console.log('cerrando')
    }


  return (
    <Modal
        isOpen={ isModalOpen }
        onRequestClose={ closeProduct }
        style={customStyles}
        className='modal'
        overlayClassName='modal-fondo'
        closeTimeoutMS={ 200 }
      >
    <Box sx={{ display: 'flex', textAlign: 'Left' }}>
    <Container maxWidth="sm">
       <h1 style={{textAlign: 'center'}}> {productValues.title} </h1>
        <hr />
    <div className="form-group mb-2" style={{textAlign: 'center'}}>       
        <img src={productValues.img} alt={productValues.title} />
    </div>

    <div className="form-group mb-2">
    </div>

    <div className="form-group mb-2">
        <b>Descripcion</b>
        <p>{productValues.descripcion}</p>
    </div>

    <div className="form-group mb-2">
    </div>

        <div className="form-group mb-2">
            <Typography 
            >  PRECIO: {productValues.precio}
            </Typography>

        </div>

    <div className='BotonModal'>
        <button
            type="submit"
            onClick={ closeProduct }
            className="btn btn-outline-primary btn-block"
        >
            <i className="fa-solid fa-left-long"></i>
            <span > Volver </span>
        </button>

        <button
            type="submit"
            className="btn btn-outline-primary btn-block"
            onClick={ closeProduct }
        >
            <i className="fa-solid fa-cart-shopping"></i>
            <span> Comprar</span>
        </button>
    </div>

    </Container>
</Box>
       
      </Modal>
  )
}
