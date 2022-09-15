import'../styles/about.css'
import {Link} from "react-router-dom"
import AboutButton from './AboutButton'
const abouts = () => {
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
        Samsung s20
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
        iphone14 
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
        HUAWEI
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
        Iphon13
        </div>
      
      <Link  className='about-link2' to="/checkout">checkout</Link>
    </div>
</div>

   </div>
  </div>
  )
}
export default abouts
