/* import { Link } from 'react-scroll' */
import ReusableButton from './ReusableButton'
import { Link } from 'react-router-dom' /* import { BsFillArrowUpCircleFill } from 'react-icons/bs' */
/* import { animateScroll as scroll } from 'react-scroll' */
const Image = () => {
  /*  const toTop = () => {
    scroll.scrollToTop()
  } */
  /* getter and setter */
  /*   history.push('/about') */
  return (
    <div className='image'>
      <div className='card'>
        <img
          id='img2'
          src={require('../img/smartphone.jpg')}
          className='img'
          alt=''
          width={200}
          height={170}
        />
        <img
          id='img1'
          src={require('../img/smartphone1.jpg')}
          className='img'
          alt=''
          width={200}
          height={170}
        />

        
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat a
          excepturi culpa omnis illo quas libero sapiente facere quam, ipsa amet
          vero fugit expedita eligendi consequatur natus, officiis evenietm
          adipisci aspernatur animi. Nam, odio quos!
        </p>
        <div className='button'>
          <ReusableButton>Add to Cart </ReusableButton>
          <Link className='link' to='about'>
            More Info
          </Link>
        </div>
      </div>
      <div className='card'>
        <img
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
        <div className='button'>
          <ReusableButton>Add to Cart</ReusableButton>
          <ReusableButton to='info'>More Info</ReusableButton>
        </div>
        {/*   <BsFillArrowUpCircleFill
          onClick={toTop}
          style={{
            margiLeft: '30rem',
            fontSize: '30px',
            cursor: 'pointer',
          }}
        /> */}
      </div>
    </div>
  )
}
export default Image
