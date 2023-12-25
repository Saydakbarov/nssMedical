import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { AccordionData } from "../../data";
import content from "../Localization/content";

export default function AccordionComp({ lang }) {
  const [id, setId] = useState(1);

  const [data, setData] = useState([]);

  useEffect(() => {
    if (lang == "ru") {
      content.ru.service.operations.AccordionData.filter((e) =>
        e.id == id ? setData(e.sub_data) : []
      );
    } else {
      content.uz.service.operations.AccordionData.filter((e) =>
        e.id == id ? setData(e.sub_data) : []
      );
    }
  }, [id, lang]);

  console.log(data.map((v) => v.length));

  console.log(id);
  return (
    <Box sx={{ mt: 5 }} className="globalContainer">
      <Grid container justifyContent={"center"} gap={2}>
        <Grid item lg={3}>
          {content[lang].service.operations.AccordionData.map((v, i) => (
            <Box sx={{ display: "flex", flexDirection: "column" }} key={v.id}>
              <Button
                sx={{
                  background:
                    "linear-gradient(270deg, #307bc4 0%, #274760 100%)",
                  p: 1,
                  borderRadius: "10px",
                  mt: 2,
                  transition: " 0.5s linear",

                  "&:hover": {
                    transition: " 0.5s linear",
                    background:
                      "linear-gradient(270deg, #307bc4 0%, #274760 100%)",
                  },
                }}
                variant="contained"
                onClick={() => setId(v.id)}
              >
                {v.title}
              </Button>
            </Box>
          ))}
        </Grid>

        <Grid
          item
          lg={8}
          md={8}
          sm={10}
          xs={11}
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          {data.map((v, i) => (
            <Box
              key={i}
              sx={{
                width: {
                  xs: data.length > 1 ? "100%" : "100%",
                  sm: data.length > 1 ? "45%" : "100%",
                  md: data.length > 1 ? "45%" : "100%",
                },
              }}
            >
              <img
                style={{
                  width: "100%",
                }}
                src={v}
                alt="image"
              />
            </Box>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
}
