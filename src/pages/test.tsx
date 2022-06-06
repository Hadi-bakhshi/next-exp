import React, { useEffect } from "react";
import { NextPage } from "next";
import axios from "axios";
import { useAppDispatch, useAppSelector, wrapper } from "../feature/store";
import { addPost, testState } from "../feature/test/testSlice";
import Link from "next/link";
import { useStore } from "react-redux";
import { authState } from "../feature/authentication/authSlice";

const TestPage: NextPage = () => {
  
  const store = useStore().getState()

  const stateHandler = () => {
    console.log('state on render', store);
  };

  return (
    <div>
      {/* <span>{data.userId}</span>
      <p>{data.id}</p>
      <p>{data.title}</p>
    <p>{data.body}</p> */}
      <Link href="/">Go home</Link>
      <button onClick={stateHandler}>Get state</button>
    </div>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    store.dispatch(addPost({ title: data.title, body: data.body }));

    console.log("State on server", store.getState());

    return {
      props: {},
    };
  }
);
export default TestPage;
