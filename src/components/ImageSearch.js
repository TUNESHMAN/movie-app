import React from "react";
import "./form.css";

function ImageSearch({ searchText }) {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="example">
        <input
          placeholder="Find Something"
          type="text"
          onChange={(e) => searchText(e.target.value)}
          name="search"
        />
        <button type="submit">Search</button>
      </form>
      <div className="select-holder">
        <select id="select1" placeholder="World" name="world">
          <option value="" disabled selected hidden>
            World
          </option>
        </select>

        <select id="select1" name="following">
          <option value="" disabled selected hidden>
            Following
          </option>
        </select>

        <select id="select3" name="people">
          <option value="" disabled selected hidden>
            People
          </option>
        </select>

        <select id="select1" name="post">
          <option value="" disabled selected hidden>
            Post
          </option>
        </select>

        <select id="select1" name="gender">
          {" "}
          <option value="" disabled selected hidden>
            Gender
          </option>
        </select>
      </div>
    </div>
  );
}

export default ImageSearch;
