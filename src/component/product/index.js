import React from "react";
import ProductInfo from "../productinfo";
import { useState } from "react";
import "./style.css";
import { Button } from "@material-ui/core";

const Product = () => {
  const [products, setproducts] = useState(ProductInfo);
  const [desc, setdesc] = useState("");
  const [img, setimg] = useState(
    "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-1043451_11-4713959.jpg"
  );
  const [price, setprice] = useState("");
  const [name, setname] = useState("");
  console.log(products);

  return (
    <div>
      <h1 className="title">Cake Factory</h1>
      <div className="di">
        <div className="container">
          {products.map((element, index) => {
            return (
              <div className="one-img">
                <img src={element.image}></img>
                <button
                  className="but"
                  onClick={() => {
                    setdesc(element.descripion);
                    setimg(element.image);
                    setprice(element.price);
                    setname(element.name);
                  }}
                >
                  Ingredients
                </button>
              </div>
            );
          })}
        </div>
      </div>

      <div className="all">
        <div className="box">
          {" "}
          <img src={img} />
        </div>

        <div className="information">
          <p>{price}</p>
          <p>{name}</p>
          <p>{desc}</p>
        </div>
      </div>
    </div>
  );
};
export default Product;
