import React, { useContext } from "react";
import { Link } from "react-router-dom";

//Context
import { cardContext } from "./../../context/CardContextProvider";

//Icons
import shopIcon from "../../assets/icons/shop.svg";

const Navbar = () => {
  const { state } = useContext(cardContext);
  return (
    <div>
      <div>
        <Link to="/products">Products</Link>
        <div>
          <Link to="/cart">
            <img src={shopIcon} alt="shop" />
          </Link>
          <span>{state.itemCounter}</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
