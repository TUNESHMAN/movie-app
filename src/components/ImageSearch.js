import React, { useState } from "react";
import "./form.css";

function ImageSearch({ searchText }) {
  // const [text, setText] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    // searchText(text);
  };
  return (
    // <div>
    <form onSubmit={handleSubmit} className="example">
      <input
        placeholder="Find Something"
        type="text"
        onChange={(e) => searchText(e.target.value)}
        name="search"
      />
      <button type="submit">Search</button>
    </form>
    // </div>
  );
}

export default ImageSearch;
