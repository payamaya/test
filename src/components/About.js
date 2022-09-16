import '../styles/about.css'
import {Link} from "react-router-dom"
/* import AboutButton from './AboutButton' */
const About = () => {
  return (
   <div className="abouts">
   <div className="abouts-list">
    <div className="about">
     <div className="about-img">
       <img
          id='img2'
          src={require('../img/smartphone.jpg')}
          className='img'
          alt=''
          width={350}
          height={200}
        />
      <div className="about-title">
        <h2>Samsung s20</h2>  
      </div>
       <Link  className='about-link2' to="/checkout">checkout</Link>
     </div>
    </div>
    <div className="about">
     <div className="about-img">
        <img
          id='img2'
          src={require('../img/smartphone2.jpg')}
          className='img'
          alt=''
          width={350}
          height={200}
        />
      <div className="about-title">
        <h2>iphone14 </h2>
        </div>     
      <Link  className='about-link2' to="/checkout">checkout</Link>
    </div>
</div>
    <div className="about">
     <div className="about-img">
       <img
          id='img2'
          src={require('../img/smartphone.jpg')}
          className='img'
          alt=''
          width={350}
          height={200}
        />
      <div className="about-title">
        <h2>HUAWEI</h2>
      </div>
       <Link  className='about-link2' to="/checkout">checkout</Link>
     </div>
    </div>
    <div className="about">
     <div className="about-img">
        <img
          id='img2'
          src={require('../img/smartphone2.jpg')}
          className='img'
          alt=''
          width={350}
          height={200}
        />
      <div className="about-title">
        <h2>ipad pro</h2>
        </div>
      <Link  className='about-link2' to="/checkout">checkout</Link>
    </div>
  </div>
   </div>
  </div>
  )
}
export default About
