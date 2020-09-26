import React, { useState, useEffect } from "react";
import { getProducts } from "../services/products";

const Gallery = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then(initialProducts => setProducts(initialProducts));
  });

  return (
    <div className="gallery">
      {products &&
        products.map(product => {
          return (
            <article className="card">
              <img className="card-img" src={product.img} alt="toy-car" />
              <div className="card-content">
                <h3 className="card-name">{product.name}</h3>
                <div className="card-price">Price</div>
              </div>
            </article>
          );
        })}
    </div>
  );
};

export default Gallery;
