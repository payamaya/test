import'../styles/orderconfirm.css'
import React from 'react'
import Order from './Order';
/* import {Link} from "react-router-dom"
 *//* import ReusableButton from './ReusableButton' */
 
const OrderConfirm = () => {
  return (
  <div className="order">
   <h1>Invoice</h1>
<Order/>
  </div>
  )
}
export default OrderConfirm
