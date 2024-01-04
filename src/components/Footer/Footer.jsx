import {
  Call,
  Email,
  Facebook,
  HealthAndSafety,
  Instagram,
  Place,
  Telegram,
} from "@mui/icons-material";

import {
  Box,
  Button,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { MenuData } from "../../data";
import { Link, useNavigate } from "react-router-dom";

import FooterBackground from "../../images/footer/background.png";
import FooterBox from "../../images/footer/footerBox.png";
import content from "../Localization/content";

export default function Footer({ lang }) {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const { phone, name } = e.target.elements;
    const token = "6779086929:AAHwJlS-gn0E-Kocv4gpXQfIyg4hR4W2Iyg";
    const chat_id = -1002024050958;
    let text = "";

    text =
      text +
      ` %0A Имя клиента: ${name.value}  %0A Номер клиента: ${phone.value} `;

    const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${text}`;

    let api = new XMLHttpRequest();
    api.open("GET", url, true);
    api.send();
    phone.value = "";
    name.value = "";

    navigate("/answerVacancy");
  };
  return (
    <Box
      sx={{
        p: 4,
        mt: 24,
        width: "100%",
        backgroundImage: `url('${FooterBackground}')`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: " top center",
        backgroundSize: "cover",
        pt: 30,
      }}
    >
      <Box
        sx={{
          width: "300px",
          margin: "0 auto",
          marginTop: "-320px",
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "30%",
            left: "35%",
            textAlign: "center",
          }}
        >
          <HealthAndSafety sx={{ color: "white", fontSize: "80px" }} />
          <Typography
            sx={{ fontSize: "24px", fontWeight: "bold", color: "#fff" }}
          >
            Health
          </Typography>
        </Box>

        <img style={{ width: "100%" }} src={FooterBox} alt="" />
      </Box>
      <Grid
        container
        justifyContent={"center"}
        alignItems={"center"}
        gap={4}
        mt={10}
        className="globalContainer"
      >
        <Grid item lg={4}>
          <Typography
            sx={{
              fontSize: "28px",
              color: "#274760",
            }}
          >
            NSS Medical Center
          </Typography>

          <Box>
            <Box sx={{ display: "flex", gap: "15px", mt: 2 }}>
              <Place sx={{ color: "#307BC4" }} />
              <Typography sx={{ color: "#274760" }}>
                ул. Фараби , 449-Б, Алмазарский район, Ташкент
              </Typography>
            </Box>
            <Box sx={{ display: "flex", gap: "15px", mt: 2 }}>
              <Call sx={{ color: "#307BC4" }} />
              <a
                target="blank_"
                href="tel:+998555083030"
                style={{ color: "#274760", textDecoration: "none" }}
              >
                +99855- 508-30-30
              </a>
            </Box>

            <Box sx={{ display: "flex", gap: "15px", mt: 2 }}>
              <Email sx={{ color: "#307BC4" }} />
              <Typography sx={{ color: "#274760" }}>
                nssmedicalcenter1@gmail.com
              </Typography>
            </Box>
          </Box>
        </Grid>

        <Grid item lg={3}>
          <Box>
            {content[lang]?.header.links.map((item, i) => (
              <Box key={i} sx={{ display: "flex", flexDirection: "column" }}>
                <Button
                  key={item.title}
                  sx={{
                    color: "#274760",
                    fontFamily: "Barlow",
                    fontWeight: "500",
                    ml: 4,
                    fontSize: "18px",
                  }}
                  onClick={() => navigate(item.path)}
                >
                  {item.title}
                </Button>
              </Box>
            ))}

            <Box
              sx={{
                display: "flex",
                gap: "10px",
                justifyContent: "center",
                mt: 2,
                color: "#274760",
              }}
            >
              <Link
                target="blank"
                to="https://www.instagram.com/nss_medical_center/"
                style={{ textDecoration: "none", color: "#274760" }}
              >
                <Instagram />
              </Link>

              <Link
                target="blank"
                to="https://t.me/nssmed"
                style={{ textDecoration: "none", color: "#274760" }}
              >
                <Telegram />
              </Link>
              <Link
                to="https://www.facebook.com/nss.uzb/"
                target="blank"
                style={{ textDecoration: "none", color: "#274760" }}
              >
                <Facebook />
              </Link>
            </Box>
          </Box>
        </Grid>

        <Grid item lg={4}>
          <Box component={"form"} onSubmit={handleSubmit}>
            <TextField
              name="name"
              fullWidth
              id="outlined-basic"
              label="Имя "
              variant="outlined"
            />
            <TextField
              sx={{ mt: 3 }}
              fullWidth
              type="number"
              id="outlined-basic"
              label="Номер телефона"
              variant="outlined"
              name="phone"
              required
            />

            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{
                background: "linear-gradient(270deg, #307bc4 0%, #274760 100%)",
                p: 1,
                borderRadius: "30px",
                width: "150px",
                mt: 3,
                transition: " 0.5s linear",

                "&:hover": {
                  transition: " 0.5s linear",
                  width: "180px",
                  background:
                    "linear-gradient(270deg, #307bc4 0%, #274760 100%)",
                },
              }}
            >
              Отправить
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
