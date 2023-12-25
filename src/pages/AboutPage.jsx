import { Box } from "@mui/material";
import React from "react";
import HeaderMenu from "../components/HomeComponents/HeaderMenu";
import Footer from "../components/Footer/Footer";
import AboutMain from "../components/AboutComponents/AboutMain";
import AboutUs from "../components/AboutComponents/AboutUs";
import FormComp from "../components/AboutComponents/FormComp";
import HeaderMain from "../components/HomeComponents/HeaderMain";

export default function AboutPage({ lang, setLang }) {
  console.log(lang);
  return (
    <Box>
      <HeaderMenu lang={lang} setLang={setLang} />

      <HeaderMain lang={lang} />

      <AboutUs lang={lang} />

      <FormComp lang={lang} />
      <Footer lang={lang} />
    </Box>
  );
}
