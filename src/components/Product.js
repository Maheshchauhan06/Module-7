import React from 'react'
import './Product.css'

const Product = ({ count, setcount,name, id, img, oldprice, newprice}) => {
  
 const increament =()=>{
   setcount(count+1)
 }


  return (
    <> <div className="product-box">
     <div className="product-img">
     <img src={img} alt="check network connection" />
     </div>
     <p>{name}</p>
     <div className="rating-price">
      <div className="star-icons">
<svg width="106" height="18" viewBox="0 0 106 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 0L11.0206 6.21885H17.5595L12.2694 10.0623L14.2901 16.2812L9 12.4377L3.70993 16.2812L5.73056 10.0623L0.440492 6.21885H6.97937L9 0Z" fill="#FFAC4B"/>
<path d="M31 0L33.0206 6.21885H39.5595L34.2694 10.0623L36.2901 16.2812L31 12.4377L25.7099 16.2812L27.7306 10.0623L22.4405 6.21885H28.9794L31 0Z" fill="#FFAC4B"/>
<path d="M53 0L55.0206 6.21885H61.5595L56.2694 10.0623L58.2901 16.2812L53 12.4377L47.7099 16.2812L49.7306 10.0623L44.4405 6.21885H50.9794L53 0Z" fill="#FFAC4B"/>
<path d="M75 0L77.0206 6.21885H83.5595L78.2694 10.0623L80.2901 16.2812L75 12.4377L69.7099 16.2812L71.7306 10.0623L66.4405 6.21885H72.9794L75 0Z" fill="#FFAC4B"/>
<path d="M97 0L99.0206 6.21885H105.56L100.269 10.0623L102.29 16.2812L97 12.4377L91.7099 16.2812L93.7306 10.0623L88.4405 6.21885H94.9794L97 0Z" fill="#FFAC4B"/>
</svg>

      </div>
      <div className="price">
      <p> {oldprice}<span>/-</span></p><h2>{newprice}</h2>
      </div>
     </div>
     <button onClick={()=>increament()}  ><h3>Add To CART</h3></button>
    </div>
    </>
  )
}

export default Product