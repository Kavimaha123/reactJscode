import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count,setCount] = useState(0)
  const [name,setName]= useState("")
  return (
    
    <div>
        <h1>Hello Kavi</h1>
    <button onClick={()=> setCount(count+2)}>Add</button>
   
    <p>
    {count} times clicked
    </p>
    <button  onClick={()=> setCount(count-2)}>delete</button>
    {count !== 0 &&
    <button onClick={()=> setCount(0)}> Reset </button>
}
<input type="text" value={name} onChange={(e)=> setName(e.target.value)}></input>
<p> 
    Hello {name}
</p>
<button onClick={()=> setName("vijay")}>ChangeName to Vijay</button>
    </div>
    )
}

export default App
