import React, { useEffect } from "react";
import { GetServerSideProps, NextPage } from "next";
import axios from "axios";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "../hooks/rtk";
import { authState } from "../feature/authentication/authSlice";
import http from "../services/axiosConfig/interceptors";


const TestPage: NextPage = () => {
  const appAuth = useAppSelector(authState)
  useEffect(() => {
    const getThePost = async () => {
      try {
        const response = http.get("http://localhost:4000/api/posts/private");
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };
    getThePost();
  }, []);
  return (
    <div>
      <Link href="/">Go home</Link>
      <br />
      <Link href="/test2">Go test2</Link>
    </div>
  );
};


export default TestPage;
