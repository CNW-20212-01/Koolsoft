import React from 'react';
import "./Product.css";
import { add, remove } from "../redux/Slice/cartSlice";
import { useSnackbar } from 'notistack';
import { useDispatch, useSelector } from 'react-redux';



const Product = ({item}) => {
    const { cart } = useSelector((state) => state);
    const {enqueueSnackbar} = useSnackbar();
    const dispatch = useDispatch();


    const addToCart = () => {
        dispatch(add(item));
        enqueueSnackbar(`Item added to your cart successfully`, {
            variant: "success", // color: Green
            autoHideDuration: 3000,
          });
    };
    const removeFromCart = () => {
        dispatch(remove(item.id));
        enqueueSnackbar(`Item removed from your cart successfully`,{
            variant: "warning", //color: Red
            autoHideDuration: 3000,
        })
    }

    
  return (
    <>
        <div className="productCard">
            <img src={item.image} alt={item.title} />
            <h1 className='test1'>{item.title}
                <div className='test'>
                    {item.title}
                </div>
            </h1>
            
            <div className='product-info'>
                {cart.some((p) => p.id === item.id) ? (
                    <button className="button button1" onClick={removeFromCart}>Remove item</button>

                    ): (               
                    <button className="button button1" onClick={addToCart}>Add to item</button> 


                )}

                <h3>${item.price}</h3>

            </div>              
        </div>
        </>

   )
}

export default Product