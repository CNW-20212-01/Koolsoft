import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import "./Cart.css";
import { Typography } from "@material-ui/core";
import RemoveShoppingCartIcon from "@material-ui/icons/RemoveShoppingCart";
import { Link } from "react-router-dom";

const Cart = () => {
  const [totalAmount, setTotalAmount] = useState(0);
  const { cart } = useSelector((state) => state);
  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);
  return (
    <>
      {cart.length > 0 ? (
        <>
          <div className="cartPage">
            <div className="cartHeader">
              <p>Product</p>
              <p>Subtotal</p>
            </div>

            <div className="cartContainer">
              <div className="item">
                {cart.map((item) => {
                  return <CartItem key={item.id} item={item} />;
                })}
              </div>
            </div>

            <div className="cartGrossProfit">
              <div></div>
              <div className="cartGrossProfitBox">
                <p>Total Items : {cart.length} </p>
                <p>${totalAmount}</p>
              </div>
              <div></div>
              <div className="checkOutBtn">
                <button>Check Out</button>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="emptyCart">
            <RemoveShoppingCartIcon />

            <Typography>No Product in Your Cart</Typography>
            <Link to="/">View Products</Link>
          </div>
        </>
      )}
    </>
  );
};

export default Cart;
