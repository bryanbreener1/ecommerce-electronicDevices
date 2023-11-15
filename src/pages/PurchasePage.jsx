import React, { useEffect } from 'react'
import usePurchase from '../hooks/usePurchases'
import PurchaseCar from '../components/purchases/PurchaseCar'
import './styles/PurchasePage.css'
const PurchasePage = () => {
    
    const {purchases, getAllPurchases} = usePurchase()
  
    useEffect(()=>{
        getAllPurchases()
    },[])

    return (
    <div className='purchase__page'>
        <h2 className='purchases__title'>My purchases</h2>
        <div>
            {
                purchases?.map(prod => (
                    <PurchaseCar
                        key={prod.id}
                        prod = {prod}
                    />
                ))
            }
        </div>
    </div>
  )
}

export default PurchasePage