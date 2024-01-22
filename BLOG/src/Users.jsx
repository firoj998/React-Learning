import { useState } from "react";

function Users(){
    const [user, setUser] = useState([
        { name:"sam", age:"31", address:"New Delhi" },
        {name:"peter",age:"51"},
        {name:"jos",age:"35"},
        {name:"james", age:"80"}
    ])
    return(
        <div>
            <h1>Users Listing is here..</h1>
            {
                user.map(
                    (item,i)=>
                    <div key={i}>
                        <span>{item.name}</span>
                        <span>{item.age}</span>
                        <span>{item.address}</span>
                    </div>
                )
            }
        </div>
    );
}

export default Users;