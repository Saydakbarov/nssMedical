import { Box } from "@mui/material";
import React from "react";
import HeaderMenu from "../components/HomeComponents/HeaderMenu";
import Footer from "../components/Footer/Footer";
import ContactMain from "../components/Contact/ContactMain";
import ContactForm from "../components/Contact/ContactForm";

import "../components/Contact/Styles/ContactForm.scss";
import ContactBox from "../components/Contact/ContactBox";
import HeaderMain from "../components/HomeComponents/HeaderMain";

export default function ContactPage({ lang, setLang }) {
  return (
    <Box>
      <HeaderMenu lang={lang} setLang={setLang} />

      <HeaderMain lang={lang} />
      <ContactForm />

      <ContactBox />

      <Footer lang={lang} />
    </Box>
  );
}
