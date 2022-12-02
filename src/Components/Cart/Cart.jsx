import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from "react-router-dom";
import './Cart.css';


const Cart = () => {
  const { cart, clearCart, removeItem, totalPrice } = useContext(CartContext);

  return (
    <div className="d-flex justify-content-center">
      <div>
        {cart.length === 0 ? (
          <div>
            <h1>Carrito Vacio</h1>
            <Link to={"/"}>
              <button className="btn btn-secondary">ir al Inicio</button>
            </Link>
          </div>
        ) : (
          <div className='CartProdContainer'>
            <div>
              <h2>Productos en Carrito</h2>
              {cart.map((prod, index) => (
                <div
                  key={index}
                  className="card mb-3"
                  style={{ maxWidth: "540px", color: "black" }}
                >
                  <div className="row g-0">
                    <div className="col-md-4">
                      <img
                        src={prod.img}
                        className="img-fluid rounded-start"
                        alt="..."
                      />
                    </div>
                    <div className="col-md-8 d-flex">
                      <div className="card-body">
                        <h5 className="card-title">{prod.name}</h5>
                        <p className="card-text"> Porciones: {prod.cant}</p>
                        <p className="card-text">Precio ${prod.price}</p>
                        <p className="card-text">
                          Subtotal ${prod.price * prod.cant}
                        </p>
                      </div>
                      <div className="d-flex align-items-center m-3">
                        <button
                          className="btnClearCart"
                          onClick={() => {
                            removeItem(prod.id);
                          }}
                        >
                          <img
                            style={{ width: "24px" }}
                            src="./assets/borrar.jpeg"
                            alt="ClearCart"
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className='finalPurchase'>
              <Link to={"/"}>
                <button className="btn btn btn-outline-success mb-4 mx-3">
                  Seguir Comprando
                </button>
              </Link>
              <Link to={"/checkout"}>
                <button className="btn btn-success mb-4">
                  Finalizar Compra
                </button>
              </Link>
              <div className='lastContainer'>
                <h5 className="h5Total">Total Compra ${totalPrice()}</h5>
                <hr/>
                <button className="btn btn-danger" onClick={clearCart}>
                  Eliminar Productos
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
