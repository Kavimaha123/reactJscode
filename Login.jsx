import { useState } from 'react'

function Login(){
    
  //useState
  const [names, setNames] = useState({fName:"",lName:""});


  //onChange function
  const handleChange=(e)=>{
    const {name,value}=e.target;
    // console.log(value,name);
    setNames((prev)=>(
      {
        ...prev,
        [name]:value
      }
    ))

  }

  //onClick function
  const onSubmit=()=>{
        console.log(names);
        setNames({
          fName:"",
          lName:""
        })
  }
      return(
        <div >
        <h1>Login</h1>
       
        <input
          type="text"
          placeholder="First Name"
          name="fName"
          value={names.fName}
          onChange={handleChange}
        />
         <br />
        <input
          type="text"
          placeholder="Last Name"
          name="lName"
          value={names.lName}
          onChange={handleChange}
        />
        <br />
        <button  onClick={onSubmit} >Login</button> 
        
      </div> 
    )}
 
    export default Login