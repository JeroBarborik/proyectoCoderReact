import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore"; 
import { db } from "../../service/firebase/firebaseConfig"; 
import './ItemDetailContainer.css';

const ErrorBoundary = ({ children }) => {
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        const handleError = (error, errorInfo) => {
            console.error("Error catched by ErrorBoundary:", error, errorInfo);
            setHasError(true);
        };

        // Set up error boundary
        const unhandledRejectionHandler = (event) => {
            handleError(event.reason);
        };

        window.addEventListener("unhandledrejection", unhandledRejectionHandler);

        return () => {
            window.removeEventListener("unhandledrejection", unhandledRejectionHandler);
        };
    }, []);

    return hasError ? <p>Ha ocurrido un error al cargar el detalle del producto.</p> : children;
};

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const { itemId } = useParams(); 

    useEffect(() => {
        setLoading(true);
    
        const docRef = doc(db, "productos", itemId); 

        getDoc(docRef)
            .then(response => {
                const data = response.data();
                console.log("Datos del producto cargado:", data);
                const productAdapted = { id: response.id, ...data };
                
                console.log("Producto cargado:", productAdapted);
                setProduct(productAdapted);
            })
            .catch(error => {
                console.error("Error al cargar el producto:", error); 
            })
            .finally(() => {
                setLoading(false);
            });
    }, [itemId]);

    return (
        <ErrorBoundary>
            <div>
                {loading ? (
                    <p>Cargando producto...</p>
                ) : (
                    <ItemDetail product={product} />
                )}
            </div>
        </ErrorBoundary>
    );
};

export default ItemDetailContainer