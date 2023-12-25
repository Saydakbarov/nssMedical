import { Box } from "@mui/material";
import React from "react";
import HeaderMenu from "../components/HomeComponents/HeaderMenu";
import Footer from "../components/Footer/Footer";
import ServiceMain from "../components/Servicecomponents/ServiceMain";
import ServiceContainer from "../components/Servicecomponents/ServiceContainer";
import AccordionComp from "../components/Servicecomponents/AccordionComp";
import HeaderMain from "../components/HomeComponents/HeaderMain";

export default function ServicePage({ lang, setLang }) {
  return (
    <Box>
      <HeaderMenu lang={lang} setLang={setLang} />

        <HeaderMain lang={lang} />

      <ServiceContainer lang={lang} />

      <AccordionComp lang={lang} />
      <Footer lang={lang} />
    </Box>
  );
}
