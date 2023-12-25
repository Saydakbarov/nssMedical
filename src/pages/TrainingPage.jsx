import { Box } from "@mui/material";
import React from "react";
import HeaderMenu from "../components/HomeComponents/HeaderMenu";
import Footer from "../components/Footer/Footer";
import TrainingMain from "../components/Training/TrainingMain";
import TrainingBox from "../components/Training/TrainingBox";
import HeaderMain from "../components/HomeComponents/HeaderMain";

export default function TrainingPage({ lang, setLang }) {
  return (
    <Box>
      <HeaderMenu lang={lang} setLang={setLang} />
      <HeaderMain lang={lang} />
      <TrainingBox/>
      <Footer lang={lang} />
    </Box>
  );
}
