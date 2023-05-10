import React from 'react';
import "./Navbar.css";
import { Link } from 'react-router-dom';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { useSelector } from 'react-redux';


const Navbar = () => {
    const {cart} = useSelector((state) => state);
  return (
    <>
    <div className='nav'>
        <Link to={"/"}>
            <div className='logo'>
                <h1>Redux-Cart</h1>
            </div>
        </Link>
        <Link to={"/cart"}>
            <div className='cart'>
                <ShoppingBasketIcon className="icon"/>
                {cart.length > 0 &&  (
                 <h3>{cart.length}</h3>

                )}
            </div>
        </Link>

    </div>
    </>
  )
}

export default Navbar