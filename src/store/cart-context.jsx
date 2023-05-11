import { createContext, useReducer, useState } from "react";

export const cartContext = createContext({
  items: [],
  totalAmount: 0,
});

export const CartProvider = ({ children }) => {
  const [cartState, setCartState] = useState([]);

  const amount = cartState.reduce((prev, current) => prev + current.amount, 0);
  const totalPrice = cartState.reduce(
    (prev, current) => prev + current.price * current.amount,
    0
  );

  function addItem(data) {
    if (!cartState.length) {
      return setCartState([data]);
    }

    const isExist = cartState.find((item) => item.title === data.title);

    if (!isExist) {
      return setCartState([...cartState, data]);
    }

    const updateItem = cartState.map((item) => {
      if (item.id === data.id) {
        return {
          ...item,
          amount: item.amount + data.amount,
        };
      }
      return item;
    });

    setCartState([...updateItem]);
  }
  console.log(cartState);

  function increment(id) {
    const updateItem = cartState.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          amount: item.amount + 1,
        };
      }
      return item;
    });

    setCartState([...updateItem]);
  }
  function decrement(id) {
    const updateItem = cartState.map((item) => {
      if (item.id === id && item.amount !== 0) {
        return {
          ...item,
          amount: item.amount - 1,
        };
      }
      return item;
    });

    setCartState([...updateItem]);
  }

  const cartValue = {
    items: cartState,
    totalAmount: amount,
    totalPrice: totalPrice,
    addItem,
    increment,
    decrement,
  };

  return (
    <cartContext.Provider value={cartValue}>{children}</cartContext.Provider>
  );
};
