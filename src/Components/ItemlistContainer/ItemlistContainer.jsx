import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BBDD } from "../../services/products"
import Itemlist from '../ItemList/Itemlist';



const ItemlistContainer = () => {

    const [data, setData] = useState([]);
    const {cat} = useParams()

    useEffect ( () => {
      if (cat) {
        BBDD("../json/stock.json").then(stock => {
          const filterProd = stock.filter(p=> p.idCategory === cat)
       
          const cardProducts = <Itemlist product = {filterProd} />
          setData(cardProducts)
        })
      } else {
        
      BBDD("./json/stock.json").then(stock => {
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
