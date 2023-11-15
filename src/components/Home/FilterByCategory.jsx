import React, { useEffect } from 'react'
import useFetch from '../../hooks/useFetch'
import { getAllProductsThunk } from '../../store/slices/products.slice'
import { useDispatch } from 'react-redux'
import './styles/FilterByCategory.css'


const FilterByCategory = () => {
    const baseUrl = 'https://e-commerce-api-v2.academlo.tech/api/v1'
    const[categories, getCategories] = useFetch(baseUrl)
    const dispatch = useDispatch()

    useEffect(()=>{
        getCategories('/categories')
    },[])

    const handleFilterCategory = (id) =>{
        if(id){
            const url = `https://e-commerce-api-v2.academlo.tech/api/v1/products?categoryId= ${id}`
            dispatch(getAllProductsThunk(url))
        } else {
            dispatch(getAllProductsThunk())
        }
    }

  return (
    <article className='filter__container'>
        <h3 className='filter__title'>Categories</h3>
        <ul className='filter__list'>
            <li className='filter__list-item' onClick={()=>handleFilterCategory()}>All Categories</li>
            {
                categories?.map(category => (
                    <li className='filter__list-item'
                        onClick={()=>handleFilterCategory(category.id)}
                        key={category.id}
                    >{category.name}</li>
                ))
            }
        </ul>
    </article>
  )
}

export default FilterByCategory