import React, { useState, useEffect, useRef } from "react";

const SearchBox = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    const handleShortcut = (event) => {
      if ((event.ctrlKey || event.metaKey) && event.key === "/") {
        event.preventDefault(); // Prevent default behavior
        inputRef.current.focus();
      }
    };

    window.addEventListener("keydown", handleShortcut);
    return () => window.removeEventListener("keydown", handleShortcut);
  }, []);

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      onSearch(query);
    }
  };

  return (
    <div className="search-box-wrapper">
      <input
        ref={inputRef}
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Search places..."
        className="search-box"
      />
      <span className="shortcut-text">Ctrl + /</span>
    </div>
  );
};

export default SearchBox;
