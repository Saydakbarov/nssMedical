import { Call, Email, Place } from "@mui/icons-material";
import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";

export default function ContactBox() {
  return (
    <Box sx={{ p: 3, mt: 8 }}>
      <Typography
        sx={{
          fontSize: { xs: "24px", sm: "30px", md: "40px", lg: "50px" },
          textAlign: "center",
        }}
      >
        Найдите нас здесь
      </Typography>
      <Grid
        container
        gap={3}
        sx={{
          justifyContent: "center",
          mt: 5,
        }}
      >
        <Grid
          item
          lg={3}
          md={3}
          sm={8}
          xs={10}
          sx={{ background: "#E8F4F7", p: 2, borderRadius: "8px" }}
        >
          <Box sx={{ display: "flex", gap: "20px", alignItems: "center" }}>
            <Box>
              <Call sx={{ fontSize: "50px", color: "#5896CF" }} />
            </Box>
            <Box>
              <Typography sx={{ fontSize: "24px", color: "#678092" }}>
                Телефон
              </Typography>
              <Typography sx={{ fontSize: "18px", color: "gray" }}>
              +99855- 508-30-30
              </Typography>
            </Box>
          </Box>
        </Grid>

        <Grid
          item
          lg={3}
          md={3}
          sm={8}
          xs={10}
          sx={{ background: "#E8F4F7", p: 2, borderRadius: "8px" }}
        >
          <Box
            sx={{
              display: "flex",
              gap: "20px",
              alignItems: "center",
            }}
          >
            <Box>
              <Email sx={{ fontSize: "50px", color: "#5896CF" }} />
            </Box>
            <Box>
              <Typography sx={{ fontSize: "24px", color: "#678092" }}>
              Электронная почта
              </Typography>
              <Typography sx={{ fontSize: "15px", color: "gray" }}>
              nssmedicalcenter1@gmail.com
              </Typography>
            </Box>
          </Box>
        </Grid>

        <Grid
          item
          lg={3}
          md={3}
          sm={8}
          xs={10}
          sx={{ background: "#E8F4F7", p: 2, borderRadius: "8px" }}
        >
          <Box sx={{ display: "flex", gap: "20px", alignItems: "center" }}>
            <Box>
              <Place sx={{ fontSize: "50px", color: "#5896CF" }} />
            </Box>
            <Box>
              <Typography sx={{ fontSize: "24px", color: "#678092" }}>
                Адрес
              </Typography>
              <Typography sx={{ fontSize: "15px", color: "gray" }}>
                ул. Фараби , 449-Б, Алмазарский район, Ташкент
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>

      <Box
        sx={{
          margin: "0 auto",
          mt: 10,
        }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2995.1261452496615!2d69.17378317564025!3d41.34961179833819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8f1baf30c0dd%3A0xb401d7d56723abfa!2z0JrQu9C40L3QuNC60LAgTlNTIE1lZGljYWwgQ2VudGVy!5e0!3m2!1sru!2s!4v1695904142098!5m2!1sru!2s"
          width="100%"
          height="450"
          loading="lazy"
        ></iframe>
      </Box>
    </Box>
  );
}
