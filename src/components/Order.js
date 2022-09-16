import {Link} from "react-router-dom"
 function sayHello() {
    alert('Your order is on there way!');
  }
const Order = () =>{
 return(
  <div className='container'>
        <div className='confirm'>
          <table >
           <tbody>
  <tr>
    <th>Quantity</th>
    <th>Product info</th>
    <th>Delivery date</th>
    <th>Price</th>
  </tr>
  <tr>
    <td>Samsung</td>
    <td>some text</td>
    <td>January/15/2023</td>
    <td>9999:-</td>
  </tr>
  <tr>
    <td>Samsung</td>
    <td>some text</td>
    <td>January/15/2023</td>
    <td>9999:-</td>
  </tr>
      <Link onClick={sayHello}   className='submit' type='submit' to="/">Slut Betala</Link>
  </tbody>
</table>
        </div>
    </div>
 )
}
export default Order
  