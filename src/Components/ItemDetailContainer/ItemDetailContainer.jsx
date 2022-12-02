import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getOneProduct} from '../../services/firebase';
import ItemDetail from '../ItemDetail/ItemDetail';



const ItemDetailContainer = () => {

    const [product, setProduct] = useState ([]);
    const {id} = useParams();
    useEffect (() => {
        getOneProduct(id).then(prod =>{
            setProduct(prod)
        })
    }, [id]);
    
    return (
        <div >
            <ItemDetail detail={product} />
        </div>
    );
}

export default ItemDetailContainer;
