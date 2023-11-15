import React, { useState } from 'react'
import './styles/ProductInfo.css'
import { useDispatch } from 'react-redux'
import { postCarThunk } from '../../store/slices/car.slice'

const ProductInfo = ({product}) => {
    const [counter, setCounter] = useState(1)
    const dispatch = useDispatch()


    const handleAdd = () => {
        setCounter(counter+1)

    }
    
    const handleLess = () => {
        if(counter > 1){
            setCounter(counter-1)
        }
    }

    const handleAddToCar = () =>{
        dispatch(postCarThunk(product, counter))
        console.log(counter);
    }

    return (
    <section className='productInfo'>
        <h3 className='productInfo__brand'>{product?.brand}</h3>
        <h2 className='productInfo__title'>{product?.title}</h2>
        <p className='productInfo__description'>{product?.description}</p>
        <footer className='productInfo__footer'>
            <ul className='productInfo__details'>
                <li className='productInfo__price'>
                    <span className='productInfo__price-label'>Price</span>
                    <span className='productInfo__price-value'>${product?.price}</span>
                </li>
                <li className='productInfo__quantity'>
                    <span className='productInfo__quantity-label'>Quantity</span>
                    <div className='productInfo__quantity-value'>
                        <div onClick={handleLess} className='productInfo__less'>-</div>
                        <div className='productInfo__quantity-number'>{counter}</div>
                        <div onClick={handleAdd} className='productInfo__add'>+</div>
                    </div>
                </li>
            </ul>
            <button onClick={handleAddToCar} className='productInfo__btn'>Add to car<i className='bx bx-cart'></i></button>
        </footer>
    </section> 
  )
}

export default ProductInfo