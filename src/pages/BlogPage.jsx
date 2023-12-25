import { Box } from "@mui/material";
import React from "react";
import HeaderMenu from "../components/HomeComponents/HeaderMenu";
import Footer from "../components/Footer/Footer";

export default function BlogPage({lang, setLang}) {
  return (
    <Box>
      <HeaderMenu lang={lang} setLang={setLang} />

      <Footer lang={lang} />
    </Box>
  );
}
