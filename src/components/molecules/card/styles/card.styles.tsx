import React from "react";
import { ExpandMoreProps } from "../card.types";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";

export const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export const MainWrapper = styled("div")({
  margin: "30px",
});
