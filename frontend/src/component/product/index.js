import React from "react";
import ProductInfo from "../productinfo";
import { useState } from "react";
import "./style.css"

const Product = () => {
  const [products, setproducts] = useState(ProductInfo);
  const [desc, setdesc] = useState("");
  const [img, setimg] = useState("");
  const [price,setprice] =useState("")
  const [name , setname] =useState("")
  console.log(products);



  return (
    <div>
        <h1>Cake Factory</h1>
        <div className="di">
      {
        products.map((element, index) => {
          return <div className="con">
      
            
            <img 
              src={element.image}
              onClick={() => {
                setdesc(element.descripion);    
                setimg(element.image);
                setprice(element.price);
                setname(element.name)
              }}
            ></img>
            
          </div>;
        })
        
      }
      </div>



<div className="box">
    <h4>{name}</h4>
      <p>{desc}</p>
      <br/>
     <img src={img}/>
      <br/>
      <h5>{price}</h5>
      </div>
    </div>
  );
};
export default Product;
