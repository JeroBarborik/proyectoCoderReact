import './navBarStyle.css';
import CartWidget from '../CartWidget/CartWidget';
import { NavLink, Link } from 'react-router-dom';
const NavBar = () => {
  return (
    <nav className="NavBar">
      <Link to='/'>
      <h1> JeBAR. </h1>
      </Link>
        <div className='Categories'>
          <NavLink to={`/category/Hombre`} className={({isActive})=> isActive ? 'ActiveOption' : 'Option'}>Hombre</NavLink>
          <NavLink to={`/category/Mujer`} className={({isActive})=> isActive ? 'ActiveOption' : 'Option'}>Mujer</NavLink>
          <NavLink to={`/category/Accesorios`} className={({isActive})=> isActive ? 'ActiveOption' : 'Option'}>Accesorios</NavLink>
        </div>
        <CartWidget/>


    </nav>
  )
}

export default NavBar