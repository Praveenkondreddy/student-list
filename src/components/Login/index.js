import React, {useState} from 'react'
import './index.css'
import axios from "axios";
const apiUrl = "http://localhost:8080/"

function Login() {

    const [details,setDetails]=useState({username:"",password:""})
const submitHandler= async (e) => {
    e.preventDefault()
     
     const {data}= await axios.get(apiUrl + "login");
     console.log(data[0])
     log(details,data[0])
     
    console.log(details)
} 

const log= (details,userDetails)=>{
  if (userDetails.username===details.username && userDetails.password===details.password){
    console.log("logged")
  }else{
    console.log("logged error")
  }
}

  return (
    <form onSubmit={submitHandler}>
     <div class="login-inner">
      <h2>Login Page</h2>
      
      <div class="form-group">
      <label htmlFor='username'>Username : </label>
      <input type="text" name="username" onChange={e =>setDetails({...details, username:e.target.value})} value={details.username}/>  
      </div>
      <hr />
      <div class="form-group">
      <label htmlFor='password'>Password : </label>
      <input type="password" name="password" onChange={e =>setDetails({...details, password:e.target.value})} value={details.password} />  
      </div>
      <hr />
      <div class="form-group">
      <input type="submit" class="login" value="Login" />  
      </div>
     
     </div>
    
    
    </form>
  )
}

export default Login