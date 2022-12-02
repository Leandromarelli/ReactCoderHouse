import React from 'react';
import { useState } from 'react'
import './ItemCount.css'

const ItemCount = ({stock, onAdd}) => {
    const [count, setCount] = useState (1);

    const add = () => count < stock && setCount (prev => prev + 1)
		
    const rest = () => count > 1 && setCount (prev => prev - 1)

    const addProductCart = () => {
        onAdd (count)
    }

    return (
        <div>
            <div className='container'>
                <button onClick={rest} className= "btnCount" > - </button>
                <p className="text">{count}</p>
                <button onClick={add} className= "btnCount" > + </button>
            </div>
            <div className='container'>
                <button className="btnAddCount" onClick={addProductCart}>Agregar al Carrito</button>
            </div>
        </div>
    );
}

export default ItemCount;
