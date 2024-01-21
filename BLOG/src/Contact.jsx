import { useState } from "react";



function Contact(){
   const[val, setVal] = useState("Firoj");
   function test(e){
      // console.log("btn clicked!",e.target.value);
      setVal(e.target.value);
      
   }

    return(
       <>
     <h1>Contact us Page!</h1>
     <input type="text" value = {val} onChange={test}></input>
     <button onClick={()=>alert(val)}>Click Me!</button>
    
       </>
    );
 }
 export default Contact;