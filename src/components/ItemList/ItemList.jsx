import './itemListStyled.css'; 
import Item from "../Item/Item";
 


const ItemList = ({data}) => {
  return(
    <div className='ListGroup'>
     {data.map(prod => <Item key={prod.id} {...prod}/>)}

    </div>
  )
}
export default ItemList;