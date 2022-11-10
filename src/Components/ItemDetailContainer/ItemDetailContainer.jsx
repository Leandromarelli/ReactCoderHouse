import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {BBDD} from '../../services/products';
import ItemDetail from '../ItemDetail/ItemDetail';



const ItemDetailContainer = () => {

    const [product, setProduct] = useState ([]);
    const {id} = useParams();
    useEffect (() => {
        BBDD("../json/stock.json").then(prod =>{
            const search = prod.find(prodBBDD => prodBBDD.id === Number(id))
            setProduct(search)
        })
    }, []);
    
    return (
        <div >
            <ItemDetail detail={product} />
        </div>
    );
}

export default ItemDetailContainer;
