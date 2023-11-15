import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import ProductInfo from '../components/ProductIdPage/ProductInfo'
import SimilarProduct from '../components/ProductIdPage/SimilarProduct'
import SliderImgs from '../components/ProductIdPage/SliderImgs'
import './styles/ProductIdPage.css'

const ProductIdPage = () => {
  const {id} = useParams()
  const baseUrl = 'https://e-commerce-api-v2.academlo.tech/api/v1/'
  const [product, getproductById] = useFetch(baseUrl)

  useEffect(()=>{
    getproductById(`/products/${id}`)
  },[id])
  
  return (
    <div className='prod__byid-container'>
      <div className='prod__container-slide-desc'>
        <SliderImgs product={product}/>
        <ProductInfo product = {product}/>
      </div>
      <SimilarProduct product={product}/>
    </div>
  )
}

export default ProductIdPage