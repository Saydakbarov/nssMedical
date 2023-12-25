import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import content from "../Localization/content";

export default function HomeBox({ lang }) {
  return (
    <Box sx={{ mt: 10 }}>
      <Box sx={{ p: 3 }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2995.1261452496615!2d69.17378317564025!3d41.34961179833819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8f1baf30c0dd%3A0xb401d7d56723abfa!2z0JrQu9C40L3QuNC60LAgTlNTIE1lZGljYWwgQ2VudGVy!5e0!3m2!1sru!2s!4v1695904142098!5m2!1sru!2s"
          width="100%"
          height="450"
          loading="lazy"
        ></iframe>
      </Box>
    </Box>
  );
}
