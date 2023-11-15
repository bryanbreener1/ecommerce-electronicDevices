import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CarElement from '../components/car/CarElement';
import usePurchase from '../hooks/usePurchases';
import { useNavigate } from 'react-router-dom';
import './styles/CarPage.css'

const CarPage = ({isCarShown, setCarShown}) => {
  const car = useSelector(states => states.car)
  const navigate = useNavigate()
  
  const totalprice = car.reduce((acc, curr)=>{
    const subtotalPerProduct = curr.quantity * curr.product.price
    return acc + subtotalPerProduct
  }, 0)
  
  const {makePurchase} = usePurchase()

  const handlerBuyNow = () =>{
    makePurchase()
    navigate('/purchases')
    setCarShown(false)
  }
  const showCar={
    display: isCarShown ? "block" : "none"
  }

  return (
    <section style = {showCar} className='car__container'>
      <div className='car__products'>
        <h2 className='car__title'>Shopping car</h2>
        <div className='car__element'>
          {
            car.map(prod=>(
              <CarElement
                key={prod.id}
                prod={prod}
              />
            ))
          }
      </div>
      </div>
      <footer className='car__footer'>
        <div className='car__total'>
          <span>total:</span><span>${totalprice}</span>
        </div>
        <button className='car__button' onClick={handlerBuyNow}>BUY NOW</button>
      </footer>
    </section>
  )
}

export default CarPage