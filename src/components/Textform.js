import React from "react";

export default function Textform(props) {
  return (
    <div className="mx-2 my-2">

      <h3 >{props.heading}</h3>

      <div className="my-3">
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="8"
        ></textarea>
      </div>
    </div>
  );
}
