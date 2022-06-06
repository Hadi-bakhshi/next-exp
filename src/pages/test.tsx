import React, { useEffect } from "react";
import { NextPage } from "next";
import axios from "axios";
import {
  subjectState,
  useAppDispatch,
  useAppSelector,
  wrapper,
} from "../feature/store";
import { addPost, testState } from "../feature/test/testSlice";
import Link from "next/link";
import { useStore } from "react-redux";
import { authState } from "../feature/authentication/authSlice";

const TestPage: NextPage = () => {
  return (
    <div>
      <Link href="/">Go home</Link>
    </div>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    store.dispatch(addPost({ title: data.title, body: data.body }));
    return {
      props: {},
    };
  }
);
export default TestPage;
