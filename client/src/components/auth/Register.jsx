import React,{useContext,useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

import {ProductContext} from '../../context/ProductProvider';

const Register = () => {
    const {loading} = useContext(ProductContext);

    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [password2,setPassword2] = useState('');

    const onSubmit = (e) =>{
      e.preventDefault();
      const config = {
        headers:{
          "Content-Type":"application/json"
        }
      }
      const body = JSON.stringify({name,email,password});
      try{
        
      }catch(err){

      }
    }
    return (
    <div className="form">
    <form onSubmit={onSubmit} >
      <ul className="form-container">
        <li>
          <h2>Create Account</h2>
        </li>
        <li>
          {loading && <div>Loading...</div>}
          {/* {error && <div>{error}</div>} */}
        </li>
        <li>
          <label htmlFor="name">
            Name
          </label>
          <input type="name" name="name" id="name" onChange={(e) => setName(e.target.value)}>
          </input>
        </li>
        <li>
          <label htmlFor="email">
            Email
          </label>
          <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)}>
          </input>
        </li>
        <li>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)}>
          </input>
        </li>
        <li>
          <label htmlFor="rePassword">Re-Enter Password</label>
          <input type="password" id="Password2" name="Password2" onChange={(e) => setPassword2(e.target.value)}>
          </input>
        </li>
        <li>
          <button type="submit" className="button primary">Register</button>
        </li>
        <li>
          Already have an account?
          <Link to="/" className="button secondary text-center" >Create your amazona account</Link>

        </li>

      </ul>
    </form>
  </div>
    )
}

export default Register
