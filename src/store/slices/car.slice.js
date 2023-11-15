import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import getConfigAuth from "../../utils/getConfigAuth";

const carSlice = createSlice({
    name: 'car',
    initialState: [],
    reducers:{
        setCarG: (state, action) => action.payload,
        addProductCarG: (state, action) => [...state, action.payload],
        setQuantity: (state,action) => {
            const {productCarId, newQuantity} = action.payload
            state.map(prod =>{
                if(prod.id == productCarId) prod.quantity = newQuantity
            })
        },
        deleteProductCarG: (state, action) => {
            return state.filter(prod => action.payload !== prod.id)
        },
    }
})

export const {setCarG, addProductCarG, deleteProductCarG, setQuantity } = carSlice.actions

export default carSlice.reducer


export const updateCarThunk = (productCarId, newQuantity) => (dispatch) => {
    const url = `https://e-commerce-api-v2.academlo.tech/api/v1/cart/${productCarId}`
    const data = {
        quantity: newQuantity
    }
    const payload = {
        productCarId,
        newQuantity
    }

    axios.put(url,data,getConfigAuth())
        .then(res => {
            dispatch(setQuantity(payload))
        })
        .catch(err=>console.log(err))
}

export const getCarThunk = () => (dispatch) => {
    const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/cart'
    axios.get(url, getConfigAuth())
        .then(res => dispatch(setCarG(res.data)))
        .catch(err => err) 
}

export const postCarThunk = (product, quantity = 1) => (dispatch, getState) => {
    const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/cart'
    const data = {
        quantity,
        productId: product.id
    }
    const state = getState();
    const productExists = state.car.some(prod =>
        prod.productId === product.id
    )

    if(!productExists){
        axios.post(url, data, getConfigAuth())
        .then(res=>{
            const obj = {
                ...res.data,
                product: product 
            }
            dispatch(addProductCarG(obj))
        })
        .catch(err=>console.log(err))        
    }else{
        console.log('this product is already in the car');
    }

}


export const deleteCarThunk = (id) => (dispatch) => {
    const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/cart'
    axios.delete(`${url}/${id}` ,getConfigAuth())
        .then(res=>{
            dispatch(deleteProductCarG(id))
        })
        .catch(err=>{
            console.log(err);
        })
}