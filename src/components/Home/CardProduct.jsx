import React from "react";
import './styles/CardProduct.css'
import { useNavigate } from "react-router-dom";
import { postCarThunk } from "../../store/slices/car.slice";
import { useDispatch } from "react-redux";

const CardProduct = ({ product }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleDetail = () => {
    navigate(`/products/${product.id}`)
  }
  const handleAddCart = (e) =>{
    e.stopPropagation()
    dispatch(postCarThunk(product))
  }



  return (
    <article onClick={handleDetail} className="product">
      <header className="product__header">
        <div  className="product__img-container">
            <img className="product__img" src={product.images[0].url} alt="" />
        </div>
        <div className="product__img-container">
            <img className="product__img" src={product.images[1].url} alt="" />
        </div>
      </header>
      <section className="product__body">
        <header className="product__titles">
          <h3 className="product__brand">{product.brand}</h3>
          <h2 className="product__name">{product.title}</h2>
        </header>
        <div className="product__bottom">
          <div className="product__price">
            <h3 className="product__price-label">price</h3>
            <h3 className="product__price-value">{product.price}</h3>
          </div>
          <button onClick={handleAddCart} className="product__btn">
            <i className="bx bx-cart-alt"></i>
          </button>
        </div>
      </section>
    </article>
  );
};

export default CardProduct;
