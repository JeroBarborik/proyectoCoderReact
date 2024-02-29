import React, { useContext } from 'react';
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import "./CartWidget.css";

const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext);

  return (
    <Link to="/cart" className="CartWidget">
      <div className="Carrito">
        <ShoppingCartTwoToneIcon />
        {totalQuantity}
      </div>
    </Link>
  );
};

export default CartWidget;
