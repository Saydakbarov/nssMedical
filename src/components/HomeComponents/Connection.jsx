import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

import ConnectionImg from "../../images/homepageImages/connection.jpg";
import { IconButton, TextField } from "@mui/material";
import { ArrowRightAlt, Close } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "95%", sm: "95%", md: "40%", lg: "30%" },
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: "10px",
};

export default function Connection({ text, sx }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // const [phone, setPhone] = useState();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const { phone, name } = e.target.elements;
    const token = "6779086929:AAHwJlS-gn0E-Kocv4gpXQfIyg4hR4W2Iyg";
    const chat_id = -1002024050958;
    let text = "";

    text =
      text +
      ` %0A Номер клиента: ${phone.value} %0A Имя клиента: ${name.value} `;

    const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${text}`;

    let api = new XMLHttpRequest();
    api.open("GET", url, true);
    api.send();
    handleClose();
    navigate("/answerVacancy");
  };

  return (
    <div>
      <Button
        variant="contained"
        onClick={handleOpen}
        endIcon={<ArrowRightAlt />}
        sx={
          // background: "white",
          // color: "black",
          // "&:hover": {
          //   background: "white",
          //   color: "black",
          // },
          sx
        }
      >
        {text}
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box sx={{ textAlign: "end" }}>
            <IconButton onClick={() => handleClose()}>
              <Close sx={{ color: "#090388" }} />
            </IconButton>
          </Box>
          <Box
            sx={{ textAlign: "center" }}
            component={"form"}
            onSubmit={handleSubmit}
          >
            <Typography id="modal-modal-title" variant="h6" component="h2">
              У Вас остались вопросы
            </Typography>
            <img style={{ width: "90%" }} src={ConnectionImg} alt="" />
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Оставьте свой номер телефона и мы с Вами свяжемся
            </Typography>

            <TextField
              fullWidth
              type="text"
              name="name"
              sx={{ mt: 2 }}
              id="outlined-basic"
              label="имя"
              variant="outlined"
              required
              InputProps={{
                inputProps: {
                  min: 13,
                },
              }}
            />

            <TextField
              fullWidth
              type="number"
              name="phone"
              sx={{ mt: 2 }}
              id="outlined-basic"
              label="Телефон"
              variant="outlined"
              required
              InputProps={{
                inputProps: {
                  min: 13,
                },
              }}
            />
            <Button
              type="submit"
              fullWidth
              sx={{
                background: "#090388",
                color: "white",
                "&:hover": {
                  background: "#090388",
                  color: "white",
                },
                mt: 1,
              }}
            >
              перезвонить{" "}
            </Button>
          </Box>
        </Box>
      </Modal>
      <Box sx={{ display: { xs: "block", sm: "none" } }}>
        <a
          target="blank_"
          href="tel:+998555083030"
          style={{
            display: "block",
            marginTop: "20px",
            textDecoration: "none",
            background: "linear-gradient(270deg, #307bc4 0%, #274760 100%)",
            borderRadius: "30px",
            width: "100%",
            "&:hover": {
              transition: " 0.5s linear",

              background: "linear-gradient(270deg, #307bc4 0%, #274760 100%)",
            },
            padding: "5px 10px",
            color: "white",
          }}
        >
          +998 55 508-30-30{" "}
        </a>
      </Box>
    </div>
  );
}
