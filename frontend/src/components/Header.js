import React from "react";
import { Link } from "react-router-dom";
import { Box, Stack } from "@mui/material";
// import UploadIcon from '@mui/icons-material/Upload';
import SearchIcon from "@mui/icons-material/Search";
import UploadVideo from "./UploadVideo";

const Header = ({ handleSearch, videoDetails, children }) => {
  return (
    <Box
      sx={{
        backgroundColor: "#202020",
        overflowX: "hidden",
        display: "flex",
        justifyContent: "space-between",
        padding:"16px"
      }}
    >
        <Link to="/">
          <img src='https://x-flix-web.netlify.app/images/Logo.svg' alt='logo' height='45px'/>
        </Link>
        {!videoDetails && (
          <Box className="search-bar-desktop">
            <input
              className="search-input"
              placeholder="Search"
              onChange={(e) => handleSearch(e.target.value)}
            />
            <button type="submit" className="search-button">
              <SearchIcon />
            </button>
          </Box>
        )}
        <Box>
          <UploadVideo />
        </Box>
    </Box>
  );
};

export default Header;
