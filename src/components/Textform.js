import React, { useState } from "react";

export default function Textform(props) {
  const [text, settext] = useState("");

  const handleChange = (event) => {
    settext(event.target.value);
  };

  const handleUp=()=>{
    settext(text.toUpperCase())
    // console.log("up")
  };

  return (
    <div className="mx-2 my-2">
      <h3>{props.heading}</h3>

      <div className="my-3">
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="8"
          value={text}
          onChange={handleChange}
        ></textarea>
      </div>

      <div className="container">
        <button type="button" className="btn btn-primary" onClick={handleUp}>
          Convert to UpperCase
        </button>
      </div>
    </div>
  );
}
