import React, { useState } from "react";
import "./searchBar.css";
const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("");

  const handleSearch = (event) => {
    event.preventDefault();
    console.log(`Searching for ${searchTerm} in ${location}`);
    // Implement your search functionality here
  };

  return (
    <div>
      <form
        className="myForm"
        onSubmit={handleSearch}
        style={{
          height: "60px",
          // scrollPaddingTop: '0px'
        }}
      >
        <div className="bar">
          <div className="input-container">
            <i className="fas fa-briefcase icon-job"></i>
            <input
              className="input1"
              type="text"
              placeholder="Job title, keywords, or company"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* <span>|</span> */}
          <div className="input-container">
            <i className="fas fa-map-marker-alt icon"></i>
            <input
              className="input2"
              type="text"
              placeholder="City, state, zip code, or 'remote'"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>

          <button type="submit" className="findButton">
            Find Jobs
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
