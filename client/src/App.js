import './App.css';
import React, {useEffect, useState} from 'react'

function App() {
  const [state, setState]= useState([]);

   useEffect(()=>{
     fetch(`http://localhost:4000/api/users`)
     .then(res=>res.json())
     .then(res=>{
       console.log(res)
      setState(res)
      })
     .catch(e=>console.log(e))
   },[])
  return (
    <div className="App">
    {state.map((item)=>(
      <div key={item.id}>{item.name}</div>
    ))}
    </div>
  );
}

export default App;
