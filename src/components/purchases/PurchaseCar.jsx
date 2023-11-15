import React from 'react'
import './PurchaseCar.css'
import { useNavigate } from 'react-router-dom'
const PurchaseCar = ({prod}) => {
  const navigate = useNavigate()
  const handleViewProd = () => {
    navigate(`/products/${prod.productId}`)
  }
  console.log(prod);
  return (
    <article onClick={handleViewProd} className='purchase__container'>
        <img className='purchase__img'src={prod.product.images[2].url} alt="" />
        <p className='purchase__title'>{prod.product.title}</p>
        <div className='purchase__desc'>
            <span className='purchase__quantity'>{prod.quantity}</span>
            <span className='purchase__price'>${prod.product.price}</span>
        </div>
    </article>
  )
}

export default PurchaseCar