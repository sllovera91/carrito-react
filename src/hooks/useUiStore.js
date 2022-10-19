import { useDispatch, useSelector } from "react-redux"
import { onCloseModalOpen, onOpenModal } from "../store/uiSlice";


export const useUiStore = () => {

const dispatch = useDispatch();

 const { isModalOpen } = useSelector( state => state.ui);

 const openProduct  = () => {
    dispatch( onOpenModal() )
 }

 const closeProduct  = () => {
    dispatch( onCloseModalOpen() )
 }

 return {
    isModalOpen,
    openProduct,
    closeProduct,
 }

}