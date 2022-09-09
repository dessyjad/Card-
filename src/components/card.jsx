import React from "react";
import Avator from "./Avator";
import Parag from "../parag";


function Card(props) {

  return (
    <div>
      
      
      <div className="card">
        <div className="top">
          <h2 className="name">{props.name}</h2>
          <Avator image={props.image} />
        </div>
        <div className="bottom">
          <Parag detail={props.tell} />
          <Parag detail={props.email} />

        </div>
      </div>
    </div>
  );

}
export default Card