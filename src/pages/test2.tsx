import axios from "axios";
import { NextPage } from "next";
import Link from "next/link";
import React from "react";
import { wrapper } from "../feature/store";
import { addPost2 } from "../feature/test/testSlice";

const TestPage2: NextPage = () => {
  return (
    <div>
      <Link href="/test">Go to test1</Link>
    </div>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/posts/5"
    );
    store.dispatch(addPost2({ id: data.id, title: "hadi" }));
    return {
        props: {},
      };
  }
);
// TestPage2.getInitialProps = wrapper.getInitialPageProps(
//   ({ dispatch }) =>
//     async () => {
//       await dispatch(addPost2({ id: 5, title: "hadi" }));
//     }
// );
export default TestPage2;
