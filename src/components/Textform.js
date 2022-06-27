import React, { useState } from "react";

export default function Textform(props) {
  const [text, settext] = useState("");

  const handleChange = (event) => {
    settext(event.target.value);
  };

  const handleUp = () => {
    settext(text.toUpperCase());
  };

  const handleLo = () => {
    settext(text.toLowerCase())
  };

  const handleSlice=()=>{
    settext(text.slice(0,10))
  }
  const handleSpaces=()=>{
    let newtext = text.split(/[ ]+/)
    settext(newtext.join(" "))
  }

  const handleClear=()=>{
    settext("")
  }

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
        <button type="button" className="btn btn-primary mx-3 my-2" onClick={handleUp}>
          Convert to UpperCase
        </button>

        <button type="button" className="btn btn-primary mx-3 my-2" onClick={handleLo}>
          Convert to LowerCase
        </button>

        <button type="button" className="btn btn-primary mx-3 my-2" onClick={handleSlice}>
          Slice upto 10 characters
        </button>

        <button type="button" className="btn btn-primary mx-3 my-2" onClick={handleSpaces}>
          Remove ExtraSpaces
        </button>

        <button type="button" className="btn btn-primary mx-3 my-2" onClick={handleClear}>
          Clear text
        </button>
      </div>
    </div>
  );
}
