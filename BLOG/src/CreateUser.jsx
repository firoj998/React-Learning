import { useState } from "react";

function CreateUser(){
    const [name ,setName] = useState("");
    const [age ,setAge] = useState("");
    const [address ,setAddress] = useState("");
    
    function clickMe(){
       let data = {name,age,address}
        console.log(data);
    }
    return (
        <div>
            <h1>Make a User !</h1>
            <input type="text" name="Username" value={name} onChange={(e)=>setName(e.target.value)}></input>
            <br></br>
            <input type="text" name="age" value={age} onChange={(e)=>setAge(e.target.value)}></input>
            <br></br>
            <input type="text" name="address" value={address} onChange={(e)=>setAddress(e.target.value)}></input>
            <br></br>
            <br></br>
            <button onClick={clickMe}>MakeUser</button>
        </div>
    )
}
export default CreateUser;