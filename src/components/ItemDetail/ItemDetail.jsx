import { useContext, useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext"; 
import './ItemDetail.css';

const ItemDetail = ({ product }) => {
    const [quantityAdded, setQuantityAdded] = useState(0);
    const { addItem } = useContext(CartContext);

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity);
        const item = { ...product };
        console.log("Producto agregado al carrito:", item, "Cantidad:", quantity);
        addItem(item, quantity);
    };

    return (
        <article className="CardItem">
            {product ? (
                <>
                    <header className="Header"> 
                        <h2 className="ItemHeader">{product.name}</h2>
                    </header>
                    <picture>
                        <img src={product.img} alt={product.name} className="ItemImg" />
                    </picture>
                    <section>
                        <p className="Info">Categoria: {product.category}</p>
                        <p className="Info">Descripcion: {product.description}</p>
                        <p className="Info">${product.price}</p>
                    </section>
                    <footer className="ItemFooter">
                        {quantityAdded > 0 ? (
                            <Link to='/cart' className="Option">Terminar compra</Link>
                        ) : (
                            <ItemCount initial={1} stock={product.stock} onAdd={handleOnAdd} />
                        )}
                    </footer>
                </>
            ) : (
                <p>No se ha cargado ningún producto.</p>
            )}
        </article>
    );
};

export default ItemDetail;

