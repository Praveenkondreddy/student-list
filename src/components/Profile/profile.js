import React, {useState} from 'react'
import './profile.css'
import axios from "axios";

const apiUrl = "http://localhost:8080/"

function Profile() {

    const [details,setDetails]=useState({name:"",email:"",phone:"",interMarks:"",degreePercentage:"",currentOrganisation:"",experience:""})
    const submitHandler= async (e) => {
      e.preventDefault()
      
      const {data}= await axios.post(apiUrl + "editProfile",details);
      console.log(data)
      
} 

  return (
    <div class="container">
     
    <div class="form-class">
    <form onSubmit={submitHandler}>
     <div class="profile-inner">
      <h4>Please edit your details</h4>
      
      <div class="form-group">
      <label htmlFor='name'>Name : </label>
      <input type="text" class="input" name="name" onChange={e =>setDetails({...details, name:e.target.value})} value={details.name}/>  
      </div>
      <hr />
      <div class="form-group">
      <label htmlFor='email'>Email  Id : </label>
      <input type="text" class="input" name="email" onChange={e =>setDetails({...details, email:e.target.value})} value={details.email}/>  
      </div>
      <hr />
      <div class="form-group">
      <label htmlFor='phone'>Phone No : </label>
      <input type="text" class="input" name="phone" onChange={e =>setDetails({...details, phone:e.target.value})} value={details.phone} />  
      </div>
      <hr />
      <div class="form-group">
      <label htmlFor='interMarks'>Inter Marks : </label>
      <input type="text" class="input" name="interMarks" onChange={e =>setDetails({...details, interMarks:e.target.value})} value={details.interMarks} />  
      </div>
      <hr />
      <div class="form-group">
      <label htmlFor='degreePercentage'>Degree Percentage : </label>
      <input type="text" class="input" name="degreePercentage" onChange={e =>setDetails({...details, degreePercentage:e.target.value})} value={details.degreePercentage} />  
      </div>
      <hr />
      <div class="form-group">
      <label htmlFor='currentOrganisation'>Current Organisation: </label>
      <input type="text" class="input" name="currentOrganisation" onChange={e =>setDetails({...details, currentOrganisation:e.target.value})} value={details.currentOrganisation} />  
      </div>
      <hr />
      <div class="form-group">
      <label htmlFor='experience'>Experience : </label>
      <input type="text" class="input" name="experience" onChange={e =>setDetails({...details, experience:e.target.value})} value={details.experience} />  
      </div>
      <hr />
      <div class="form-group">
      <input type="submit" class="login-input" value="Edit profile" />  
      </div><br />
     
  
     </div>
    </form>
    
    </div>
    
    </div>
  )
}

export default Profile