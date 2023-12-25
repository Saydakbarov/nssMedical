import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { AboutUsData } from "../../data";
import content from "../Localization/content";

import AboutCard from "../../images/AboutPage/AboutCard.jpg";

export default function AboutUs({ lang }) {
  return (
    <Box mt={10}>
      <Grid
        container
        justifyContent={"center"}
        sx={{ mt: 5 }}
        gap={5}
        className="globalContainer"
      >
        <Grid
          item
          lg={5}
          md={5}
          sm={10}
          xs={11}
          sx={{
            p: 3,
            borderRadius: "10px",
            background: "white",
            boxShadow:
              "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px",
          }}
        >
          <img
            style={{
              width: "100%",
              objectFit: "cover",
              borderRadius: "10px",
              maxHeight: "550px",
              minHeight: "300px",
            }}
            src={AboutCard}
            alt=""
          />
        </Grid>
        <Grid item lg={5} md={5} sm={10} xs={11}>
          <Typography
            sx={{
              fontSize: { xs: "24px", sm: "34px", md: "40px" },
              pb: 1,
              borderBottom: "2px solid blue",
            }}
          >
            {lang === "ru" ?  "О нас" : "Biz haqimizda"}
          </Typography>
          {lang === "ru" ? (
            <Typography sx={{ fontSize: "16px", lineHeight: "35px", mt: 2 }}>
              Здоровье – вот самая главная ценность для человека! В наше время
              высоких технологий, у каждого есть шанс поправить своё здоровье.
              Один из ярких примеров тому - открытие шесть лет назад в
              Алмазарском районе, столицы современного многопрофильного
              медицинского центра -“NSS Medical Center”, где сосредоточены
              передовые инновационные методы медицинской диагностики и
              эффективного лечения по общей онкологии, оперативной
              гинекологии,общей хирургии, маммологии, пластической хирургии,
              урологии, терапии, эндокринологии, дерматологии, медицинской
              косметологии, всех видов эндоскопических операций, лапароскопии,
              лапаротомии, гистероскопии и другие.За годы своего
              функционирования данный центр стал одним из крупных частных
              учреждений здравоохранения, которое оказывает населению широкий
              спектр квалифицированных медицинских услуг.Главным постулатом
              деятельности коллектива клиники является гарантия надежной,
              своевременной и высокопрофессиональной медицинской помощи.
            </Typography>
          ) : (
            <Typography sx={{ fontSize: "16px", lineHeight: "35px", mt: 2 }}>
              Salomatlik inson uchun eng muhim qadriyatdir! Bizning vaqtda
              yuqori texnologiyalar, har bir inson o'z salomatligini yaxshilash
              imkoniyatiga ega. Buning eng yorqin misollaridan biri olti yil
              oldin ochilishi Olmazor tumani, zamonaviy ko'p tarmoqli markaz
              tibbiyot markazi - "NSS Medical Center", bu erda tibbiy
              diagnostikaning ilg'or innovatsion usullari va umumiy onkologiyada
              samarali davolash, jarrohlik ginekologiya, umumiy jarrohlik,
              mammologiya, plastik jarrohlik, urologiya, terapiya,
              endokrinologiya, dermatologiya, tibbiyot kosmetologiya, barcha
              turdagi endoskopik operatsiyalar, laparoskopiya, laparotomiya,
              histeroskopiya va boshqalar.. Yillar davomida operatsiya, bu
              markaz eng yirik xususiy biriga aylandi aholiga keng ko'lamli
              xizmatlar ko'rsatuvchi sog'liqni saqlash muassasalari malakali
              tibbiy xizmatlar qatori.Asosiy postulat klinika jamoasining
              faoliyati ishonchlilik garovidir, o'z vaqtida va yuqori malakali
              tibbiy yordam ko'rsatish.
            </Typography>
          )}
        </Grid>
      </Grid>
    </Box>
  );
}
