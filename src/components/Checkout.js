
import React from 'react';
import '../styles/checkout.css'
import {Link} from "react-router-dom"
import { useForm } from 'react-hook-form';
/*  function sayHello() {
    alert('Must fill in the blanket!');
  } */
export default function Checkout() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
    <div className='checkout'>
   
    <form className='form' onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="First name" {...register("First name", {required: true, maxLength: 80})} />
      <input type="text" placeholder="Last name" {...register("Last name", {required: true, maxLength: 100})} />
      <input type="text" placeholder="ccv" {...register("ccv", {required: true,minLength: 6, maxLength: 25})} />
      <input type="text" placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />
      <input type="tel" placeholder="Mobile number" {...register("Mobile number", {required: true, minLength: 6, maxLength: 12})} />
     <div className="select">
        <h6>Betalnings Sätt</h6>
       <select {...register("Title", { required: true })}>
        <option value="Visa">Visa</option>
        <option value="American Express">American Express</option>
        <option value="PayPal">PayPal</option>
        <option value="Klarna">Klarna</option>
      </select>
      <h6>Gender</h6>
      <select {...register("Title", { required: true })}>
        <option value="Mr">Mr</option>
        <option value="Mrs">Mrs</option>
        <option value="Miss">Miss</option>
        <option value="Dr">Dr</option>
      </select>
      {/* <input  to="/confirm" className='submit' type="submit" /> */}
    <Link /* onClick={sayHello}  */ className='link' to="/orderconfirm">confirm</Link>
</div>
    </form>
    </div>
  );
}