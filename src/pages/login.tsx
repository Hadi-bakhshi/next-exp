import { Box, Button, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import Link from "next/link";

const CustomBg = styled(Box)(({ theme }) => ({
  width: "30%",
  height: "50%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#f3f4f6",
  borderRadius: "10px",
  boxShadow: "3px 13px 13px -10px rgba(0,0,0,0.6)",
})) as typeof Box;

const login = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#e3e3e3",
      }}
    >
      <CustomBg>
        <Box
          component="form"
          noValidate
          sx={{
            width: "70%",
            display: "flex",
            flexDirection: "column",
            gap: 3,
          }}
        >
          <TextField id="username" label="نام کاربری" variant="outlined" />
          <TextField id="password" label="رمز عبور" variant="outlined" />
          <Button variant="contained">ورود</Button>
          <Link href='/'>صفحه اصلی</Link>
        </Box>
      </CustomBg>
    </div>
  );
};

export default login;
