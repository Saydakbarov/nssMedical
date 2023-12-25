import { ArrowRightAlt } from "@mui/icons-material";
import { Box, Button, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import content from "../Localization/content";
import { useNavigate } from "react-router-dom";

import HomeAboutImg from "../../images/homepageImages/HomeAbout.jpg";
import HomeAboutVideo from "../../images/homepageImages/HomeAboutvideo.mp4";

export default function HomeAbout({ lang }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.querySelector(".block");
      const rect = element.getBoundingClientRect();
      if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const navigate = useNavigate();
  return (
    <Box sx={{ mt: 10 }} className="globalContainer">
      <Grid container justifyContent={"center"} gap={4}>
        <Grid
          item
          lg={6}
          md={6}
          sm={10}
          xs={11}
          sx={{ position: "relative" }}
          className={`block animate__animated ${isVisible ? "animate__fadeInLeft" : ''} `}
        >
          <Box sx={{ width: "90%" }}>
            <img
              style={{ width: "100%", borderRadius: "10px" }}
              src={HomeAboutImg}
              alt=""
            />
          </Box>
        </Grid>

        <Grid
          item
          lg={4}
          md={4}
          sm={10}
          xs={11}
          className="block animate__animated  animate__fadeInDown"
        >
          <Typography
            sx={{
              fontSize: { xs: "28px", sm: "32px", md: "44px", lg: "50px" },
              fontWeight: "bold",
              color: "#274760",
            }}
          >
            {content[lang].home.about.about_title}
          </Typography>
          <Typography sx={{ fontSize: "22px", color: "blue" }}>
            {content[lang].home.about.company_name}
          </Typography>

          <Typography sx={{ fontSize: "24px", color: "gray", mt: 4 }}>
            {content[lang].home.about.company_information}
          </Typography>

          <Typography sx={{ color: "gray", fontSize: "15px", mt: 4 }}>
            {content[lang].home.about.description}
          </Typography>

          <Button
            endIcon={<ArrowRightAlt />}
            sx={{
              background: "linear-gradient(270deg, #307bc4 0%, #274760 100%)",
              p: 1,
              borderRadius: "30px",
              width: "150px",
              mt: 5,
              transition: " 0.5s linear",

              "&:hover": {
                transition: " 0.5s linear",
                width: "180px",
                background: "linear-gradient(270deg, #307bc4 0%, #274760 100%)",
              },
            }}
            variant="contained"
            onClick={() => navigate("/about")}
          >
            Подробно
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
