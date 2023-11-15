import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './styles/Header.css'
import { BiSolidUser,  } from "react-icons/bi";
import { AiFillShop } from "react-icons/ai";
import { BsFillCartFill } from "react-icons/bs";
import CarPage from '../../pages/CarPage';


const Header = () => {

    const [isCarShown, setCarShown] = useState(false);
    const navigate = useNavigate()
    const handleShowCar = () =>{
        if(localStorage.getItem('token')){
            setCarShown(!isCarShown)
        }else{
            navigate('/login')
        }
    }

    const carColor = {
        color: isCarShown ? "var(--color-red)" : "rgb(104, 103, 103)"
    }

  return (
    <div className='header__container'>
        <header className='header'>
            <h1 className='header__title'>
                <Link to='/'>e-commerce</Link>
            </h1>
            <nav className='header__nav'>
                <ul className='header__list'>
                    <li className='header__list-item form__icon'>
                        <Link to='/login'><BiSolidUser/><span className="icon__text">Login</span></Link>
                    </li>
                    <li className='header__list-item form__icon'>
                        <Link to='/purchases'><AiFillShop /><span className="icon__text">Purchase</span></Link>
                    </li>
                    <li className='header__list-item form__icon'>
                        <p onClick={handleShowCar} style={carColor} ><BsFillCartFill />
                        <span className="icon__text">Car</span></p>
                        <CarPage isCarShown={isCarShown} setCarShown={setCarShown}/>
                    </li>
                </ul>
            </nav>
        </header>
    </div>
  )
}

export default Header