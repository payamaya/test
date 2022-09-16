import '../styles/home.css'
import { Link } from 'react-router-dom' 
const Image = () => {
  return (
    <div className='image'>
      <div className='card'>
        <img
          id='img2'
          src={require('../img/smartphone.jpg')}
          className='img'
          alt=''
          width={300}
          height={235}
        />
        <img
          id='img3'
          src={require('../img/smartphone1.jpg')}
          className='img'
          alt=''
          width={300}
          height={235}
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat a
          excepturi culpa omnis illo quas libero sapiente facere quam, ipsa amet
          vero fugit expedita eligendi consequatur natus, officiis evenietm
          adipisci aspernatur animi. Nam, odio quos!
        </p>    
          <Link className='link1' to="checkout">Add to Cart </Link>
          <Link className='link' to='/about'>
            More Info
          </Link>
        </div>    
      <div className='card'>
        <img
        id='img1'
          src={require('../img/smartphone2.jpg')}
          className='img'
          alt=''
          width={250}
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat a
          excepturi culpa omnis illo quas libero sapiente facere quam, ipsa amet
          vero fugit expedita eligendi consequatur natus, officiis eveniet
          adipisci aspernatur animi. Nam, odio quos!
        </p>      
          <Link className='link1' to="checkout">Add to Cart </Link>
          <Link className='link' to='/about'>
            More Info
          </Link>
      </div>
    </div>
  )
}
export default Image
