import React, { useEffect } from 'react'
import useFetch from '../../hooks/useFetch'
import CardProduct from '../Home/CardProduct'
import './styles/SimilarProduct.css'

const SimilarProduct = ({product}) => {
    const id = product?.category.id
    const baseUrl = 'https://e-commerce-api-v2.academlo.tech/api/v1/'
    const [products, getProductsByCategory] = useFetch(baseUrl)
    

    useEffect(() => {
        if(product)  getProductsByCategory(`products?categoryId=${id}`)
    }, [product])

  return (
    <div className='similar__container'>
        <h2 className='similar__title'>Similar products</h2>
        <div className='container__allproducts'>
            {
                products?.map(prod => {
                    if(prod.id !== product.id){
                        return(
                            <CardProduct 
                                key={prod.id}    
                                product={prod}
                            />)
                    }

                })
            }
        </div>
    </div>
  )
}

export default SimilarProduct