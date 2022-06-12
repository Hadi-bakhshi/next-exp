import { Box, Button, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import { NextPage } from "next";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { authState, logIn } from "../feature/authentication/authSlice";
import { useAppDispatch, useAppSelector } from "../hooks/rtk";

interface IUser {
  username: string;
  password: string;
}

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

const LoginPage: NextPage = () => {
  const [userInput, setUserInput] = useState<IUser>({
    username: "",
    password: "",
  });
  const router = useRouter();
  const dispatch = useAppDispatch();
  const auth = useAppSelector(authState);


  useEffect(()=> {
   if(auth.user.data) {
    router.push('/test')
   }
  },[auth])

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setUserInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    const { username, password } = userInput;
    const csrf = "d01e469ceee9f6ea5ceaa550553f581aac0f954b1d7b48fb683c9addbe26ae80";
    // dispatch(logIn({ password, username,csrf  }));
    signIn(username, password)
    setUserInput({
      username: "",
      password: "",
    });
  };

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
          onSubmit={submitHandler}
          sx={{
            width: "70%",
            display: "flex",
            flexDirection: "column",
            gap: 3,
          }}
        >
          <TextField
            id="username"
            label="نام کاربری"
            variant="outlined"
            name="username"
            value={userInput.username}
            onChange={changeHandler}
          />
          <TextField
            id="password"
            label="رمز عبور"
            variant="outlined"
            name="password"
            value={userInput.password}
            onChange={changeHandler}
          />
          <Button type="submit" variant="contained">
            ورود
          </Button>
          <Link href="/">صفحه اصلی</Link>
        </Box>
      </CustomBg>
    </div>
  );
};

export default LoginPage;
