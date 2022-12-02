import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProducts } from "../../services/firebase"
import Itemlist from '../ItemList/Itemlist';



const ItemlistContainer = () => {

    const [data, setData] = useState([]);
    const {cat} = useParams()

    useEffect ( () => {
      if (cat) {
        getProducts().then(stock => {
          const filterProd = stock.filter(p=> p.category === cat)
       
          const cardProducts = <Itemlist product = {filterProd} />
          setData(cardProducts)
        })
      } else {
        
      getProducts().then(stock => {
        const cardProducts = <Itemlist product = {stock} />
        setData(cardProducts)
      })
      }

      }
    , [cat]) 
  
      return (
        <div>
        
          {data}
         
        </div>
      );
    }
  

export default ItemlistContainer;
