import React, { useReducer, createContext } from "react";

const intialState = {
  selectedItem: [],
  itemCounter: 0,
  total: 0,
  checkout: false,
};

const sumItem = (item) => {
  const itemCounter = item.reduce(
    (total, product) => total + product.quantity,
    0
  );

  const total = item.reduce(
    (total, product) => total + product.price * product.quantity.toFixed(2),
    0
  );

  return { itemCounter: itemCounter, total: total };
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      if (!state.selectedItem.find((item) => item.id === action.payload.id)) {
        state.selectedItem.push({
          ...action.payload,
          quantity: 1,
        });
      }
      return {
        ...state,
        selectedItem: [...state.selectedItem],
        ...sumItem(state.selectedItem),
        checkout: true,
      };

    case "REMOVE_ITEM":
      const newSelectedItems = state.selectedItem.filter(
        (item) => item.id != action.payload.id
      );

      return {
        ...state,
        selectedItem: [...newSelectedItems],
        ...sumItem(state.selectedItem),
      };

    case "INCREASE":
      const indexI = state.selectedItem.findIndex(
        (item) => item.id === action.payload.id
      );
      state.selectedItem[indexI].quantity++;
      return {
        ...state,
        ...sumItem(state.selectedItem),
      };

    case "DEREASE":
      const indexD = state.selectedItem.findIndex(
        (item) => item.id === action.payload.id
      );
      state.selectedItem[indexD].quantity--;
      return {
        ...state,
        ...sumItem(state.selectedItem),
      };

    case "CHECKOUT":
      return {
        selectedItem: [],
        itemCounter: 0,
        total: 0,
        checkout: true,
      };
    case "CLEAR":
      return {
        selectedItem: [],
        itemCounter: 0,
        total: 0,
        checkout: false,
      };
    default:
      return state;
  }
};

export const cardContext = createContext();

const CardContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, intialState);
  return (
    <cardContext.Provider value={{ state, dispatch }}>
      {children}
    </cardContext.Provider>
  );
};

export default CardContextProvider;
