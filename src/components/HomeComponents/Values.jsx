import { Box, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

import "./styles/Values.scss";
import content from "../Localization/content";

export default function Values({ lang }) {
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

  return (
    <Box sx={{ mt: 12, p: 3 }} className="globalContainer">
      <Typography sx={{ fontSize: "34px", textAlign: "center" }}>
        {content[lang].home.values.our_values_title}
      </Typography>
      <Grid container justifyContent={"center"} mt={8} gap={5}>
        <Grid
          item
          lg={3}
          md={5}
          sm={8}
          xs={12}
          sx={{
            boxShadow:
              "rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px",
            p: 2,
            borderRadius: "4px",
            background: "white",
          }}
          className={`block animate__animated  ${
            isVisible ? "animate__rotateInDownLeft" : ""
          }`}
        >
          <Box sx={{ textAlign: "center", p: 2 }}>
            <Box className="boxTitle  ">
              <Typography sx={{ fontSize: "24px", fontWeight: "bold" }}>
                {content[lang].home.values.our_values_card_mission}
              </Typography>
            </Box>
            <Typography
              sx={{
                fontSize: "16px",
                color: "gray",
                mt: 2,
                lineHeight: "30px",
              }}
            >
              {content[lang].home.values.our_values_card_mission_text}
            </Typography>
          </Box>
        </Grid>

        <Grid
          item
          lg={3}
          md={5}
          sm={8}
          xs={12}
          sx={{
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
            p: 2,
            borderRadius: "4px    ",
            background: "white",
          }}
          className={`block animate__animated  ${
            isVisible ? "animate__rotateInDownLeft" : ""
          }`}
        >
          <Box sx={{ textAlign: "center", p: 2 }}>
            <Box className="boxTitle  ">
              <Typography sx={{ fontSize: "24px", fontWeight: "bold" }}>
                {content[lang].home.values.our_values_card_service}
              </Typography>
            </Box>
            <Typography
              sx={{
                fontSize: "16px",
                color: "gray",
                mt: 2,
                lineHeight: "30px",
              }}
            >
              {content[lang].home.values.our_values_card_service_text}
            </Typography>
          </Box>
        </Grid>

        <Grid
          item
          lg={3}
          md={5}
          sm={8}
          xs={12}
          sx={{
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
            p: 2,
            borderRadius: "4px    ",
            background: "white",
          }}
          className={`block animate__animated  ${
            isVisible ? "animate__rotateInDownLeft" : ""
          }`}
        >
          <Box sx={{ textAlign: "center", p: 2 }}>
            <Box className="boxTitle  ">
              <Typography sx={{ fontSize: "24px", fontWeight: "bold" }}>
                {content[lang].home.values.our_values_card_excellence}
              </Typography>
            </Box>
            <Typography
              sx={{
                fontSize: "16px",
                color: "gray",
                mt: 2,
                lineHeight: "30px",
              }}
            >
              {content[lang].home.values.our_values_card_excellence_text}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
