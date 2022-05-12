import React, {useState} from 'react'
import './index.css'
import axios from "axios";
const apiUrl = "http://localhost:8080/"

function Home() {
     
    const [details,setDetails]=useState({id:"",name:""})

    const submitHandler=async (e) =>{
        e.preventDefault()
        const data= await axios.post(apiUrl + "stydentForm",details);
        console.log(data)
    }


  return (
    <div class="home">
    <form onSubmit={submitHandler}>
     <div class="login-inner">
      <h2>Student Form</h2>
      
      <div class="form-group">
      <label htmlFor='id'>Id : </label>
      <input type="number" name="id" onChange={e =>setDetails({...details, id:e.target.value})} value={details.id}/>  
      </div>
      <hr />
      <div class="form-group">
      <label htmlFor='name'>Name : </label>
      <input type="text" name="name" onChange={e =>setDetails({...details, name:e.target.value})} value={details.name} />  
      </div>
      <hr />
      <hr />
      <div class="form-group">
      <input type="submit" class="login" value="Submit" />  
      </div>
     
     </div>
    
    
    </form>
    
    
    </div>
  )
}

export default Home