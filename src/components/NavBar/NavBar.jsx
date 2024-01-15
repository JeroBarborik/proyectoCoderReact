import './navBarStyle.css';
import CartWidget from '../CartWidget/CartWidget';
const NavBar = () => {
  return (
    <nav className="NavBar">
        <h1>E-commerce</h1>
        <div className='botones'>
          <button>Hombre</button>
          <button>Mujer</button>
          <button>Niños</button>
          <button>Unisex</button>
        </div>
        <CartWidget/>


    </nav>
  )
}

export default NavBar
