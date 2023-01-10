import React, { useContext } from "react";
import { Link } from "react-router-dom";

//Context
import { ProductsContext } from "./../context/ProductContextProvider";

const ProductDetials = (props) => {
  const id = props.match.params.id;
  const data = useContext(ProductsContext);
  const product = data[id - 1];
  console.log(product);

  const { image, title, price, description, category } = product || {};

  return (
    <div>
      <img src={image} />
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
        <p>
          {" "}
          <span> Category</span>
          {category}
        </p>
        <div>
          <span>{price}$</span>
          <Link to="/products">Back to shop</Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetials;