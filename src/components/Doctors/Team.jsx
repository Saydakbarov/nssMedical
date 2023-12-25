import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import content from "../Localization/content";
import {
  AccessAlarm,
  Class,
  HourglassBottom,
  LocalPhone,
  MedicationLiquid,
} from "@mui/icons-material";

import Farida from "../../images/TeamImage/Farida.jpg";

export default function Team({ lang }) {
  return (
    <Box sx={{ mt: 10 }} className="globalContainer">
      <Grid container justifyContent={"center"}>
        <Grid
          item
          lg={6}
          md={7}
          sm={8}
          xs={11}
          sx={{
            textAlign: "start",
            background: "white",
            p: { xs: 2, sm: 3, md: 4 },
            borderRadius: "6px",
            boxShadow:
              "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
            background:
              "linear-gradient(90deg, rgba(225,233,236,1) 0%, rgba(28,26,183,1) 0%, rgba(47,55,194,1) 100%, rgba(149,216,233,1) 100%, rgba(0,212,255,1) 100%)",
          }}
        >
          <Typography
            sx={{ color: "#ffff", fontSize: "24px", fontWeight: "bold" }}
          >
            Посвящается памяти профессора
          </Typography>

          <img
            style={{ width: "100%", borderRadius: "10px", marginTop: "30px" }}
            src={Farida}
            alt=""
          />
          <Typography
            sx={{
              fontSize: "22px",
              color: "#ffff",
              mt: 2,
              fontWeight: "bold",
            }}
          >
            {lang === "ru"
              ? " АЮПОВОЙ ФАРИДЫ МИРЗАЕВНЫ"
              : "AYUPOVA FARID MIRZAEVNA"}
          </Typography>
          <Typography sx={{ mt: 1, fontWeight: "bold", color: "#ffff" }}>
            (21.11.1957-12.12.2021)
          </Typography>
          <Typography
            sx={{
              mt: 2,
              fontSize: { xs: "16px", sm: "18px" },
              fontWeight: "bold",
              color: "#fff",
            }}
          >
            {lang === "ru"
              ? "Аюпова Фарида Мирзаевна (21.11.1957-12.12.2021) профессор, д.м.н.  Более 20 лет работала заведующий кафедрой акушерства и гинекологии Ташкентской медицинской академии. Ведущий акушер- гинеколог страны, известная за пределы Республики. Выпустила более 40 докторов и кандидатов наук, многие из которых сейчас возглавляют кафедры, перинатальные центры Республики, очень много кадров ею подготовлено для областей Республики. Являлась членом Ученого Совета ТМА, членом Научного Совета по защитам, Председателем Научного семинара при Научном Совете. Являлась делегатом многих конгрессов Европы и мира,  где выступала с докладами. Была руководителем научных проектов внесла огромный вклад в развитие акушерской и гинекологической Науки и Узбекистане. Была прекрасным специалистом акушер-гинекологом, благодаря ей тысячи семей имеют здоровых и умных детей."
              : "Ayupova Farida Mirzaevna (21.11.1957-12.12.2021) professor, tibbiyot fanlari doktori.  Akusherlik va ginekologiya kafedrasi mudiri lavozimida 20 yildan ortiq ishlagan. Toshkent tibbiyot akademiyasi. Respublikaning yetakchi akusher-ginekologi, respublikadan tashqarida ma'lum. 40 dan ortiq shifokorlarni tamomlagan va  fan nomzodlari, ularning aksariyati hozirda kafedra mudirlari,  Respublikamiz perinatal markazlarida ko'plab kadrlar tayyorlandi Respublika hududlari uchun. TMA Ilmiy kengashi a'zosi, a'zosi edi Mudofaa bo'yicha ilmiy kengash, ilmiy seminar raisi Ilmiy kengash. U Evropa va dunyoda ko'plab kongresslarda delegat bo'lgan, u erda taqdimotlar o'tkazdi. U ilmiy loyihalar rahbari edi, akusherlik va ginekologiya fanining rivojlanishiga katta hissa qo'shdi va O'zbekiston. U zo'r akusher-ginekolog edi, uning sharofati bilan minglab oilalar sog‘lom va aqlli farzandlarga ega bo‘lmoqda."}
          </Typography>

          <Typography
            sx={{
              mt: 2,
              fontSize: "20px",
              color: "#ffff",
              fontWeight: "bold",
            }}
          >
            {lang === "ru"
              ? " Светлая память о профессоре Аюповой Фариды Мирзаевны навсегда останется в наших сердцах!"
              : "Professor Farida Mirzaevna Ayupovaning xotirasi abadiy bo'lsin qalbimizda qoladi!"}
          </Typography>
        </Grid>
      </Grid>

      <Box>
        {content[lang].doctors.team.team_data.map((v, i) => (
          <Box key={i} sx={{ mt: 3, p: 3 }}>
            <Typography
              sx={{
                fontSize: { xs: "22px", sm: "26px", md: "34px", lg: "44px" },
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              {v.title}
            </Typography>
            <Grid container justifyContent={"center"} gap={3} mt={5}>
              {v.doctors.map((v, i) => (
                <Grid
                  key={i}
                  item
                  lg={2.8}
                  md={3.7}
                  sm={8}
                  xs={12}
                  sx={{
                    background: "white",
                    p: 2,
                    borderRadius: "6px",
                    boxShadow:
                      "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
                    overflow: "hidden",
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
                  <Box
                  
                  >
                    <img
                      style={{
                        objectFit: "cover",
                        width: "100%",
                        height: "400px",
                        objectPosition: "50% 35%",
                      }}
                      src={v.img}
                      alt=""
                    />
                  </Box>
                  <Typography sx={{ fontSize: "22px", fontWeight: "bold" }}>
                    {v.name}
                  </Typography>
                  <Typography sx={{ fontSize: "18px", mt: 2 }}>
                    {v.job}
                  </Typography>

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
        ))}
      </Box>
    </Box>
  );
}
