import React, { useState } from "react";

function Textarea() {
  const [text, settext] = useState("");
  const [w, setw] = useState("0");

  function capital() {
    settext(text.toUpperCase());
  }

  function small() {
    settext(text.toLowerCase());
  }

  function copy() {
    navigator.clipboard.writeText(document.getElementById("in_text").value);
  }

  function rem_space() {
    settext(text.replace(/\s+/g, " ").trim());
  }

  function clear() {
    settext("");
    setw(0);
  }

  function handleChange(event) {
    settext(event.target.value);
    setw(text.replace(/\s+/g, " ").trim().split(" ").length);
  }

  return (
    <div class="mb-3 container col-md-8">
      <label htmlFor="exampleFormControlTextarea1" class="form-label">
        <h2 className="mt-3 mb-3">Enter Text to Analyze</h2>
      </label>
      <textarea
        className="form-control"
        id="in_text"
        rows="8"
        value={text}
        onChange={handleChange}
        placeholder="Enter Text Here"
      ></textarea>
      <button
        type="button"
        className="btn btn-dark mt-3 mx-2"
        onClick={capital}
      >
        Upper Case
      </button>
      <button type="button" className="btn btn-dark mt-3 mx-2" onClick={small}>
        Lower Case
      </button>
      <button
        type="button"
        className="btn btn-dark mt-3 mx-2"
        onClick={rem_space}
      >
        Remove Spaces
      </button>
      <button type="button" className="btn btn-dark mt-3 mx-2" onClick={copy}>
        Copy Text
      </button>
      <button type="button" className="btn btn-dark mt-3 mx-2" onClick={clear}>
        Clear Text
      </button>
      <p className="mt-3 mx-1">
        Average Reading Time ={" "}
        {(w* 0.252).toFixed(
          2
        )}{" "}
        sec
      </p>
      <p className="mt-3 mx-1">
        Words ={` ${w} , characters = ${text.replace(/\s+/g, " ").trim().split(' ').join('').length}`}
      </p>
    </div>
  );
}

export default Textarea;
