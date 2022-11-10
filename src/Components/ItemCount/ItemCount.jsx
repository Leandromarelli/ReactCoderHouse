import React from 'react';
import { useState } from 'react'
import './ItemCount.css'

const ItemCount = ({stock}) => {
    const [count, setCount] = useState (1);

    const add = () => count < stock && setCount (count + 1)
    const rest = () => count > 1 && setCount (count - 1)
    return (
        <div>
            <div className='container'>
                <button onClick={rest} className= "btnCount" > - </button>
                <p clasName="text">{count}</p>
                <button onClick={add} className= "btnCount" > + </button>
            </div>
            <div className='container'>
                <button clasName="btnAddCount">Agregar al Carrito</button>
            </div>
        </div>
    );
}

export default ItemCount;
