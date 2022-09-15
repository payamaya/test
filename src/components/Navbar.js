import { FaMobileAlt, FaCartPlus } from 'react-icons/fa'
/* FaMobileAlt, */

const Navbar = () => {
  return (
    <div className='navbar'>
      <h1>Paul Phones</h1>
    
        <FaMobileAlt className='navbar-logo1' />
      <div className='navbar-items'>
        <a href='/home'>Home</a>
        <a href='/about'>About</a>
        <a href='/checkout'>Checkout</a>
        <a href='/orderconfirm'>Confirm</a>
        <FaCartPlus className='navbar-logo' />
        
      </div>
    </div>
  )
}
export default Navbar
