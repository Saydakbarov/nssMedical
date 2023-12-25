import React from "react";
import HeaderMenu from "../components/HomeComponents/HeaderMenu";
import Footer from "../components/Footer/Footer";
import DepartmentsMain from "../components/Departments/DepartmentsMain";
import { Box } from "@mui/material";
import DepartmentsBox from "../components/Departments/DepartmentsBox";
import HeaderMain from "../components/HomeComponents/HeaderMain";

export default function Departments({ lang, setLang }) {
  return (
    <div>
      <HeaderMenu lang={lang} setLang={setLang} />
    
        <HeaderMain lang={lang} />

      <DepartmentsBox />
      <Footer lang={lang} />
    </div>
  );
}
