import { createContext } from "react";
import { useState } from "react";

const CartContext = createContext ([]);
const CartContextProvider = (props) => {
    const [cart, setCart] = useState([]);

    const isInCart = (id) => {
        return cart.find(prod => prod.id === id);
        
    }

    const addItem = (item, quantity) => {
        if (isInCart(item.id)) {
           
            const index = cart.findIndex(prod => prod.id === item.id)
            const aux = [...cart]
            aux[index].cant = quantity
            console.log(aux)
            setCart(aux)
        } else {
            const newProduct = {...item, cant:quantity}
            setCart([...cart,newProduct])
        }
    }

    const clearCart = ( ) => {
        setCart ([]);
    }

    const removeItem = (id) => {
        return setCart(cart.filter(p => p.id !== id))
    }

    const plusItemQuantity = () => {
        return cart.reduce((acc, product) => acc+= product.cant,0)
    }

    const totalPrice = () => {
        return cart.reduce((acc, product) => acc+= (product.cant*product.price),0)
    }

    return (
        <CartContext.Provider value ={{cart, isInCart, addItem, clearCart, removeItem, plusItemQuantity, totalPrice}}>
            {props.children}
        </CartContext.Provider>

    )
} 

export {CartContextProvider, CartContext}