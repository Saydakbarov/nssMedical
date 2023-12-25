import { Box } from "@mui/material";
import React from "react";
import HeaderMenu from "../components/HomeComponents/HeaderMenu";
import Footer from "../components/Footer/Footer";
import DoctorsMain from "../components/Doctors/DoctorsMain";
import Team from "../components/Doctors/Team";
import HeaderMain from "../components/HomeComponents/HeaderMain";

export default function Doctors({ lang, setLang }) {
  return (
    <Box>
      <HeaderMenu lang={lang} setLang={setLang} />
      <HeaderMain lang={lang} />
      <Team lang={lang} />

      <Footer lang={lang} />
    </Box>
  );
}
