import React, { useEffect, useState } from "react";
import { Box, Button, Container, Grid, Typography } from "@mui/material";

import "../Contact/Styles/ContactForm.scss";
import { ServiceData } from "../../data";
import {
  AccessAlarm,
  ArrowLeft,
  Class,
  HourglassBottom,
  MedicationLiquid,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import content from "../Localization/content";

import "./Styles/SingleMain.scss";

export default function SingletMain({ id, lang }) {
  const [data, setData] = useState([]);

  const [doctorData, setDoctorData] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    if (lang == "ru") {
      content.ru.service.ServiceData.filter((e) =>
        e.id == id ? setData(e.singleData) : []
      );
    } else {
      content.uz.service.ServiceData.filter((e) =>
        e.id == id ? setData(e.singleData) : []
      );
    }
  }, [id, lang]);

  useEffect(() => {
    if (lang == "ru") {
      content.ru.doctors.team.team_data.filter((e) =>
        e.id == id ? setDoctorData(e.doctors) : []
      );
    } else {
      content.uz.doctors.team.team_data.filter((e) =>
        e.id == id ? setDoctorData(e.doctors) : []
      );
    }
  }, [id, lang]);

  return (
    <Box sx={{ position: "relative", zIndex: 10 }}>
      <Box sx={{ p: { xs: 0, sm: 1, md: 2 } }}>
        <Grid container justifyContent={"center"} mt={10}>
          <Grid
            item
            lg={10}
            md={10}
            sm={10}
            xs={11}
            sx={{
              p: { xs: 1, sm: 1, md: 3 },
              borderRadius: "10px",
              boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
              cursor: "pointer",
              background: "white",
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "20px", sm: "30px", ms: "35px", lg: "40px" },
                color: "#274760",
              }}
            >
              {data.title}
            </Typography>

            <Box
              sx={{
                background: "#D8E5FF",
                borderLeft: "3px solid red",
                p: { xs: 1, sm: 1, md: 3 },
                mt: 6,
              }}
            >
              <p
                style={{
                  fontSize: "18px",
                  lineHeight: { xs: "13px", sm: "20px", md: "30px" },
                  letterSpacing: { xs: "0px", sm: "1px" },
                }}
                dangerouslySetInnerHTML={{ __html: data.description }}
              >
                {/* {} */}
              </p>
            </Box>
            <Box
              sx={{
                width: "100%",
                mt: 8,
                display: data?.img?.length > 1 ? "flex" : "block",
                gap: "20px",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              {data?.img?.map((v, i) => (
                <Box
                  sx={{
                    height: { xs: "300px", sm: "400px", md: "600px" },
                    width:
                      data?.img?.length > 1
                        ? { xs: "100%", sm: "100%", md: "570px" }
                        : "auto",
                    margin: data?.img?.length > 1 ? "none" : "0 auto",
                  }}
                >
                  <img
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "10px",
                      objectFit: "contain",
                    }}
                    src={v}
                    alt=""
                  />
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ textAlign: "center" }}>
        <Button
          startIcon={<ArrowLeft />}
          sx={{
            background: "linear-gradient(270deg, #307bc4 0%, #274760 100%)",
            p: 1,
            borderRadius: "30px",
            width: "130px",
            mt: 5,

            "&:hover": {
              background: "linear-gradient(270deg, #307bc4 0%, #274760 100%)",
            },
          }}
          variant="contained"
          onClick={() => navigate("/service")}
        >
          Back
        </Button>
      </Box>

      <Box sx={{ p: 2 }}>
        {data.id !== 14 && data.id !== 15 ? (
          <Box
            sx={{
              display: "flex",
              gap: "10px",
              justifyContent: "center",
              mt: 8,
            }}
          >
            {!data.singleTitle ? (
              <>
                <Typography
                  sx={{
                    fontSize: {
                      xs: "20px",
                      sm: "24px",
                      md: "34px",
                      lg: "44px",
                      color: "#01476B",
                    },
                  }}
                >
                  {lang == "ru" ? "Врач" : "Shifokor"}
                </Typography>
                <Typography
                  sx={{
                    fontSize: {
                      xs: "20px",
                      sm: "24px",
                      md: "34px",
                      lg: "44px",
                      color: "#01476B",
                    },
                  }}
                >
                  {data.title}
                </Typography>
              </>
            ) : (
              <Typography
                sx={{
                  fontSize: {
                    xs: "20px",
                    sm: "24px",
                    md: "34px",
                    lg: "44px",
                    color: "#01476B",
                  },
                }}
              >
                {data.singleTitle}
              </Typography>
            )}
          </Box>
        ) : (
          ""
        )}

        <Grid container justifyContent={"center"} gap={3} mt={5}>
          {doctorData?.map((v, i) => (
            <Grid
              key={i}
              item
              lg={3}
              md={4}
              sm={6}
              xs={11}
              sx={{
                boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                p: 2,
                borderRadius: "10px",
                background: "white",
              }}
              className="doctorBox"
            >
              <Box sx={{}} className="hoverBox"></Box>
              <Box className="textBox">
                <Typography sx={{ fontSize: "18px" }}>
                  {v.experience}
                </Typography>
                <Typography sx={{ fontSize: "18px", mt: 1 }}>
                  {v.category}
                </Typography>
              </Box>
              <Box>
                <img
                  style={{
                    width: "100%",
                    height: "420px",
                    objectFit: "cover",
                    objectPosition: "50% 35%",
                  }}
                  src={v.img}
                  alt=""
                />
              </Box>
              <Typography sx={{ fontSize: "22px", fontWeight: "bold" }}>
                {v.name}
              </Typography>
              <Typography sx={{ fontSize: "18px", mt: 2 }}>{v.job}</Typography>

              <Typography sx={{ mt: 6 }}>
                записаться на приём к врачу вы можете по телефону:{" "}
                <a
                  href="tel:+998555083030"
                  style={{
                    fontWeight: "bold",
                    textDecoration: "none",
                  }}
                >
                  55 508 30 30
                </a>
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
