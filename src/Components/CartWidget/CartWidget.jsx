import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';


const CartWidget = () => {
    const {plusItemQuantity} = useContext(CartContext);
    return (
        <div>
            <Link to="/Cart">
                <button type="button" className="btn btn-light position-relative mx-3" >
                    <img src="../assets/cart.png" alt="cart" />
                    <span className="position-absolute top-0 start-0 translate-middle badge rounded-pill bg-danger">
                        {plusItemQuantity()} 
                    </span>
                </button>
            </Link>
        </div>
    );
}

export default CartWidget;
