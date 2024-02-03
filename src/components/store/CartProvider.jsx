import React, { useState, useEffect, useContext } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  const [items, setItems] = useState([]);
  const cartContext = useContext(CartContext);

  const addItemToCartHandler = (newItem, quantity) => {
    const existingItemIndex = items.findIndex(
      (item) => item.title === newItem.title
    );

    if (existingItemIndex !== -1) {
      // update already existing order
      let updatedCartItems = [...items];
      updatedCartItems[existingItemIndex].quantity += quantity;
      setItems(updatedCartItems);
    } else {
      // new order, simply insert data
      setItems((prevItems) => [...prevItems, { ...newItem, quantity }]);
    }
  };

  const removeItemFromCartHandler = (item, quantity) => {};

  useEffect(() => {
    console.log("cart_context:", items);
  }, [items]);

  const cartContextValue = {
    items: items,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContextValue}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
