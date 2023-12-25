import { Box, Grid } from "@mui/material";
import React from "react";

import img1 from "../../images/Training/img1.jpg";
import img2 from "../../images/Training/img2.jpg";

export default function TrainingBox() {
  return (
    <Box sx={{ mt: 8 }}>
      <Grid container justifyContent={"center"} gap={4}>
        <Grid item lg={5} md={6} sm={10} xs={11}>
          <img style={{ width: "100%" }} src={img1} alt="" />
        </Grid>
        <Grid item lg={5} md={6} sm={10} xs={11}>
          <img style={{ width: "100%" }} src={img2} alt="" />
        </Grid>
      </Grid>
    </Box>
  );
}
