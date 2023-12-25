import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { IconButton } from "@mui/material";
import { Call, Close, Email, LocationCity, Menu } from "@mui/icons-material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "95%", sm: "95%", md: "70%", lg: "50%" },
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: "10px",
  overflowX: "scroll",
  "&::-webkit-scrollbar": {
    display: "none",
  },
  height: "100vh",
};

export default function HeaderContactModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Box>
      <IconButton
        onClick={handleOpen}
        sx={{ color: "white", background: "#2D689F" }}
      >
        <Menu />
      </IconButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box sx={{ textAlign: "end" }}>
            <IconButton onClick={handleClose}>
              <Close />
            </IconButton>
          </Box>
          <Box>
            <Typography sx={{ color: "#274760", fontSize: "30px" }}>
              NssMed Center
            </Typography>
            <Typography
              sx={{
                fontSize: "20px",
                fontWeight: "bold",
                color: "#274760",
                mt: 2,
              }}
            >
              Your Partner in Health and Wellness
            </Typography>
          </Box>

          <Box
            sx={{
              width: { xs: "100%", sm: "100%", md: "90%" },
              background: "#E8F4F7",
              p: 3,
              display: "flex",
              gap: "20px",
              borderRadius: "10px",
              alignItems: "center",
              mt: 3,
            }}
          >
            <Box>
              <Call sx={{ fontSize: "50px", color: "#274760" }} />
            </Box>
            <Box>
              <Typography
                sx={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  color: "#274760",
                }}
              >
                {" "}
                Phone
              </Typography>
              <Typography
                sx={{
                  fontSize: "18px",
                  color: "#274460",
                }}
              >
                {" "}
                90-933-78-72
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              width: { xs: "100%", sm: "100%", md: "90%" },
              background: "#E8F4F7",
              p: 3,
              display: "flex",
              gap: "20px",
              borderRadius: "10px",
              alignItems: "center",
              mt: 3,
            }}
          >
            <Box>
              <Email sx={{ fontSize: "50px", color: "#274760" }} />
            </Box>
            <Box>
              <Typography
                sx={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  color: "#274760",
                }}
              >
                {" "}
                Email
              </Typography>
              <Typography
                sx={{
                  fontSize: "18px",
                  color: "#274460",
                }}
              >
                {" "}
                nssmed@gmail.com
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              width: { xs: "100%", sm: "100%", md: "90%" },
              background: "#E8F4F7",
              p: 3,
              display: "flex",
              gap: "20px",
              borderRadius: "10px",
              alignItems: "center",
              mt: 3,
            }}
          >
            <Box>
              <LocationCity sx={{ fontSize: "50px", color: "#274760" }} />
            </Box>
            <Box>
              <Typography
                sx={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  color: "#274760",
                }}
              >
                {" "}
                Location
              </Typography>
              <Typography
                sx={{
                  fontSize: "18px",
                  color: "#274460",
                }}
              >
                {" "}
                Chilonzor
              </Typography>
            </Box>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
}
