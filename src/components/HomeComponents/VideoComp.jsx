import { Box, Grid, IconButton, Modal, Typography } from "@mui/material";
import React, { useState } from "react";
import { HomeVideo } from "../../data";
import { Close } from "@mui/icons-material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "98%", sm: "95%", md: "70%", lg: "60%" },
  bgcolor: "black",
  border: "2px solid #000",
  boxShadow: 24,
  overflowX: "scroll",
  height: "80vh",
  "&::-webkit-scrollbar": {
    display: "none",
  },
  opacity: "95%",
  borderRadius: "10px",
  p: 2,
};

export default function VideoComp() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [video, setVideo] = useState();
  return (
    <Box className="globalContainer" sx={{ mt: 15 }}>
      <Box
        sx={{
          background: "#090388",
          p: 2,
          height: "300px",
        }}
      >
        <Typography
          sx={{
            fontSize: "34px",
            textAlign: "center",
            color: "white",
            mt: 5,
            fontWeight: "bold   ",
            fontFamily: "Inter",
          }}
        >
          ВИДЕО
        </Typography>
      </Box>

      <Grid
        container
        justifyContent={"center"}
        gap={4}
        mt={3}
        sx={{ marginTop: "-150px" }}
      >
        {/* {HomeVideo.map((v, i) => (
          <Grid
            item
            lg={2.4}
            md={4}
            sm={6}
            xs={10}
            sx={{
              background: "white",
              borderRadius: "10px",
              boxShadow:
                "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
              p: 2,
              pb: 3,
              cursor: "pointer",
            }}
            component={"div"}
            onClick={() => {
              handleOpen();
              setVideo(v.video);
            }}
          >
            <video
              style={{ width: "100%", height: "300px", cursor: "pointer" }}
              src={v.video}
              controls
            ></video>
            <Typography
              sx={{
                mt: 2,
                fontSize: "24px",
                fontWeight: "bold",
                color: "#274760",
                textAlign: "center",
              }}
            >
              {v.title}
            </Typography>
          </Grid>
        ))} */}
      </Grid>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box sx={{ textAlign: "end" }}>
            <IconButton onClick={handleClose}>
              <Close sx={{ color: "#fff" }} />
            </IconButton>
          </Box>
          <video
            style={{ width: "100%", height: "500px" }}
            controls
            src={video}
            muted
            autoPlay
          ></video>
        </Box>
      </Modal>
    </Box>
  );
}
