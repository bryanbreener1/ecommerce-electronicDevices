import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import useAuth from '../hooks/useAuth'
import './styles/LoginPage.css'
import { Link } from 'react-router-dom'

const LoginPage = () => {
  const baseurl = 'https://e-commerce-api-v2.academlo.tech/api/v1'
  const {register, handleSubmit, reset} = useForm()

  const {loginUser, logOut} = useAuth(baseurl)

  const [isLogged, setIsLogged] = useState(false)

  const submit = (data) => {
    loginUser('/users/login', data, setIsLogged)
    reset({
      email:'',
      password:''
    })
  }
  const handleLogOut = () => {
    logOut(setIsLogged)
  }

  return (
    <div className='form__wrapper'>
      {
        localStorage.getItem('token') || isLogged
        ? (
          <div className='container__logged'>
            <div><i className='bx bxs-user-circle' ></i></div>
            <p>Welcome back {JSON.parse(localStorage.getItem('user')).firstName} {JSON.parse(localStorage.getItem('user')).lastName}</p>
            <button onClick={handleLogOut}>Log Out</button>
          </div>
        )
        :(
          <div className='form__register'>
          <h2 className='form__title'>LOGIN</h2>
    
          <form className ="form__container" onSubmit={handleSubmit(submit)}>
            <div className='form__data-login'>
              <div className='form__data-login-title'>Test data</div>
              <div className='form__data'>
                <i className='bx bxs-envelope'></i>
                <p>bryan@gmail.com</p>
              </div>
              <div className='form__data'>
                <i className='bx bxs-lock-alt'></i>
                <p>testing</p>
              </div>
            </div>
            <div className='form__file'>
              <label htmlFor="email">Email</label>
              <input {...register('email')} type="email" id='email'/>
            </div>
            <div className='form__file'>
              <label htmlFor="password">Password</label>
              <input {...register('password')}type="password" id='password'/>
            </div>
            <button className='form__button'>Login</button>
            <p className='form__getaccount'>Don't have an account? <Link to="/register">Sign up</Link></p>
          </form>
          </div>
        )
      }

    </div>
  )
}

export default LoginPage