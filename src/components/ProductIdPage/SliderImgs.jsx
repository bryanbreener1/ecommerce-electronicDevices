import React, { useState } from "react";
import "./styles/SliderImgs.css";

const SliderImgs = ({ product }) => {
  const [indexImg, setIndexImg] = useState(0);

  const styleMovible = {
    transform: `translateX(calc((-${indexImg} / 3) * 100%))`,
  };

  const handleRight = () => {
    if (indexImg < 2) {
      setIndexImg(indexImg + 1);
    } else {
      setIndexImg(0);
    }
  };

  const handleLeft = () => {
    if (indexImg > 0) {
      setIndexImg(indexImg - 1);
    } else {
      setIndexImg(2);
    }
  };

  const handleShowImg = (i) => {
    setIndexImg(i)
  }

  return (
    <div className="slider__container">
      <div className="slider">
        <button onClick={handleLeft} className="slider__btn btn__left">
          &lt;
        </button>
        <div style={styleMovible} className="slider__movible">
          {product?.images.map((imgInfo) => (
            <div className="slider__img-container" key={imgInfo.id}>
              <img className="slider__img" src={imgInfo.url} alt="" />
            </div>
          ))}
        </div>
        <button onClick={handleRight} className="slider__btn btn__right">
          &gt;
        </button>
      </div>
      <div className="slider__footer">
        {product?.images.map((imgInfo, i) => (
            <div onClick={()=>handleShowImg(i)} className={`slider__footer-container ${i === indexImg && 'slider__img-active'}`}key={imgInfo.id}>
                <img className="slider__img" src={imgInfo.url} alt="" />
            </div>
        ))}
      </div>
    </div>
  );
};

export default SliderImgs;
