import React, { useState } from "react";

function ImageSearch({ searchText }) {
  const [text, setText] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    searchText(text);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => setText(e.target.value)} />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default ImageSearch;
