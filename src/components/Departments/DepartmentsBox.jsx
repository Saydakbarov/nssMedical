import {
  Box,
  Button,
  Grid,
  IconButton,
  Modal,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { DepartmentsData } from "../../data";
import "./styles/department.scss";
import {
  ArrowLeft,
  ArrowRight,
  ArrowRightAlt,
  Close,
  KeyboardBackspace,
} from "@mui/icons-material";

const styleImg = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "100%",
  bgcolor: "black",
  border: "2px solid #000",
  boxShadow: 24,
  overflowX: "scroll",
  height: "98vh",
  "&::-webkit-scrollbar": {
    display: "none",
  },
  opacity: "95%",
};

export default function DepartmentsBox() {
  const [openImg, setOpenImg] = React.useState(false);
  const handleOpenImg = () => setOpenImg(true);
  const handleCloseImg = () => setOpenImg(false);

  const [imgSrc, setImgSrc] = useState({ img: "", i: 0 });

  const [data, setData] = useState([]);

  const viewImg = (img, i) => {
    setImgSrc({ img, i });
  };

  const imgAction = (action) => {
    let i = imgSrc.i;

    if (action === "next-img") {
      setImgSrc({ img: data[i + 1], i: i + 1 });
    }
    if (action === "prev-img") {
      setImgSrc({ img: data[i - 1], i: i - 1 });
    }
  };
  return (
    <Box sx={{ mt: 8 }} className="globalContainer">
      <Grid container justifyContent={"center"}>
        {DepartmentsData.map((v, i) => (
          <Grid key={i} item lg={10} md={11} sm={10} xs={10} sx={{ mt: 6 }}>
            <Typography
              sx={{
                fontSize: { xs: "22px", sm: "26px", md: "30px", lg: "40px" },
                fontWeight: "bold",
                color: "#2D689F",
              }}
            >
              {v.title}
            </Typography>
            <Box
              sx={{
                display: "flex",
                gap: "15px",
                flexWrap: "wrap",
                justifyContent: {
                  xs: "center",
                  sm: "center",
                  md: "center",
                  // lg: "start",
                },
                background: "white",
                p: 3,
                borderRadius: "10px",
                mt: 3,
              }}
            >
              {v.Images.map((img, i) => (
                <img
                  style={{
                    width: "auto",
                    height: "300px",
                    borderRadius: "10px 0px 10px 0px",
                    // objectFit: "contain",
                    objectPosition: "5% 10% ",
                    cursor: "pointer",
                  }}
                  className="imgDepartment"
                  onClick={() => {
                    viewImg(img, i);
                    setData(v.Images);
                    handleOpenImg();
                  }}
                  src={img}
                  alt=""
                />
              ))}
            </Box>
          </Grid>
        ))}
      </Grid>

      <Modal
        open={openImg}
        onClose={handleCloseImg}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styleImg}>
          <Box sx={{ textAlign: "end" }}>
            <IconButton onClick={() => handleCloseImg()}>
              <Close sx={{ color: "#fff" }} />
            </IconButton>
          </Box>

          <Box
            sx={{
              p: 3,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <IconButton
              sx={{ background: "gray" }}
              onClick={() => imgAction("prev-img")}
            >
              <KeyboardBackspace sx={{ color: "#ffff" }} />
            </IconButton>

            {imgSrc.img && (
              <Box sx={{ width: "800px", margin: "0 auto" }}>
                <img
                  style={{
                    width: "100%",
                    height: "500px",
                    textAlign: "center",
                    objectFit: "contain",
                  }}
                  src={imgSrc.img}
                  alt=""
                />
              </Box>
            )}

            <IconButton
              sx={{ background: "gray" }}
              onClick={() => imgAction("next-img")}
            >
              <ArrowRightAlt sx={{ color: "#ffff" }} />
            </IconButton>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
}
