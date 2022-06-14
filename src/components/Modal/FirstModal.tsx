import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
} from "@mui/material";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "30%",
  height: "30%",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
};

const FirstModal = () => {
  const [open, setOpen] = React.useState(false);
  const [state, setState] = React.useState({
    all: false,
    hr: false,
    carage: false,
  });
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { all, hr, carage } = state;
  const error = [all, hr, carage].filter((v) => v).length !== 1;
  return (
    <div>
      <Button
        size="small"
        variant="contained"
        sx={{ backgroundColor: "teal" }}
        onClick={handleOpen}
      >
        <Typography variant="subtitle1" color={"white"}>
          شروع بازرسی
        </Typography>
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              لطفا نوع بازرسی را انتخاب کنید:
            </Typography>
            <FormControl required error={error} component="fieldset">
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox onChange={handleChange} name="carage" />}
                  label="تعمیرگاه ها و تجهیزات"
                />
                <FormControlLabel
                  control={<Checkbox onChange={handleChange} name="hr" />}
                  label="نیروی انسانی"
                />
                <FormControlLabel
                  control={<Checkbox onChange={handleChange} name="all" />}
                  label="همه"
                />
              </FormGroup>
              {error && <FormHelperText>لطفا یکی را انتخاب کنید</FormHelperText>}
            </FormControl>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default FirstModal;
