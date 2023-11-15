import './App.css'
import { Route, Routes } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getAllProductsThunk } from './store/slices/products.slice'
import Home from './pages/Home'
import ProductIdPage from './pages/ProductIdPage'
import Register from './pages/RegisterPage'
import Header from './components/share/Header'
import CarPage from './pages/CarPage'
import { getCarThunk } from './store/slices/car.slice'
import LoginPage from './pages/LoginPage'
import PurchasePage from './pages/PurchasePage'
import ProtectecRoutes from './pages/ProtectecRoutes'
import Footer from './components/share/Footer'

function App() {

  const dispatch = useDispatch()
  
  useEffect(()=>{
      dispatch(getAllProductsThunk())
      dispatch(getCarThunk())
  },[])

  return (
    <div className='app'>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products/:id' element={<ProductIdPage/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route element={<ProtectecRoutes/>}>
          <Route path='/car' element={<CarPage/>}/>
          <Route path='/purchases' element={<PurchasePage/>}/>
        </Route>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
