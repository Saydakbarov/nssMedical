import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Suspense, lazy, useEffect, useState } from "react";

// import HomePage from "./pages/HomePage";
// import AboutPage from "./pages/AboutPage";
// import BlogPage from "./pages/BlogPage";
// import ContactPage from "./pages/ContactPage";
import Loader from "./components/Loader/Loader";
// import Vacancy from "./pages/Vacancy";
// import ServicePage from "./pages/ServicePage";
// import SinglePage from "./pages/SinglePage";

import HomeAboutVideo from "./images/homepageImages/HomeAboutvideo.mp4";
import Departments from "./pages/Departments";
import Doctors from "./pages/Doctors";
import TrainingPage from "./pages/TrainingPage";
import ThankYou from "./components/ThankYou";

function App() {
  const HomePage = lazy(() => import("./pages/HomePage"));
  const AboutPage = lazy(() => import("./pages/AboutPage"));
  const BlogPage = lazy(() => import("./pages/BlogPage"));
  const ContactPage = lazy(() => import("./pages/ContactPage"));
  // const Loader = lazy(() => import("./components/Loader/Loader"));
  const Vacancy = lazy(() => import("./pages/Vacancy"));
  const ServicePage = lazy(() => import("./pages/ServicePage"));
  const SinglePage = lazy(() => import("./pages/SinglePage"));
  // const [loaded, setLoaded] = useState(false);

  const [lang, setLang] = useState(
    JSON.parse(window.localStorage.getItem("lang")) || "ru"
  );

  // useEffect(() => {
  //   let timer = setTimeout(() => setLoaded(true), 3000);
  //   return () => {
  //     clearTimeout(timer);
  //   };
  // }, []);
  return (
    <div className="App ">
      <video
        style={{
          minHeight: "100%",
          minWidth: "100%",
          position: "fixed",
          right: 0,
          bottom: 0,
          zIndex: "-99",
        }}
        id="myVideo"
        autoPlay
        muted
        loop
      >
        <source src={HomeAboutVideo} type="video/mp4" />
      </video>
      <BrowserRouter>
        <>
          <Routes>
            <Route
              path="/"
              element={
                <Suspense fallback={<Loader />}>
                  <HomePage lang={lang} setLang={setLang} />
                </Suspense>
              }
            />
            <Route
              path="/about"
              element={
                <Suspense fallback={<Loader />}>
                  <AboutPage lang={lang} setLang={setLang} />
                </Suspense>
              }
            />
            <Route
              path="/doctors"
              element={
                <Suspense fallback={<Loader />}>
                  <Doctors lang={lang} setLang={setLang} />
                </Suspense>
              }
            />
            <Route
              path="/vacancy"
              element={
                <Suspense fallback={<Loader />}>
                  <Vacancy lang={lang} setLang={setLang} />
                </Suspense>
              }
            />
            <Route
              path="/departments"
              element={
                <Suspense fallback={<Loader />}>
                  <Departments lang={lang} setLang={setLang} />
                </Suspense>
              }
            />
            <Route
              path="/service"
              element={
                <Suspense fallback={<Loader />}>
                  <ServicePage lang={lang} setLang={setLang} />
                </Suspense>
              }
            />
            <Route
              path="/contact"
              element={
                <Suspense fallback={<Loader />}>
                  <ContactPage lang={lang} setLang={setLang} />
                </Suspense>
              }
            />
            <Route
              path="/training"
              element={
                <Suspense fallback={<Loader />}>
                  <TrainingPage lang={lang} setLang={setLang} />
                </Suspense>
              }
            />

            <Route
              path="/single/:id"
              element={
                <Suspense fallback={<Loader />}>
                  <SinglePage lang={lang} setLang={setLang} />
                </Suspense>
              }
            />

            <Route
              path="/answerVacancy"
              element={
                <Suspense fallback={<Loader />}>
                  <ThankYou lang={lang} setLang={setLang} />
                </Suspense>
              }
            />

            <Route
              path="*"
              element={
                <Suspense fallback={<Loader />}>
                  <HomePage lang={lang} setLang={setLang} />
                </Suspense>
              }
            />
          </Routes>
        </>
      </BrowserRouter>
    </div>
  );
}

export default App;
