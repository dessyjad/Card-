import React from "react";


function Card(props) {
    
    return (
        <div>
          <h1 className="heading">My Contacts</h1>
          <div className="card">
            <div className="top">
              <h2 className="name">{props.name}</h2>
              <img className="circle-img " src="{props.image}" alt=""/>
            </div>
            <div className="bottom">
              <p>{props.tell}</p>
            
              <p>{props.email}</p>
            </div>
          </div>
        </div>
      );
    
}
export default Card