import React, { useState } from "react";
import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Close, Menu } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

import Logo from "../../logo.png";
import LanguageComp from "./LanguageComp";
import content from "../Localization/content";

import Certificate from "./Certificate";

import Connection from "./Connection";

export default function DrawerCom({ lang, setLang }) {
  const navigate = useNavigate();
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <React.Fragment>
      <Drawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        anchor="top"
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            p: 2,
          }}
        >
          <img
            style={{
              width: "150px",
              cursor: "pointer",
            }}
            onClick={() => navigate("/")}
            src={Logo}
            alt=""
          />

          <IconButton sx={{}} onClick={() => setOpenDrawer(false)}>
            <Close />
          </IconButton>
        </Box>

        <List sx={{ width: "240px", p: 2 }}>
          {content[lang].header?.links.map((page, i) => (
            <ListItemButton key={i} onClick={() => setOpenDrawer(false)}>
              <ListItemIcon onClick={() => navigate(page.path)}>
                <ListItemText sx={{ color: "black !important" }} key={i}>
                  {page.title}
                </ListItemText>
              </ListItemIcon>
            </ListItemButton>
          ))}
        </List>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            p: 1,
            pb: 4,
          }}
        >
          <Box sx={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            <Certificate />
            <Connection text={" Запись на приём"} />
          </Box>
          <LanguageComp lang={lang} setLang={setLang} />
        </Box>
      </Drawer>

      <Box sx={{ marginLeft: "auto" }}>
        <IconButton
          sx={{ color: "black" }}
          onClick={() => setOpenDrawer(!openDrawer)}
        >
          <Menu />
        </IconButton>
      </Box>
    </React.Fragment>
  );
}
