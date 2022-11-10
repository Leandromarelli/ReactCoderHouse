import React from 'react';
import './Item.css'
import { Link } from 'react-router-dom';

const Item = ({value}) => {
    return (
      <div className='row col-lg-3'>

        <div className="card" style={{width: '18rem' }}>
        <img src={`../assets/${value.img}`} className="img-fluid rounded h-100 mt-3" alt="producto" />
        <div className="card-body">
          <h5 className="card-title">{value.name}</h5>
          <p className="card-text">Precio $ {value.price}</p>
          <Link to={`/Item/${value.id}`} className="btn btn-outline-dark btnCart">Ver Detalle</Link>
        </div>
        </div>

    </div>
    );
}

export default Item;
