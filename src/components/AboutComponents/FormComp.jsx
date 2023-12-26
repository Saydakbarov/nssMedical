import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

import About2 from "../../images/AboutPage/about2.jpg";

export default function FormComp({ lang }) {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const { phone, name } = e.target.elements;
    const token = "6779086929:AAHwJlS-gn0E-Kocv4gpXQfIyg4hR4W2Iyg";
    const chat_id = -4005290346;
    let text = "";

    text =
      text +
      ` %0A Номер клиента: ${phone.value} %0A Имя клиента:${name.value} `;

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
        mt: 25,
      }}
    >
      <Grid
        container
        justifyContent={"center"}
        gap={4}
        className="globalContainer"
      >
        <Grid item lg={5}>
          <Typography
            sx={{
              fontSize: { xs: "20px", sm: "24px", md: "28px", lg: "38px" },
              color: "#274760",
            }}
          >
            {lang === "ru"
              ? "ВЫСОКОКЛАССНЫЕ СПЕЦИАЛИСТЫ ГОТОВЫ ПОМОЧЬ ВАМ В ЛЮБОЕ ВРЕМЯ."
              : "YUKORI SINAFLI MUTAXSIZLAR HAR QANDAY VAQTDA SIZGA YORDAM BERISHGA TAYYOR."}
          </Typography>
          <Typography
            sx={{
              mt: 3,
              fontSize: { xs: "14px", sm: "16px", md: "18px", lg: "22px" },
              color: "gray",
            }}
          >
            {lang === "ru"
              ? "Деятельность нашего центра основывается на доверительных отношениях с партнерами, на взаимном уважении, обязательности, и, самое главное, заботе о пациентах и гостях медицинского центра."
              : "Markazimiz faoliyati ishonchli munosabatlarga asoslangan  sheriklar bilan, o'zaro hurmat, majburiyat va eng muhimi, asosiysi, tibbiyot markazining bemorlari va mehmonlariga g'amxo'rlik qilishdir."}
          </Typography>
          <Box
            component={"form"}
            onSubmit={handleSubmit}
            sx={{
              maxWidth: { xs: "300px", sm: "350px", md: "450px", lg: "500px" },
              mt: 4,
            }}
          >
            <TextField
              name="name"
              fullWidth
              id="outlined-basic"
              label="Имя "
              variant="outlined"
              required
            />
            <TextField
              required
              sx={{ mt: 3 }}
              fullWidth
              type="number"
              id="outlined-basic"
              label="Номер телефона"
              variant="outlined"
              name="phone"
              InputProps={{
                inputProps: {
                  min: 13,
                },
              }}
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
        <Grid
          item
          lg={5}
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
              height: "600px",
              objectFit: "cover",
              borderRadius: "10px",
            }}
            src={About2}
            alt=""
          />
        </Grid>
      </Grid>
    </Box>
  );
}
