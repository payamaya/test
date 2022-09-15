import'../styles/checkout.css'
import React from 'react'
import ReusableButton from './ReusableButton'
const About = () => {
  return (
    <div className='container'>
      <h1>Checkout page</h1>
        <ul className='checkout'>
          <li>Link checkout 1</li>
          <li>Link checkout 2</li>
          <li>Link checkout 3</li>
        </ul>
  
      <ReusableButton className="btn-checkout">Confirm</ReusableButton>
    </div>
  )
}
export default About
