import React, { useContext } from "react";

//Context
import { cardContext } from "./../../context/CardContextProvider";

//Functions
import { shorten } from "../../helper/function";

//Icons
import trashIcon from "../../assets/icons/trash.svg";

const Cart = (props) => {
  const { dispatch } = useContext(cardContext);
  const { image, title, price, quantity } = props.data;

  return (
    <div>
      <img src={image} alt="product" />
      <div>
        <h3>{shorten(title)}</h3>
        <p>{price}</p>
      </div>
      <div>
        <span>{quantity}</span>
      </div>
      <div>
        {quantity > 1 ? (
          <button
            onClick={() => dispatch({ type: "DEREASE", payload: props.data })}
          >
            -
          </button>
        ) : (
          <button
            onClick={() =>
              dispatch({ type: "REMOVE_ITEM", payload: props.data })
            }
          >
            <img src={trashIcon} alt="trash" style={{ width: "20px" }} />
          </button>
        )}

        <button
          onClick={() => dispatch({ type: "INCREASE", payload: props.data })}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Cart;
