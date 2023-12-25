import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

import { CertificateData } from "../../data";
import { IconButton } from "@mui/material";
import { Close } from "@mui/icons-material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "95%", sm: "95%", md: "80%", lg: "70%" },
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  overflowX: "scroll",
  height: "95vh",
  "&::-webkit-scrollbar": {
    display: "none",
  },
  borderRadius: "8px",
};
const styleImg = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "100%",
  bgcolor: "black",
  border: "2px solid #000",
  boxShadow: 24,
  p: 1,
  overflowX: "scroll",
  height: "98vh",
  "&::-webkit-scrollbar": {
    display: "none",
  },
  opacity: "85%",
};

export default function Certificate() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [openImg, setOpenImg] = React.useState(false);
  const handleOpenImg = () => setOpenImg(true);
  const handleCloseImg = () => setOpenImg(false);

  const [imgSrc, setImgSrc] = useState("");
  return (
    <div>
      <Button
        sx={{
          color: "white",
          background: "#090388",
          "&:hover": { background: "#090388" },
        }}
        variant="contained"
        onClick={handleOpen}
      >
        Сертификаты
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              sx={{ fontSize: "28px", color: "#2D689F", fontWeight: "bold" }}
            >
              Сертификаты
            </Typography>
            <IconButton onClick={() => handleClose()}>
              <Close sx={{ color: "#2D689F", fontSize: "30px" }} />
            </IconButton>
          </Box>

          <Box sx={{ display: "flex", gap: "10px", flexWrap: "wrap", mt: 2 }}>
            {CertificateData.map((v, i) => (
              <Box key={i} sx={{ width: "300px" }}>
                <img
                  style={{ width: "100%", cursor: "pointer" }}
                  src={v}
                  alt=""
                  onClick={() => {
                    setImgSrc(v);
                    handleOpenImg();
                  }}
                />
              </Box>
            ))}
          </Box>
        </Box>
      </Modal>

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

          <Box sx={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            <Box sx={{ width: "500px", margin: "0 auto" }}>
              <img
                style={{ width: "100%", height: "100%" }}
                src={imgSrc}
                alt=""
              />
            </Box>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
