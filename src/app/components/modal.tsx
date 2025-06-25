import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import MuiModal from "@mui/material/Modal";
import { Style } from "../components/style";

type props = {
  handleClose: () => void;
  open: boolean;
  text: string;
  heading?: string;
};

export default function Modal({ handleClose, open, text, heading }: props) {
  return (
    <MuiModal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={Style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {heading}
        </Typography>
        <Typography id="modal-modal-description"
         sx={{ mt: 2 , textAlign: "center" , }}>
          {text}{" "}
        </Typography>
      </Box>
    </MuiModal>
  );
}
