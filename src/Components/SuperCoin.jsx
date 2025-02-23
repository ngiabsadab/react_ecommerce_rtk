import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const SuperCoins = () => {
  /// This lets functional components set up and care for their own state variables,
  /// allowing them to store data that can change over time.
  const [superCoins, setSuperCoins] = useState(0);

  /// Now you need to retrieve the cartItems from the cart slice of the Redux store’s state to
  /// get the total quantity of number of products using the useSelector hook.
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  /// This lets functional components do side effects like getting data
  /// or changing the DOM after every view, which is how lifecycles work.
  useEffect(() => {
    if (totalAmount >= 100 && totalAmount < 200) {
      setSuperCoins(10);
    } else if (totalAmount >= 200 && totalAmount < 300) {
      setSuperCoins(20);
    } else if (totalAmount >= 300) {
      setSuperCoins(30);
    } else {
      setSuperCoins(0);
    }
  }, [totalAmount]);

  return (
    <div className="super-coins" style={{ textAlign: "center" }}>
      <h2 className="super-coins-title">Super Coins</h2>
      <p className="super-coins-info">
        You will earn {superCoins} super coins with this purchase.
      </p>
    </div>
  );
};

export default SuperCoins;
