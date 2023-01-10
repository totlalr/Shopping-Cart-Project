import React, { useContext } from "react";
import { Link } from "react-router-dom";
// Functions
import { shorten, isInCart, quantityCount } from "../../helper/function";

//Context
import { cardContext } from "./../../context/CardContextProvider";

//Icon
import trashIcon from "../../assets/icons/trash.svg";

const Product = ({ productData }) => {
  const { state, dispatch } = useContext(cardContext);

  return (
    <div>
      <img src={productData.image} alt="product" style={{ width: "200px" }} />
      <h3>{shorten(productData.title)}</h3>
      <p>{productData.price}</p>
      <div>
        <Link to={`/products/${productData.id}`}>Details</Link>
        <div>
          {quantityCount(state, productData.id) > 1 && (
            <button
              onClick={() =>
                dispatch({ type: "DEREASE", payload: productData })
              }
            >
              -
            </button>
          )}

          {quantityCount(state, productData.id) === 1 && (
            <button
              onClick={() =>
                dispatch({ type: "REMOVE_ITEM", payload: productData })
              }
            >
              <img src={trashIcon} alt="trash" style={{ width: "20px" }} />
            </button>
          )}
          {isInCart(state, productData.id) ? (
            <button
              onClick={() =>
                dispatch({ type: "INCREASE", payload: productData })
              }
            >
              +
            </button>
          ) : (
            <button
              onClick={() =>
                dispatch({ type: "ADD_ITEM", payload: productData })
              }
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
