import React, { useReducer, createContext } from "react";

const intialState = {
  selectedItem: [],
  itemCounter: 0,
  total: 0,
  checkout: false,
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
      };

    case "REMOVE_ITEM":
      const newSelectedItems = state.selectedItem.filter(
        (item) => item.id != action.payload.id
      );

      return {
        ...state,
        selectedItem: [...newSelectedItems],
      };

    case "INCREASE":
      const indexI = state.selectedItem.findIndex(
        (item) => item.id === action.payload.id
      );
      state.selectedItem[indexI].quantity++;
      return {
        ...state,
      };

    case "DEREASE":
      const indexD = state.selectedItem.findIndex(
        (item) => item.id === action.payload.id
      );
      state.selectedItem[indexD].quantity--;
      return {
        ...state,
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
