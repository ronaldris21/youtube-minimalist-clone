import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton, Input } from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";

const SearchBar = () => (
  <Paper
    component="form"
    onSubmit={() => {}}
    sx={{
      borderRadius: 20,
      border: "1px solid #e3e3e3",
      pl: 2,
      boxShadow: "none",
      mr: { sm: 5 },
    }}
  >
    <input
      className="search-bar"
      placeholder="Search..."
      value=""
      onChange={() => {}}
    />
    <IconButton type="submit" sx={{ p: "10px", color: "red" }}>
      <SearchIcon />
    </IconButton>
  </Paper>
);

export default SearchBar;
