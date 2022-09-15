import'../styles/checkout.css'
import React from 'react'
import ReusableButton from './ReusableButton'
const About = () => {
  return (
    <div className='container'>
      <h1>Checkout page</h1>
      <div /* style={{ marginTop: '10px' }} className='link_list' */>
        <p>This is checkout Page</p>

        <ul className='checkout'>
          <li>Link checkout 1</li>
          <li>Link checkout 2</li>
          <li>Link checkout 3</li>
        </ul>
      </div>
      <ReusableButton className="btn-checkout">Checkout Page Button</ReusableButton>
    </div>
  )
}
export default About
