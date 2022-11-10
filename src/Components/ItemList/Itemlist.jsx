import React from 'react';
import Item from '../Item/Item';



const Itemlist = ({product}) => {
    return (
        <div className='row'>
            {product.map( prod => <Item key={prod.id} value={prod} />)}
        </div>
    );
}

export default Itemlist;
