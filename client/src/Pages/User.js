import React, {useEffect, useState} from 'react'

const User = () => {
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
        <div>
             {state.map((item)=>(
      <div key={item.id}>{item.name}</div>
    ))}
        </div>
    )
}

export default User

