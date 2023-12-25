import {
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  AccessTime,
  Email,
  Facebook,
  Instagram,
  Language,
  Place,
  Telegram,
} from "@mui/icons-material";
import DrawerCom from "./DrawerComp";

import Logo from "../../logo.png";
import content from "../Localization/content";
import LanguageComp from "./LanguageComp";
import Certificate from "./Certificate";
import Connection from "./Connection";

import "./styles/Header.scss";

export default function HeaderMenu({ lang, setLang }) {
  const navigate = useNavigate();

  useEffect(() => {
    window?.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  //   Responsive Menu
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
      }}
    >
      <Box
        className="animate__animated  animate__fadeInDown "
        sx={{
          justifyContent: {
            xs: "center",
            sm: "center",
            md: "center",
            lg: "space-between",
            xl: "space-between",
          },
          background: "#2D689F",
          padding: "15px 30px",
          gap: "40px",
          display: { xs: "none", sm: "flex", md: "flex", lg: "flex" },
        }}
      >
        <Box
          sx={{
            gap: "20px",
            display: { xs: "none", sm: "none", md: "none", lg: "flex" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: "10px",
              alignItems: "center",
            }}
          >
            <IconButton
              sx={{
                background: "#090388",
                color: "white",
                "&:hover": {
                  background: "#090388",
                  color: "white",
                },
              }}
            >
              <Email />
            </IconButton>
            <Typography sx={{ color: "white", fontSize: "14px" }}>
              nssmedicalcenter1@gmail.com
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              gap: "10px",
              alignItems: "center",
            }}
          >
            <IconButton
              sx={{
                background: "#090388",
                color: "white",
                "&:hover": {
                  background: "#090388",
                  color: "white",
                },
              }}
            >
              <Place />
            </IconButton>
            <Typography sx={{ color: "white", fontSize: "14px" }}>
              ул. Фараби , 449-Б
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              gap: "10px",
              alignItems: "center",
            }}
          >
            <IconButton
              sx={{
                background: "#090388",
                color: "white",
                "&:hover": {
                  background: "#090388",
                  color: "white",
                },
              }}
            >
              <AccessTime />
            </IconButton>
            <Typography sx={{ color: "white", fontSize: "14px" }}>
              Пн - Сб: 07:00 - 19:00
            </Typography>
          </Box>
        </Box>

        <Box sx={{ display: "flex", gap: "20px", alignItems: "center" }}>
          <Certificate />

          <Connection text={" Запись на приём"} />

          <Link to="https://www.facebook.com/nss.uzb/" target="blank">
            <IconButton
              sx={{
                background: "#090388",
                color: "white",
                "&:hover": {
                  background: "#090388",
                  color: "white",
                },
              }}
            >
              <Facebook />
            </IconButton>
          </Link>

          <Link
            to="https://www.instagram.com/nss_medical_center/"
            target="blank"
          >
            <IconButton
              sx={{
                background: "#090388",
                color: "white",
                "&:hover": {
                  background: "#090388",
                  color: "white",
                },
              }}
            >
              <Instagram />
            </IconButton>
          </Link>

          <Link to="https://t.me/nssmed" target="blank">
            <IconButton
              sx={{
                background: "#090388",
                color: "white",
                "&:hover": {
                  background: "#090388",
                  color: "white",
                },
              }}
            >
              <Telegram />
            </IconButton>
          </Link>
        </Box>
      </Box>

      <Box
        className="animate__animated  animate__fadeInLeft "
        sx={{
          p: {
            xs: "20px 8px",
            sm: "20px 10px",
            md: "20px 30px",
            lg: "20px 30px",
          },
        }}
      >
        <Toolbar
          sx={{
            padding: "0px !important",
            zIndex: "999",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {isMatch ? (
            <>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                  alignItems: "center",
                }}
              >
                <img
                  style={{
                    width: "150px",
                    cursor: "pointer",
                  }}
                  src={Logo}
                  onClick={() => navigate("/")}
                  alt=""
                />
                <DrawerCom lang={lang} setLang={setLang} />
              </Box>
            </>
          ) : (
            <>
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
                className="globalContainer"
              >
                <Box
                  sx={{
                    display: {
                      xs: "none",
                      sm: "none",
                      md: "none",
                      lg: "block",
                    },
                  }}
                >
                  <img
                    className="draw"
                    style={{
                      width: "200px",
                      cursor: "pointer",
                    }}
                    src={Logo}
                    onClick={() => navigate("/")}
                    alt=""
                  />
                </Box>
                <Box sx={{ display: { xs: "none", sm: "block" } }}>
                  {content[lang].header?.links.map((item) => (
                    <Button
                      key={item.title}
                      sx={{
                        color: "#274760",
                        fontFamily: "Barlow",
                        fontWeight: "500",
                        ml: 1,
                        fontSize: {
                          xs: "none",
                          sm: "none",
                          md: "14px",
                          lg: "14px",
                          xl: "16px",
                        },
                      }}
                      onClick={() => navigate(item.path)}
                    >
                      {item.title}
                    </Button>
                  ))}
                </Box>

                <Box sx={{ color: "black", display: "flex", gap: "20px" }}>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Language sx={{ color: "#ffff" }} />

                    <LanguageComp lang={lang} setLang={setLang} />
                  </Box>
                </Box>
              </Box>
            </>
          )}
        </Toolbar>
      </Box>
    </Box>
  );
}
