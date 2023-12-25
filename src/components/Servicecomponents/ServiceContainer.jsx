import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { ServiceData } from "../../data";
import { useNavigate } from "react-router-dom";
import content from "../Localization/content";

export default function ServiceContainer({ lang }) {
  const navigate = useNavigate();
  return (
    <Box sx={{ p: 2 }} className="globalContainer">
      <Grid container justifyContent={"center"} gap={3} mt={10}>
        {content[lang].service.ServiceData.map((v, i) => (
          <Grid
            key={i}
            item
            lg={3}
            md={3}
            sm={5}
            xs={11}
            sx={{
              p: 2,
              borderRadius: "10px",
              boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
              cursor: "pointer",
              background: "#fff",
            }}
            component={"div"}
            onClick={() => navigate("/single/" + v.id)}
          >
            <img
              style={{ width: "100%", height: "200px", objectFit: "cover" }}
              src={v.img}
              alt=""
            />

            <Typography
              sx={{
                mt: 1,
                fontSize: "20px",
                fontWeight: "bold",
                color: "#274760",
                textAlign: "center",
              }}
            >
              {v.title}
            </Typography>
          </Grid>
        ))}
      </Grid>

      <Typography
        sx={{
          textAlign: "center",
          mt: 10,
          color: "#274760",
          fontSize: { xs: "24px", sm: "28px", md: "30px", lg: "40px" },
        }}
      >
        {content[lang].service.operations.title}
      </Typography>
    </Box>
  );
}
