import { FaMobileAlt, FaCartPlus } from 'react-icons/fa'
import '../styles/navbar.css'
import {Link} from "react-router-dom"
/* FaMobileAlt, */

const Navbar = () => {
  return (
    <div className='navbar'>
      <h1>Paul Phones</h1>
    
        <FaMobileAlt className='navbar-logo1' />
      <div className='navbar-items'>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/checkout'>Checkout</Link>
        <Link to='/orderconfirm'>Confirm</Link>
        <FaCartPlus className='navbar-logo' />
        
      </div>
    </div>
  )
}
export default Navbar
