import { Box } from "@mui/material";
import React from "react";
import HeaderMenu from "../components/HomeComponents/HeaderMenu";
import Footer from "../components/Footer/Footer";
import VacancyMain from "../components/Vacancy/VacancyMain";
import VacancyForm from "../components/Vacancy/VacancyForm";
import HeaderMain from "../components/HomeComponents/HeaderMain";

export default function Vacancy({ lang, setLang }) {
  return (
    <Box>
      <HeaderMenu lang={lang} setLang={setLang} />

      <HeaderMain lang={lang} />

      <VacancyForm lang={lang} />
      <Footer lang={lang} />
    </Box>
  );
}
