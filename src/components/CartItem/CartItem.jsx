import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import "./CartItem.css";

const CartItem = ({ id, name, price, quantity }) => {
    const { removeItem } = useContext(CartContext);

    const handleRemove = () => {
        removeItem(id);
    };

    return (
        <div className="CartItem">
            <div className="CartItemDetails">
                <h3>{name}</h3>
                <p>Precio: ${price}</p>
                <p>Cantidad: {quantity}</p>
            </div>
            <button onClick={handleRemove} className='RemoveButton'>Eliminar</button>
        </div>
    );
};

export default CartItem;
