import React from "react";
import HeaderMenu from "./HeaderMenu";
import HeaderMain from "./HeaderMain";
import { Box } from "@mui/material";

export default function Header({ lang, setLang }) {
  return (
    <Box>
      <HeaderMenu lang={lang} setLang={setLang} />
      <HeaderMain lang={lang} />
    </Box>
  );
}
