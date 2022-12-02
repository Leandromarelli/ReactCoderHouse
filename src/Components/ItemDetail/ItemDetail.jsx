import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css';


const ItemDetail = ({detail}) => {

  const { addItem } = useContext (CartContext);
  const onAdd = (count) => {
    addItem (detail, count)
  }

    return (
      <div className="itemDetail">
        <div>
          <img
            src={detail.img}
            className="mt-3 cardImg"
            alt="producto"
            style={{ width: "18rem" }}
          />
        </div>
        <div className="cardContainer">
          <div>
            <h5 className="card-title">{detail.name}</h5>
            <p>{detail.description}</p>
            <p className="card-text">Precio $ {detail.price}</p>
            <p className="card-text">Stock: {detail.stock}</p>
          </div>
          <div>
            <ItemCount
              stock={detail.stock}
              onAdd={onAdd}
              className="btnAddCount"
            />
          </div>
        </div>
      </div>
    );
}

export default ItemDetail;
