import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

export default function ModalRegister() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });

    handleClose();
  };

  return (
    <div>
      <Button
        style={{
          color: "white",
          border: "1px solid #2e86de",
          backgroundColor: "#2e86de",
          padding: "5px 25px",
        }}
        onClick={handleOpen}
      >
        REGISTER
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography variant="h6" component="h2" mb={2}>
            Register
          </Typography>
          <form noValidate>
            <TextField
              id="fullname"
              name="fullname"
              label="Full Name"
              fullWidth
              variant="outlined"
            />
            <TextField
              id="email"
              name="email"
              label="Email"
              type="email"
              fullWidth
              variant="outlined"
            />
            <TextField
              id="password"
              name="password"
              label="Password"
              type="password"
              fullWidth
              variant="outlined"
            />
            <TextField
              id="phone"
              name="phone"
              label="Phone Number"
              fullWidth
              variant="outlined"
            />
            <Button type="submit" variant="contained" color="primary">
              Register
            </Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
