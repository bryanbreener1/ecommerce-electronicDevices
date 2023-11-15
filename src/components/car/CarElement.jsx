import { useDispatch } from 'react-redux'
import { deleteCarThunk, updateCarThunk } from '../../store/slices/car.slice'
import './CarElement.css'
import { useState } from 'react'

const CarElement = ({prod}) => {
    const dispatch = useDispatch()
    const [quantity, setQuantity] = useState(prod.quantity)
    const handleDelete = () => {
        dispatch(deleteCarThunk(prod.id))
    }
    const less = () =>{
        if(quantity>1){
            const newQuantity = quantity-1
            setQuantity(newQuantity)
            dispatch(updateCarThunk(prod.id, newQuantity))
        }
    }

    const add = () =>{
        const newQuantity = quantity+1
        setQuantity(newQuantity)
        dispatch(updateCarThunk(prod.id, newQuantity))
    
    }

  return (
    <article className='car__element-prod'>
        <section className='car__desc'>
            <header className='car__item-header'>
                <img src={prod?.product.images[0].url} alt="" />
            </header>
            <div className='car__desc-left'>
                <h3 className='car__element-title'>{prod?.product.title}</h3>
                <div className='car__element-quantity'>
                    <div onClick={less}><span>-</span></div>
                    <div><span>{quantity}</span></div>
                    <div onClick={add}><span>+</span></div>
                </div>
            </div>
            <button className='car__desc-right' onClick={handleDelete}>
                <i className='bx bx-trash'></i>
            </button>
        </section>
        <footer className='car__element-footer'>
            <span>Subtotal</span><span>$ {prod?.quantity * prod?.product.price}</span>
        </footer>

    </article>
  )
}

export default CarElement