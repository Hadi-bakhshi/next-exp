import React, { useEffect } from "react";
import { GetServerSideProps, NextPage } from "next";
import axios from "axios";
import { wrapper } from "../feature/store";
import { addPost } from "../feature/test/testSlice";
import Link from "next/link";
import { useAppDispatch } from "../hooks/rtk";
import { useSession } from "next-auth/react";

const TestPage: NextPage = () => {
  // const dispatch = useAppDispatch();
  // const mydata = useSession()
  // console.log(mydata)

  // useEffect(() => {
  //   dispatch(addPost({ id: data.id, title: data.title, body: data.body }));
  // }, [data]);
  return (
    <div>
      <Link href="/">Go home</Link>
      <br />
      <Link href="/test2">Go test2</Link>
    </div>
  );
};

export async function getServerSideProps() {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/posts/1"
  );

  return {
    props: { data }, // will be passed to the page component as props
  };
}

export default TestPage;
