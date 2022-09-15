import { FaBars, FaGithub, FaReact } from 'react-icons/fa'
import '../styles/footer.css'
const Footer = () => {
  return (
    <div className='footer'>
      <h2>This is Footer Page </h2>
      <div className='footer-logo'>
        <FaReact />
        <FaBars />
        <FaGithub />
      </div>
      <h2>Footer Page</h2>
    </div>
  )
}
export default Footer
