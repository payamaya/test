import'../styles/about.css'
import ReusableButton from './ReusableButton'
const abouts = () => {
  return (
   <div className="abouts">
   <div className="abouts-list">


    <div className="about 1">
     <div className="about-img">
       <img
          id='img2'
          src={require('../img/smartphone.jpg')}
          className='img'
          alt=''
          width={350}
          height={150}
          border={5}
        />
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur aut assumenda voluptate voluptas iusto, voluptates repudiandae hic? Aperiam, vitae quis?</p>
     </div>
      <div className="about-title">
      </div>
       <ReusableButton>Add to cart</ReusableButton>
    </div>
    <div className="about 2">
     <div className="about-img">
        <img
          id='img2'
          src={require('../img/smartphone2.jpg')}
          className='img'
          alt=''
          width={350}
          height={150}
          border={5}
        />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur aut assumenda voluptate voluptas iusto, voluptates repudiandae hic? Aperiam, vitae quis?</p>
     </div>
      <div className="about-title">
      </div>
      <ReusableButton>Add to cart</ReusableButton>
    </div>
    <div className="about 3">
     <div className="about-img">  <img
          id='img2'
          src={require('../img/smartphone1.jpg')}
          className='img'
          alt=''
          width={350}
          height={150}
          border={5}
        />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur aut assumenda voluptate voluptas iusto, voluptates repudiandae hic? Aperiam, vitae quis?</p></div>
      <div className="about-title">
     
      </div>
       <ReusableButton>Add to cart</ReusableButton>
    </div>
    <div className="about 4">
     <div className="about-img">  <img
          id='img2'
          src={require('../img/smartphone.jpg')}
          className='img'
          alt=''
          width={350}
          height={150}
          border={5}
        />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur aut assumenda voluptate voluptas iusto, voluptates repudiandae hic? Aperiam, vitae quis?</p></div>
      <div className="about-title">
     
      </div>
       <ReusableButton>Add to cart</ReusableButton>
    </div>
    


   </div>
  </div>
  )
}
export default abouts
