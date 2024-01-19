import React from "react";
class ClassComponent extends React.Component{
constructor(){
    super();
    console.warn("constructor called");
    this.state = {
        name:"Firoj",
        age:25
    }
}

componentDidMount(){
    console.warn("did mount")
  
}
componentDidUpdate(){
    alert("name updated!")
}

    render(){
        return (
            <div>
               <h2> ClassComponent..!</h2>
               <h3>{this.state.name}</h3>
               <h3>{this.state.age}</h3>
               <button onClick={()=>{this.setState({name:"Mohd Firoj"})}}>Update State</button>
            </div>
        );
    }
}
export default ClassComponent;



// Life Cycle Method-------

// constructor(){

// }

// componentDidMount(){

// }

// componentDidUpdate(){

// }

// componentWillMount(){

// }