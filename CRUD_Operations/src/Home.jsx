import { useState } from 'react'
import axios from 'axios';

import { useEffect } from "react";
import { Link,useNavigate } from 'react-router-dom';

function Home() {
    const [data, setData] = useState([]);
    const navigate = useNavigate();
  useEffect(() => {
    axios.get("http://localhost:3030/users")
    .then(res=>setData(res.data)).catch(err=>console.log(err) )

  }, []);

  return (
    <div className='container mt-5'>
        <h2>CRUD App with json server</h2>
        <Link to="/create" className='btn btn-success my-3'>Create +</Link>
      <table className='table'>
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((d,i)=>(
            <tr key={i}>
                <td>{d.id}</td>
                <td>{d.name}</td>
                <td>{d.email}</td>
                <td>
                    <Link   className='text-decoration-none btn btn-sm btn-success' to={`/update/${d.id}`}>Update</Link>
                    <button className='text-decoration-none btn btn-sm btn-danger' onClick={e => handleDelete(d.id)}>Delete</button>
                    <Link className='text-decoration-none btn btn-sm btn-primary' to={`/read/${d.id}`}>Read</Link>
                </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  function handleDelete(id){
   const confirm =  window.confirm("would you like to delete the record?")
   if(confirm){
    axios.delete("http://localhost:3030/users/"+id)
    .then(res=>{alert("Record Deleted!")});
    navigate('/');
  }
}
}

export default Home;
