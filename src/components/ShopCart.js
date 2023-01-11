import React, { useContext } from "react";
import { Link } from "react-router-dom";

//Components
import Cart from "./shared/Cart";

//Context
import { cardContext } from "./../context/CardContextProvider";

const ShopCart = () => {
  const { state, dispatch } = useContext(cardContext);
  return (
    <div>
      <div>
        {state.selectedItem.map((item) => (
          <Cart key={item.id} data={item} />
        ))}
      </div>

      {state.itemCounter > 0 && (
        <div>
          <p>
            <span>Total Items :{state.itemCounter}</span>
          </p>
          <p>
            <span>Total Payments :{state.total}</span>
          </p>
          <div>
            <button onClick={() => dispatch({ type: "CHECKOUT" })}>
              Check Out
            </button>
            <button onClick={() => dispatch({ type: "CLEAR" })}>clear</button>
          </div>
        </div>
      )}

      {state.checkout && (
        <div>
          <h3>Checked Out Successfully</h3>
          <Link to="/products">Buy More</Link>
        </div>
      )}

      {!state.checkout && state.itemCounter === 0 && (
        <div>
          <h3>Want to Buy?</h3>
          <Link to="/products">Go To Shop</Link>
        </div>
      )}
    </div>
  );
};

export default ShopCart;
