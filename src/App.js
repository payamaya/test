import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Checkout from './components/Checkout'
import Header from './components/Header'
/* import Info from './components/Info' */
import About from './components/About'
import OrderConfirm from './components/OrderConfirm'
/* import logo from './img/waterfall1.jpg'
import logo1 from './img/oil.jpg' */
import Footer from './components/Footer'
import Navbar from './components/Navbar'
/* import bgImage from './video/video.mp4' */

const smartMobile = new URL("./img/smartphone1.jpg", import.meta.url)
function App() {
  return (
    <BrowserRouter>
      {/* <div>
        <Header />
      </div> */}
      <Navbar />
     {/*  <video autoPlay loop muted>
        <source width={10} height={100} src={bgImage} type='video/mp4'></source>
      </video> */}
      <div>
        <Routes>
          <Route path='/' element={<Header />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/orderconfirm' element={<OrderConfirm />} />
          {/* <Route path='/info' exact element={<Info />} /> */}
        </Routes>
      </div>
{/* <div className="background">
  <img className='image' src={smartMobile} alt="" />
</div> */}
      <div>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
