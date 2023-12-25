import React from "react";
import Header from "../components/HomeComponents/Header";
import Values from "../components/HomeComponents/Values";
import HomeAbout from "../components/HomeComponents/HomeAbout";
import HomeCategory from "../components/HomeComponents/HomeCategory";
import Footer from "../components/Footer/Footer";
import HomeBox from "../components/HomeComponents/HomeBox";
import VideoComp from "../components/HomeComponents/VideoComp";

export default function HomePage({ lang, setLang }) {
  return (
    <div>
      <Header lang={lang} setLang={setLang} />
      <HomeCategory lang={lang} />

      <HomeAbout lang={lang} />
      <Values lang={lang} />

      <VideoComp />

      <HomeBox lang={lang} />

      <Footer lang={lang} />
    </div>
  );
}
