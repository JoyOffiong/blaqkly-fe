import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import MuiModal from "@mui/material/Modal";
import { Style } from "../components/style";
import { Button } from "@mui/material";

type props = {
  handleClose: () => void;
  open: boolean;
  text: string;
  operation?:()=>void;
  heading?: string;
};

export default function Modal({ operation,handleClose, open, text, heading }: props) {
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

        {operation && <Button onClick={()=>operation()}>Click here to logout</Button>}
      </Box>
    </MuiModal>
  );
}
