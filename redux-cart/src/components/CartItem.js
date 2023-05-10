import React from "react";
import "./CartItem.css";
import {remove} from "../redux/Slice/cartSlice";
import { useDispatch } from "react-redux";
import { useSnackbar } from "notistack";



const CartItem = ({item}) => {
    // const { cart } = useSelector((state) => state);

    const dispatch = useDispatch();

    const { enqueueSnackbar } = useSnackbar();
  
    const removeItemFromCart = () => {
      dispatch(remove(item.id));
      enqueueSnackbar(`Item removed from your cart!`, {
        variant: "warning",
        autoHideDuration: 3000,
      });
    };
  return (
    <div className="'CartItemCard">
        <div className="cart-item1">
            <img src={item.image} alt="" />
            <div className="cart">
                <h1>{item.title}</h1>
                <h2>${item.price}</h2>
                <p onClick={removeItemFromCart}>Remove</p>

            </div> 
        </div>
        


    </div>

  )
}

export default CartItem;
