import React from "react";
class ClassComponent extends React.Component{

    constructor()
    {
    super();
    // console.warn("constructor called");
    // this.state = {
    //     name:"Firoj",
    //     age:25
    // }
    }
    
// props is used to communicate two component and 
// for data transfer between two components.


componentDidMount(){
    // console.warn("did mount")
    console.warn("props:",this.props.name);
  
}
componentDidUpdate(){
    // alert("name updated!")
    console.warn("props in update:",this.props.name);
}

    render(){
        return (
            <div>
               <h2> ClassComponent..!</h2>
               <h2>{this.props.name}</h2>
               
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