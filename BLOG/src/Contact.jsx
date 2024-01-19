import { useEffect, useState } from "react";

function Contact(){
    const [name,setName] = useState("Firoj");
    const [age,setAge] = useState(25);

 useEffect(()=>{
    console.warn('Hello from Hook')
},[name]);

    let data = 'functional component  ';
    return(
       <>
        <h1>{data}</h1>
        <h2>Name:{name}</h2>
        <h2>Age:{age}</h2>
        <button onClick={()=>setName('Mohd Firoj')}>Update Name</button>
        <button onClick={()=>setAge(26)}>Update Age</button>
    
       </>
    );
 }
 export default Contact;