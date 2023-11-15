import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import './styles//FilterByPrice.css'

const FilterByPrice = ({ setPriceMinMax, priceMinMax }) => {
  const { register, reset, handleSubmit } = useForm()
  const submit = (data) => {
    const min = data.from.trim() === "" ? 0 : +data.from;
    const max = data.to.trim() === "" ? Infinity : +data.to;
    setPriceMinMax({ min, max })
  }

  const handleReset = () => {
    setPriceMinMax({min:0, max:Infinity})
    reset({
      from:"",
      to:""
    })
  }
  return (
    <article className="container__price">
      <div className="price__header">
        <p>Price</p>
      </div>
      <form  className='price__form' onSubmit={handleSubmit(submit)}>
        <div className="price__input">
          <label className="price__input-label" htmlFor="from">From</label>
          <input className="price__input-value" type="number" id="from" {...register("from")} />
        </div>
        <div className="price__input">
          <label className="price__input-label" htmlFor="to">To</label>
          <input className="price__input-value" type="number" id="to" {...register("to")} />
        </div>
        <button className="price__button" >Filter Price</button>
      </form>
      {(priceMinMax.min !== 0 || priceMinMax.max !== Infinity) && (
          <button className="price__clean" style={{cursor:"pointer"}} onClick={handleReset}>From ${priceMinMax.min} to ${priceMinMax.max} (X)</button>
      )}
    </article>
  );
};

export default FilterByPrice;
