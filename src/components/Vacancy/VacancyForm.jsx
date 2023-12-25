import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function VacancyForm() {
  const [family, setFamily] = useState("");

  const [languages, setLanguages] = useState({
    english: true,
    uzbek: false,
    russian: false,
  });

  const [busy, setBusy] = useState("");

  const handleCheckboxChange = (event) => {
    setLanguages({ ...languages, [event.target.name]: event.target.checked });
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const selectedLanguages = Object.keys(languages).filter(
      (lang) => languages[lang]
    );

    const selectedLanguagesString = selectedLanguages.join(", ");

    const {
      name,
      age,
      address,
      reference,
      baby,
      live,
      work,
      health,
      hobby,
      salary,
      phone,
    } = e.target.elements;
    const token = "6779086929:AAHwJlS-gn0E-Kocv4gpXQfIyg4hR4W2Iyg";
    const chat_id = -4005290346;
    let text = "";

    text =
      text +
      `%0A Анкета для нового сотрудника: %0A Имя клиента: ${name.value} %0A Возраст клиента: ${age.value} %0A Адрес клиента: ${address.value} %0A Информация: ${reference.value} %0A Количество детей: ${baby.value} %0A С кем ты живешь?: ${live.value} %0A Работал: ${work.value}  %0A Здоровье: ${health.value} %0A Интерес: ${hobby.value} %0A Зарплата: ${salary.value}  %0A Номер телефона: ${phone.value}  %0A Семейное положение: ${family} %0A Какие языки ты знаешь?: ${selectedLanguagesString} %0A Чем ты сейчас занят?: ${busy} `;

    const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${text}`;

    let api = new XMLHttpRequest();
    api.open("GET", url, true);
    api.send();

    name.value = "";
    age.value = "";
    address.value = "";
    reference.value = "";
    baby.value = "";
    live.value = "";
    work.value = "";
    health.value = "";
    hobby.value = "";
    salary.value = "";
    phone.value = "";

    navigate("/answerVacancy");
  };

  return (
    <Box sx={{ mt: 15 }}>
      <Container
        sx={{
          width: { xs: "100%", sm: "100%", md: "70%", lg: "70%" },
          background: "white",
          borderRadius: "30px",
          boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
          p: { xs: 1, sm: 2, md: 4, lg: 5 },
        }}
      >
        <Typography
          sx={{ fontSize: "34px", textAlign: "center", fontWeight: "500" }}
        >
          ЯНГИ ХОДИМ УЧУН АНКЕТА-СЎРОВНОМА
        </Typography>

        <Grid container justifyContent={"center"} p={3}>
          <Grid item lg={12} md={12}>
            <Box component={"form"} onSubmit={handleSubmit}>
              <TextField
                required
                fullWidth
                name="name"
                id="filled-basic"
                label=" Исм фамилиянгиз"
                variant="filled"
                sx={{ mt: 2 }}
              />
              <TextField
                required
                fullWidth
                name="age"
                id="filled-basic"
                label="Ёшингиз"
                variant="filled"
                sx={{ mt: 2 }}
                type="number"
              />
              <TextField
                required
                fullWidth
                name="address"
                id="filled-basic"
                label="Доимий яшаш манзилингиз"
                variant="filled"
                sx={{ mt: 2 }}
              />
              <TextField
                required
                fullWidth
                name="reference"
                id="filled-basic"
                label="Маълумотингиз"
                variant="filled"
                sx={{ mt: 2 }}
              />
              <TextField
                required
                fullWidth
                name="baby"
                id="filled-basic"
                label="Фарзандларингиз сони"
                variant="filled"
                sx={{ mt: 2 }}
                type="number"
              />
              <TextField
                required
                fullWidth
                name="live"
                id="filled-basic"
                label="Ким билан яшайсиз"
                variant="filled"
                sx={{ mt: 2 }}
              />
              <TextField
                required
                name="work"
                id="filled-basic"
                label="Қаерларда ва қайси лавозимларда ишлагансиз"
                multiline
                rows={4}
                variant="filled"
                sx={{ mt: 2 }}
                fullWidth
              />

              <Box>
                <TextField
                  required
                  name="health"
                  id="filled-basic"
                  label="Соғлиғингиз"
                  multiline
                  rows={4}
                  variant="filled"
                  sx={{ mt: 2 }}
                  fullWidth
                />
                <Typography sx={{ color: "gray", fontSize: "14px" }}>
                  (Юқумли, оғир касалликлар борми? Ногиронлик гуруҳи? Оғир
                  операция бўлганми?)
                </Typography>
              </Box>

              <TextField
                required
                name="hobby"
                id="filled-basic"
                label="Қизиқишларингиз нимадан иборат"
                multiline
                rows={4}
                variant="filled"
                sx={{ mt: 2 }}
                fullWidth
              />
              <TextField
                required
                fullWidth
                name="salary"
                id="filled-basic"
                label="Қанча ойлик иш ҳақи кутаяпсиз"
                variant="filled"
                sx={{ mt: 2 }}
                type="number"
              />
              <TextField
                required
                fullWidth
                name="phone"
                id="filled-basic"
                label="Телефон рақамингиз"
                variant="filled"
                sx={{ mt: 2 }}
                type="number"
              />
              <Box sx={{ mt: 3 }}>
                <Typography sx={{ fontSize: "18px", fontWeight: "600" }}>
                  Оилавий аҳволингиз?
                </Typography>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                  onChange={(e) => setFamily(e.target.value)}
                >
                  <FormControlLabel
                    value="Oilaliman"
                    control={<Radio />}
                    label="Oilaliman"
                  />
                  <FormControlLabel
                    value="Uylanmaganman"
                    control={<Radio />}
                    label="Uylanmaganman"
                  />
                  <FormControlLabel
                    value="Ajrashganman"
                    control={<Radio />}
                    label="Ajrashganman"
                  />
                </RadioGroup>
              </Box>

              <Box sx={{ mt: 3 }}>
                <Typography sx={{ fontSize: "18px", fontWeight: "600" }}>
                  Қайси тилларни биласиз ва қайдаражада?
                </Typography>

                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={languages.english}
                        onChange={handleCheckboxChange}
                        name="english"
                      />
                    }
                    label="Инглиз"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={languages.uzbek}
                        onChange={handleCheckboxChange}
                        name="uzbek"
                      />
                    }
                    label="Узбек"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={languages.russian}
                        onChange={handleCheckboxChange}
                        name="russian"
                      />
                    }
                    label="Рус"
                  />
                </FormGroup>
              </Box>

              <Box sx={{ mt: 3 }}>
                <Typography sx={{ fontSize: "18px", fontWeight: "600" }}>
                  Ҳозирда нима билан бандсиз?
                </Typography>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                  onChange={(e) => setBusy(e.target.value)}
                >
                  <FormControlLabel
                    value="Талабаман"
                    control={<Radio />}
                    label="Талабаман"
                  />
                  <FormControlLabel
                    value="Вактинча ишсиз"
                    control={<Radio />}
                    label="Вактинча ишсиз"
                  />
                  <FormControlLabel
                    value="Ишлайман бушамокчиман"
                    control={<Radio />}
                    label="Ишлайман бушамокчиман"
                  />
                </RadioGroup>
              </Box>
              <Button
                fullWidth
                variant="contained"
                sx={{
                  background:
                    "linear-gradient(270deg, #307bc4 0%, #274760 100%)",
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
                type="submit"
              >
                Отправить
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
