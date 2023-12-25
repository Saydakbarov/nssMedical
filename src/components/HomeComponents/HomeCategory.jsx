import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import CategoryBox from "./CategoryBox";
import content from "../Localization/content";

export default function HomeCategory({ lang }) {
  return (
    <Box sx={{ mt: { xs: 0, sm: 3, md: 4, lg: 6 } }}>
      <Box
        sx={{
          background:
            " linear-gradient(138deg, rgba(195,223,244,1) 69%, rgba(166,205,246,1) 77%)",
          height: { xs: "150px", sm: "200px", md: "200px", lg: "300px" },
        }}
      >
        <Typography
          sx={{
            color: "white",
            fontSize: { xs: "24px", sm: "30px", md: "40px", lg: "50px" },
            textAlign: "center",
            lineHeight: { xs: "70px", sm: "100px", md: "150px", lg: "300px" },
            fontWeight: "bold",
          }}
        >
          {content[lang].home.departments.title}
        </Typography>
      </Box>

      <CategoryBox lang={lang} />
    </Box>
  );
}
