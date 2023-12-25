import { ArrowRightAlt } from "@mui/icons-material";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import React from "react";

export default function ContactForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const { phone, name, description } = e.target.elements;
    const token = "6779086929:AAHwJlS-gn0E-Kocv4gpXQfIyg4hR4W2Iyg";
    const chat_id = -4005290346;
    let text = "";

    text =
      text +
      ` %0A  Имя клиента:   ${name.value}  %0A Номер телефона:   ${phone.value} %0A  о клиенте:   ${description.value}  `;

    const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${text}`;

    let api = new XMLHttpRequest();
    api.open("GET", url, true);
    api.send();

    phone.value = "";
    name.value = "";
    description.value = "";
  };
  return (
    <Box
      sx={{
        zIndex: 20,
        position: "relative",
        p: 2,
        mt:10
      }}
    >
      <Container
        sx={{
          width: { xs: "100%", sm: "100%", md: "70%", lg: "70%" },
          p: 3,
          background: "white",
          borderRadius: "30px",

          boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
        }}
        className="contactForm"
      >
        <Box component={"form"} onSubmit={handleSubmit}>
          <Box
            sx={{
              width: { xs: "100%", sm: "100%", md: "70%", lg: "60%" },
              margin: "0 auto",
            }}
          >
            <Typography sx={{ textAlign: "center", fontSize: "30px" }}>
              Связаться с нами
            </Typography>
            <Box
              sx={{
                display: "flex",
                gap: "30px",
                flexWrap: {
                  xs: "wrap",
                  sm: "wrap",
                  md: "nowrap",
                  lg: "nowrap",
                },
                mt: 5,
              }}
            >
              <TextField
                required
                name="name"
                fullWidth
                id="filled-basic"
                label="Имя"
                variant="outlined"
              />
              <TextField
                required
                name="phone"
                fullWidth
                id="filled-basic"
                label="Телефон"
                variant="outlined"
                type="number"
              />
            </Box>

            <TextField
              name="description"
              sx={{ mt: 4 }}
              fullWidth
              id="outlined-multiline-static"
              label="Multiline"
              multiline
              rows={8}
              defaultValue="О себе..."
              required
            />
            <Button
              type="submit"
              endIcon={<ArrowRightAlt />}
              sx={{
                background: "linear-gradient(270deg, #307bc4 0%, #274760 100%)",
                p: 1,
                borderRadius: "30px",
                width: "150px",
                mt: 5,
                transition: " 0.5s linear",

                "&:hover": {
                  transition: " 0.5s linear",
                  width: "180px",
                  background:
                    "linear-gradient(270deg, #307bc4 0%, #274760 100%)",
                },
              }}
              variant="contained"
            >
               Отправить
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
