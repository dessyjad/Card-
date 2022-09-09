import React from "react";
import Card from "./card";
import contacts from "../contacts";


function App(props) {
return    <div><Card
    name={contacts[0].name}
    email={contacts[0].email}
    tell={contacts[0].phone}
    image={contacts[0].imgURL}
    />
    <Card
    name={contacts[1].name}
    email={contacts[1].email}
    tell={contacts[1].phone}
    image={contacts[1].imgURL}
    />,
    <Card
    name={contacts[2].name}
    email={contacts[2].email}
    tell={contacts[1].phone}
    image={contacts[2].imgURL}
    />
    </div>


  
};
 


export default App;
