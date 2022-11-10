import React from 'react';
import { Link } from 'react-router-dom';


const CartWidget = () => {
    return (
        <div>
            <Link to="/Cart">
                <button className="btn btn-light" >
                    <img src="../assets/cart.png" alt="cart" />
                </button>
            </Link>
        </div>
    );
}

export default CartWidget;
