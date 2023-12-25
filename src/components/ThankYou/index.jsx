import { Box, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export default function ThankYou() {
  return (
    <Box
      sx={{
        background: "white",
        width: { xs: "300px", sm: "400px", md: "500px" },
        height: { xs: "250px", sm: "250px", md: "280px", lg: "300px" },
        boxShadow:
          "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        p: 3,
        borderRadius: "6px",
      }}
    >
      <Box sx={{ mt: { xs: 4, sm: 4, md: 5, lg: 8 } }}>
        <Typography
          sx={{
            fontSize: { xs: "24px", sm: "24px", md: "34px" },
            textAlign: "center",
          }}
        >
          Спасибо! Наши сотрудники свяжутся с вами.
        </Typography>
        <Box sx={{ textAlign: "end", mt: 5 }}>
          <Link to="/" style={{ textDecoration: "none" }}>
            Закрыт
          </Link>
        </Box>
      </Box>
    </Box>
  );
}
