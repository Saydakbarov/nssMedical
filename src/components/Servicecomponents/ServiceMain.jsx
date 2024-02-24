// import { Box, Button, Container, Grid, Typography } from "@mui/material";
// import React from "react";
// import {
//   ArrowRight,
//   ArrowRightAlt,
//   Call,
//   Email,
//   LocalHospital,
//   Place,
// } from "@mui/icons-material";
// import content from "../Localization/content";

// import CarouseImg1 from "../../images/homepageImages/carouselimg1.jpg";

// export default function ServiceMain({ lang }) {
//   return (
//     <Box>
//       <Box
//         sx={{
//           background: " #090388",
//           p: 3,
//         }}
//       >
//         <Grid
//           className="globalContainer"
//           container
//           alignItems={"center"}
//           sx={{
//             flexDirection: {
//               xs: "row-reverse",
//               sm: "row-reverse",
//               md: "row",
//               lg: "row",
//             },
//             justifyContent: {
//               xs: "center",
//               sm: "center",
//               md: "center",
//               lg: "space-between",
//             },
//             gap: "20px",
//           }}
//         >
//           <Grid
//             item
//             lg={6}
//             md={6}
//             sm={8}
//             xs={10}
//             className="animate__animated  animate__rotateInDownLeft "
//             sx={{ textAlign: "center", color: "#ffff" }}
//           >
//             <Typography
//               sx={{
//                 fontSize: { xs: "30px", sm: "40px", ms: "50px", lg: "58px" },
//                 color: "#ffff",
//                 textAlign: "start",
//               }}
//             >
//               {content[lang].home.header_main_title}
//             </Typography>
//           </Grid>

//           <Grid item lg={5} md={6} sm={7} xs={12} sx={{ borderRadius: "10px" }}>
//             <img
//               className="animate__animated  animate__rotateInDownLeft "
//               style={{
//                 position: "relative",
//                 zIndex: "1",
//                 height: "500px",
//                 borderRadius: "10px",
//                 width: "100%",
//               }}
//               src={CarouseImg1}
//               alt=""
//             />
//           </Grid>
//         </Grid>
//       </Box>
//     </Box>
//   );
// }
