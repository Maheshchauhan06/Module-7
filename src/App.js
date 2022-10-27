import { useState } from 'react';
import './App.css';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Product from './components/Product';
import { createContext } from 'react';

 const  App =()=> {

  const [count, setcount] = useState(0)
  const mycontext = createContext();

  const userResponse = [];
  const [allRes, setAllRes] = useState([]);
  const [stopLoop, setStopLoop] = useState(false);
  if (!stopLoop) {
    fetch(
      "https://acciojob-module-7-sept-2022-default-rtdb.asia-southeast1.firebasedatabase.app/products.json"
    )
      .then((response) => response.json())
      .then((data) => {
        for (const i in data) {
          console.table(
            data[i].id,
            data[i].productImage,
            data[i].productName,
            data[i].oldPrice,
            data[i].newPrice
          );
          userResponse.push({
            id: data[i].id,
            productImage: data[i].productImage,
            productName: data[i].productName,
            oldPrice: data[i].oldPrice,
            newPrice: data[i].newPrice,
          });
        }
        setAllRes(userResponse);
      });
    setStopLoop(true);
  }


  return (
    <>  <mycontext.Provider value={count,setcount} >
    <div className="container">
    <div className="navbar"><Navbar count ={count} /></div>
      <div className="Banner"><Banner/></div>
       <div className="product"> 
       <h3>Products</h3>
       <div className="product-item">
          { allRes.map((item)=>{
            return(
              <p> <Product count={count} setcount={setcount}  id={ item.id} img={ item.productImage} name={item.productName}  oldprice={item.oldPrice} newprice={item.newPrice } /> </p>
            )
          })

          } 
       </div>
        </div>
        <div className="footer"><Footer/></div>
    </div>
    </mycontext.Provider>
    </>
  );
}

export default App;
