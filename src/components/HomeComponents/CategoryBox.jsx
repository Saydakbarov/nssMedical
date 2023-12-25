import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { CategoryData } from "../../data";

import "./styles/CategoryBox.scss";
import { useNavigate, useParams } from "react-router-dom";
import content from "../Localization/content";

export default function CategoryBox({ lang }) {
  const navigate = useNavigate();
  return (
    <Box
      sx={{ marginTop: "-130px" }}
      className="block animate__animated  animate__zoomIn globalContainer"
    >
      <Grid container justifyContent={"center"} mt={8} gap={4}>
        {content[lang].service.ServiceData.map((v, i) => (
          <Grid
            key={i}
            item
            lg={3}
            md={3}
            sm={5}
            xs={11}
            sx={{
              p: 2,
              borderRadius: "10px",
              boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
              cursor: "pointer",
              background: "#fff",
            }}
            component={"div"}
            onClick={() => navigate("/single/" + v.id)}
          >
            <img
              style={{ width: "100%", height: "200px", objectFit: "cover" }}
              src={v.img}
              alt=""
            />

            <Typography
              sx={{
                mt: 1,
                fontSize: "20px",
                fontWeight: "bold",
                color: "#274760",
                textAlign: "center",
              }}
            >
              {v.title}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
