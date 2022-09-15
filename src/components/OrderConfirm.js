import React from 'react'
import ReusableButton from './ReusableButton'
const OrderConfirm = () => {
  return (
    <div className='container'>
      <h1>Orderconfirm page</h1>
      <div /* style={{ marginTop: '10px' }} className='link_list' */>
        <p>This is checkout Page</p>

        <ul>
          <li>Link order 1</li>
          <li>Link orderconfirm 2</li>
          <li>Link orderconfirm 3</li>
        </ul>
      </div>
      <ReusableButton>Orderconfirm Page Button</ReusableButton>
    </div>
  )
}
export default OrderConfirm
