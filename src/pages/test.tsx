import React, { useEffect } from "react";
import { GetServerSideProps, NextPage } from "next";
import axios from "axios";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "../hooks/rtk";
import { authState } from "../feature/authentication/authSlice";


const TestPage: NextPage = () => {
  const appAuth = useAppSelector(authState)
  useEffect(()=> {
  },[])
  return (
    <div>
      <Link href="/">Go home</Link>
      <br />
      <Link href="/test2">Go test2</Link>
    </div>
  );
};


export default TestPage;
