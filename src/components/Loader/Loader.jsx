import React from "react";
import "./Loader.scss";
import { Box } from "@mui/material";

export default function Loader() {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", mt: 40 }}>
      <div id="page">
        <div id="container">
          <div id="ring"></div>
          <div id="ring"></div>
          <div id="ring"></div>
          <div id="ring"></div>
          <div id="h3">loading</div>
        </div>
      </div>
    </Box>
  );
}
