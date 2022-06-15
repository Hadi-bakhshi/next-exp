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
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "300px%",
  height: "300px%",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
};

const FirstModal = () => {
  const [open, setOpen] = React.useState(false);
  const [radioValue, setRadioValue] = React.useState("");
  const [error, setError] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const router = useRouter();

  const radio_change_handler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRadioValue((event.target as HTMLInputElement).value);
    setError(false);
  };

  const continue_btn_handler = () => {
    if (radioValue === "") {
      setError(true);
      toast.error("لطفا یکی را انتخاب کنید");
    } else {
      router.push("/test2");
    }
  };

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
          <Box
            sx={{
              position: "absolute" as "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: {xs: "300px",sm:"30%"},
              height: {xs: "300px",sm:"30%"},
              bgcolor: "background.paper",
              boxShadow: 24,
              p: 4,
              borderRadius: 2,
            }}
          >
            <FormControl>
              <FormLabel id="demo-radio-buttons-group-label">
                {" "}
                <Typography
                  id="transition-modal-title"
                  variant="h6"
                  component="h2"
                >
                  لطفا نوع بازرسی را انتخاب کنید:
                </Typography>
              </FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="all"
                name="radio-buttons-group"
                value={radioValue}
                onChange={radio_change_handler}
              >
                <FormControlLabel
                  value="garage"
                  control={<Radio />}
                  label="تعمیرگاه ها و تجهیزات"
                />
                <FormControlLabel
                  value="hr"
                  control={<Radio />}
                  label="نیروی انسانی "
                />
                <FormControlLabel value="all" control={<Radio />} label="همه" />
              </RadioGroup>
            </FormControl>
            <Box>
              <Button
                onClick={continue_btn_handler}
                size="medium"
                variant="contained"
                sx={{ postition: "absolute", bottom: -10, left: 0, right: 0 }}
              >
                تایید و ادامه
              </Button>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default FirstModal;
