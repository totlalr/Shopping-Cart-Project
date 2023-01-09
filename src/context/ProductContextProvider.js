import React, { useEffect, useState, createContext } from "react";

//API
import { getProducts } from "../services/api";

export const ProductsContext = createContext();

const ProductContextProvider = ({ children }) => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setProduct(await getProducts());
    };

    fetchAPI();
  }, []);

  return (
    <ProductsContext.Provider value={product}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductContextProvider;
