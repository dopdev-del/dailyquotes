import React from "react";

function Note(props) {
  return (
    <div className="note">
      <span><img src={props.imgURL}/></span>
      <h1>{props.title}</h1>
      <p>{props.content}</p>
    </div>
  );
}

export default Note;
