import React, { useEffect, useState, createContext } from "react";

//API
import { getProducts } from "../services/api";

const ProductsContext = createContext();

const ProductContextProvider = (props) => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setProduct(await getProducts());
    };

    fetchAPI();
  }, []);

  return (
    <ProductsContext.Provider value={product}>
      {props.children}
    </ProductsContext.Provider>
  );
};

export default ProductContextProvider;
