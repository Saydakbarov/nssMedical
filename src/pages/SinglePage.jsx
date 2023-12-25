import React from "react";
import HeaderMenu from "../components/HomeComponents/HeaderMenu";
import Footer from "../components/Footer/Footer";
import { useParams } from "react-router-dom";
import SingletMain from "../components/Single/SingleMain";
import { Box } from "@mui/material";
import HeaderMain from "../components/HomeComponents/HeaderMain";

export default function SinglePage({ lang, setLang }) {
  const { id } = useParams();

  return (
    <>
      <HeaderMenu lang={lang} setLang={setLang} />
      <HeaderMain id={id} lang={lang} />
      <SingletMain lang={lang} id={id} />

      <Footer lang={lang} />
    </>
  );
}
