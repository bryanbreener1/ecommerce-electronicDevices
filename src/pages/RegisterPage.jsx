import React from 'react'
import { useForm } from 'react-hook-form'
import './styles/RegisterPage.css'
import useFetch from '../hooks/useFetch'
import useAuth from '../hooks/useAuth'

const Register = () => {
  const baseUrl = 'https://e-commerce-api-v2.academlo.tech/api/v1/'
  const {register, handleSubmit, reset} = useForm()

  const {createUser} = useAuth(baseUrl)

  const submit = data =>{
    createUser('/users',data)
    reset({
      firstName:'',
      lastName:'',
      email:'',
      password:'',
      phone:''
    })  
    console.log(data);
  }

  return (
    <div className='form__wrapper'>
      <div className='form__register'>
          <h2 className='form__title'>REGISTER</h2>
          
          <form className ="form__container" onSubmit={handleSubmit(submit)} >
            <div className='form__file'>
              <label htmlFor="firstName">First name</label>
              <input {...register('firstName')} type="text" id='firstName'/>
            </div>
            <div className='form__file'>
              <label htmlFor="lastName">Last name</label>
              <input {...register('lastName')} type="text" id='lastName'/>
            </div>
            <div className='form__file'>
              <label htmlFor="email">Email</label>
              <input {...register('email')} type="email" id='email'/>
            </div>
            <div className='form__file'>
              <label htmlFor="password">Password</label>
              <input {...register('password')} type="password" id='password'/>
            </div>
            <div className='form__file'>
              <label htmlFor="phone">phone</label>
              <input {...register('phone')} type="number" id='phone'/>
            </div>
            <button className='form__button'>Submit</button>
          </form>
        </div>
    </div>
    
  )
}

export default Register