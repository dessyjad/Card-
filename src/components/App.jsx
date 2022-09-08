import React from "react";
import Card from "./card";
import contacts from "../contacts";


function App() {
return <Card
    name={contacts[0].name}
    email={contacts[0].email}
    tell={contacts[0].phone}
    image={contacts[0].imgURL}
    />
};
    



export default App;
