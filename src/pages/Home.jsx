import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CardProduct from '../components/Home/CardProduct';
import './styles/Home.css'
import FilterByCategory from '../components/Home/FilterByCategory';
import FilterByPrice from '../components/Home/FilterByPrice';

const Home = () => {
    const [inputValue, setInputValue] = useState('')
    const [showAside, setShowAside] = useState(false)
    const [priceMinMax, setPriceMinMax] = useState({
        min:0,
        max:Infinity
    })

    const products = useSelector(state => state.products)

    const handleSearchName = (e) => {
        setInputValue(e.target.value.toLowerCase())
    }

    const cbFilter = prod => prod.title.toLowerCase().includes(inputValue)

    const cbFilterPrice = prod => priceMinMax.min <= prod.price && prod.price <= priceMinMax.max

    const handleAside = () =>{
        setShowAside(!showAside)
    }

    const newClass = showAside ? 'aside__show': ''
    const overlayClass = showAside ? 'aside__overlay': 'nono'
    

  return (
    <div className='home__container'>
        <aside onClick={handleAside} className={`aside ${newClass}`}>
            <div className='aside__button-close'><i className='bx bx-x'></i></div>
            <div className='aside__fixed'>
                <FilterByPrice setPriceMinMax={setPriceMinMax} priceMinMax={priceMinMax}/>
                <FilterByCategory/>
            </div>
        </aside>
        {showAside &&
            <div onClick={handleAside} className={overlayClass}></div>
        }
        <section className='main'>
            <div className='container__input'>
                <input className='main__input'
                    value={inputValue}
                    onChange={handleSearchName} 
                    type="text"
                    placeholder='Dinamic browser, write something'
                />
                <div onClick={handleAside} className='button__filters'>
                    <i className='bx bxs-filter-alt'></i>
                    <span className='button__filters-lable'>Filters</span>
                </div>
            </div>

            <div className='container__allproducts'>
                {
                    products?.filter(cbFilter).filter(cbFilterPrice).map(product => (
                        <CardProduct
                            key={product.id}
                            product={product}
                        />
                    ))
                }
            </div>
        </section>

    </div>
  )
}

export default Home