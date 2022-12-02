import React from 'react';
import { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import { createTicket, getTicket } from '../../services/firebase';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import './Checkout.css';


const CheckOut = () => {

    const {clearCart, totalPrice} = useContext(CartContext)
    let navigate = useNavigate();
    const formInput = React.useRef()

    const consultForm = (e) =>{
        e.preventDefault();

        const dateInput = new FormData(formInput.current);
        const valueInput = Object.fromEntries(dateInput);
        createTicket(valueInput,totalPrice(),new Date().toLocaleString()).then(data=>
            
            getTicket(data.id)).then(orden => {
                Swal.fire({
                position:'top-end',
                icon: 'success',
                timer: '4000',
                showConfirmButton: 'false',
                title: `${orden.Name}`,
                html:  `<p>Tu orden ${orden.id} fue confirmada!</p>`+
                        `<h5>El total es de <span>$${orden.TotalPrice}</span></h5>`
                });

                clearCart();
                e.target.reset();
                navigate('/')

            });

       
        
       
        
        
    }

    const [email,setEmail] = useState("");
    const [email1,setEmail1] = useState("");

    return (
        <div className='checkoutContainer'>
            <div>
                <h3>Por favor ingresa tus datos para finalizar la compra</h3>
            </div>
            <form className='formulario' onSubmit={consultForm} ref={formInput}>
                <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">Nombre*</label>
                    <input type="text" required className="form-control" name='nombre' />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">E-Mail*</label>
                    <input type="email" required className="form-control" name='email' onChange={e =>setEmail(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Repetir E-Mail*</label>
                    <input type="email" required className="form-control" name='email' onChange={e =>setEmail1(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="tel" className="form-label">Teléfono*</label>
                    <input type="number" required className="form-control" name='tel'  />
                </div>
                <div className="mb-3">
                    <label htmlFor="dni" className="form-label">DNI*</label>
                    <input type="number" required className="form-control" name='dni' />
                </div>
                {email===email1?
                <button 
                    type="submit" className="btn btn-success">Finalizar Compra
                </button>
                :
                <div>
                <button 
                type="submit" disabled className="btn btn-success">Finalizar Compra
                </button>
                
                <p>Los Email deben coincidir</p>
                </div>
                }
            </form>
        </div>
    );
}

export default CheckOut;