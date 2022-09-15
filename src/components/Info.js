import { animateScroll as scroll } from 'react-scroll'
import { BsArrowUpCircle } from 'react-icons/bs'
import ReusableButton from './ReusableButton'
const Info = () => {
  const toTop = () => {
    scroll.scrollToTop()
  }
  return (
    <div
      id='info'
      className='containerr'
      activeClass='active'
      to='about'
      smooth={true}
      duration={500}
    >
      <img
        src={require('../img/smartphone1.jpg')}
        className='img'
        alt=''
        width={150}
      />
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
      corporis, quos at, laborum exercitationem aperiam quasi velit repudiandae
      consequuntur, veniam distinctio! Aliquam sapiente non inventore, labore
      praesentium id deleniti illum magni? Error, sapiente minus incidunt, sit
      deleniti, molestiae voluptatibus vero iure et nulla fuga dicta dolores
      quas odio eveniet quod! Necessitatibus, cumque omnis. Dolorum quod,
      sapiente quibusdam labore veritatis corporis id, nesciunt magnam vero nam
      repellendus nemo iste soluta alias? Natus nisi ipsum officia error non
      ratione laboriosam, consectetur excepturi!
      <div className='icon-button'>
        <ReusableButton onClick='addToCart'>Add To Cart</ReusableButton>
        <BsArrowUpCircle
          className='icon'
          onClick={toTop}
          style={{ margiLeft: '30rem', fontSize: '30px', cursor: 'pointer' }}
        />
      </div>
    </div>
  )
}
export default Info
