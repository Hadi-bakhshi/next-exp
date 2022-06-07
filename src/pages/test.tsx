import React, { useEffect } from "react";
import { NextPage } from "next";
import axios from "axios";
import { wrapper } from "../feature/store";
import { addPost } from "../feature/test/testSlice";
import Link from "next/link";


const TestPage: NextPage = () => {
  return (
    <div>
      <Link href="/">Go home</Link>
      <br/>
      <Link href="/test2">Go test2</Link>
    </div>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    store.dispatch(addPost({id: 2 ,title: data.title, body: data.body }));
    return {
      props: {},
    };
  }
);

// TestPage.getInitialProps = wrapper.getInitialPageProps(
//   (store) => async () => {
//     const {data} = await axios.get("https://jsonplaceholder.typicode.com/posts/1");
//     store.dispatch(addPost({id: data.id ,title: data.title, body: data.body}))
//   }
// )
export default TestPage;
