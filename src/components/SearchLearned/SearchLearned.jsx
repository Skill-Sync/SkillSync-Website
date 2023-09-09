import React, { useState } from "react";

import { Box } from "@mui/material";
import ResultItem from "../ResultItemInterested/ResultItemInterested";
import ResultItemLearned from "../ResultItemLearned/ResultItemLearned";
const SearchLearned = ({ data, onItemClick }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);

  const handleSearch = (event) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);

    if (term === "") {
      setSearchResults([]);
      return;
    }

    const results = data.filter((item) =>
      item.name.toLowerCase().includes(term)
    );
    setSearchResults(results);
  };

  const handleItemClick = (item) => {
    setSearchTerm("");
    setSearchResults([]);
    const updatedSelectedItems = [...selectedItems, item];
    setSelectedItems(updatedSelectedItems);
    onItemClick(updatedSelectedItems);
  };

  const handleRemoveItem = (item) => {
    const updatedSelectedItems = selectedItems.filter(
      (selectedItem) => selectedItem.id !== item.id
    );
    setSelectedItems(updatedSelectedItems);
    onItemClick(updatedSelectedItems);
  };

  return (
    <Box className="search-container">
      <Box>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearch}
        />
        <ul>
          {searchResults.map((item) => (
            <li key={item.id} onClick={() => handleItemClick(item)}>
              {item.name}
            </li>
          ))}
        </ul>
      </Box>

      <ResultItemLearned
        handleRemoveItem={handleRemoveItem}
        selectedItems={selectedItems}
      />
    </Box>
  );
};

export default SearchLearned;
