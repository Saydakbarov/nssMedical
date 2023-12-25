import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import {
  ArrowRight,
  ArrowRightAlt,
  Call,
  Email,
  LocalHospital,
  Place,
} from "@mui/icons-material";
import content from "../Localization/content";
import { Link, useNavigate } from "react-router-dom";

import "./styles/Header.scss";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper/modules";
import Connection from "./Connection";

export default function HeaderMain({ lang }) {
  const navigate = useNavigate();
  return (
    <Box>
      <Swiper
        pagination={true}
        loop="true"
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        {content[lang].home.headerCarousel?.map((v, i) => (
          <SwiperSlide key={i}>
            <Box
              sx={{}}
              component={"div"}
              // className="animateBox"
            >
              {/* <Grid
                className="globalContainer"
                container
                alignItems={"center"}
                justifyContent={"center"}
              >
                <Grid
                  item
                  lg={5}
                  md={6}
                  sm={8}
                  xs={10}
                  sx={{
                    color: "#ffff",
                  }}
                >
                  <Typography
                    // className="animate__animated  animate__zoomIn animate__delay-1s "
                    sx={{
                      fontSize: {
                        xs: "30px",
                        sm: "40px",
                        md: "48px",
                        lg: "48px",
                      },
                      color: "#fff",
                      textAlign: "start",
                      textShadow: "2px 3px 2px rgba(10,32,139,0.6)",
                    }}
                  >
                    {v.header_main_title}
                  </Typography>
                </Grid>

                 <Grid item lg={6} md={5} sm={8} xs={10} sx={{}}>
                  <img
                    style={{
                      width: "100%",
                      borderRadius: "10px",
                      height: "500px",
                      objectFit: "contain",
                    }}
                    src={v.carouselImg}
                    alt=""
                  />
                </Grid> 
              </Grid> */}
              <img
                style={{
                  width: "100%",
                  height: "auto",
                }}
                src={v.carouselImg}
                alt=""
              />
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
      <Box sx={{ p: 2 }}>
        <Container
          sx={{
            marginTop: { xs: "-10px", sm: "-25px", md: "-75px" },
            boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
            background: "white",
            borderRadius: "10px",
            // p: 2,
            position: "relative",
            zIndex: "2",
          }}
        >
          <Grid
            container
            justifyContent={"center"}
            alignItems={"center"}
            sx={{ borderRadius: "10px", p: { xs: 2, sm: 2, md: 3, lg: 4 } }}
          >
            <Grid
              item
              lg={4}
              md={4}
              sm={10}
              xs={12}
              sx={{ display: { xs: "none", sm: "block", md: "block" } }}
            >
              <Box
                sx={{
                  display: "flex",
                  gap: "15px",
                  p: 2,
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    background: "#307BC4",
                    borderRadius: "50%",
                    width: "70px",
                    height: "70px",
                    textAlign: "center",
                    lineHeight: "95px",
                  }}
                >
                  <Call sx={{ color: "white", fontSize: "40px" }} />
                </Box>

                <a
                  target="blank_"
                  href="tel:+99855- 508-30-30"
                  style={{ textDecoration: "none" }}
                >
                  <Box>
                    <Typography sx={{ fontSize: "16px", fontWeight: "bold" }}>
                      Горячая линия
                    </Typography>
                    <Typography sx={{ fontSize: "16px", color: "gray" }}>
                      99855- 508-30-30
                    </Typography>
                  </Box>
                </a>
              </Box>
            </Grid>

            <Grid
              item
              lg={4}
              md={4}
              sm={10}
              xs={12}
              sx={{ display: { xs: "none", sm: "block", md: "block" } }}
            >
              <a
                target="blank_"
                style={{ textDecoration: "none" }}
                href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2995.1261452496615!2d69.17378317564025!3d41.34961179833819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8f1baf30c0dd%3A0xb401d7d56723abfa!2z0JrQu9C40L3QuNC60LAgTlNTIE1lZGljYWwgQ2VudGVy!5e0!3m2!1sru!2s!4v1695904142098!5m2!1sru!2s"
              >
                <Box
                  sx={{
                    display: "flex",
                    gap: "15px",
                    p: 1,
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      background: "#307BC4",
                      borderRadius: "50%",
                      width: "70px",
                      height: "70px",
                      textAlign: "center",
                      lineHeight: "95px",
                    }}
                  >
                    <Place sx={{ color: "white", fontSize: "40px" }} />
                  </Box>

                  <Box>
                    <Typography sx={{ fontSize: "16px", fontWeight: "bold" }}>
                      Адрес
                    </Typography>
                    <Typography sx={{ fontSize: "20px", color: "gray" }}>
                      Tashkent
                    </Typography>
                  </Box>
                </Box>
              </a>
            </Grid>

            <Grid
              item
              lg={2}
              md={3}
              sm={10}
              xs={11}
              sx={{ textAlign: "center", p: 0 }}
            >
              <Button
                variant="contained"
                fullWidth
                endIcon={<ArrowRightAlt />}
                sx={{
                  background:
                    "linear-gradient(270deg, #307bc4 0%, #274760 100%)",
                  p: 2,
                  borderRadius: "30px",
                  "&:hover": {
                    transition: " 0.5s linear",

                    background:
                      "linear-gradient(270deg, #307bc4 0%, #274760 100%)",
                  },
                  display: { xs: "none", sm: "flex" },
                }}
                onClick={() => navigate("/contact")}
              >
                Узнать больше
              </Button>
              <Box
                sx={{
                  display: { xs: "block", sm: "none" },
                }}
              >
                <Connection
                  text={"Горячая линия"}
                  sx={{
                    background:
                      "linear-gradient(270deg, #307bc4 0%, #274760 100%)",
                    p: 1,
                    borderRadius: "30px",
                    width: "100%",
                    "&:hover": {
                      transition: " 0.5s linear",

                      background:
                        "linear-gradient(270deg, #307bc4 0%, #274760 100%)",
                    },
                  }}
                />
              
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
