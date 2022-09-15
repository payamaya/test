import styles from '../styles/about.css'
import ReusableButton from './ReusableButton'
const About = () => {
  return (
    <div  className='container'>
      <div className="link">
      <h1>About Page</h1>
      
        <p>This is About Page</p>

        <ul>
          <li>Link About 1</li>
          <li>Link About 2</li>
          <li>Link About 3</li>
        </ul>
      
      <ReusableButton>About Page Button</ReusableButton>
      </div>
    </div>
  )
}
export default About
