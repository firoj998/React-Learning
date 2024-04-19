import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { Link,useNavigate, useParams } from 'react-router-dom'

function Read() {
    const {id} = useParams();
    const [data, setData] = useState([]);
    useEffect(()=>{
axios.get("http://localhost:3030/users/"+id)
.then(res=>{setData(res.data)})
.catch(err=>console.log(err))

},[])
  return (
    <div className='container'>
        <p>{data.id}</p>
        <p>{data.name}</p>
        <p>{data.email}</p>
        <Link to="/">Back</Link>
    </div>
  )
}

export default Read