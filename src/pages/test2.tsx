import axios from "axios";
import { NextPage } from "next";
import Link from "next/link";
import React, { useEffect } from "react";
import { wrapper } from "../feature/store";
import { addPost2 } from "../feature/test/testSlice";
import { useAppDispatch } from "../hooks/rtk";

interface Iprops {
  data?:
    | {
        id: number;
        title: string;
      }
    | undefined;
}

const TestPage2: NextPage<Iprops> = ({ data }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(addPost2({ id: data?.id, title: data?.title }));
  }, [data]);

  return (
    <div>
      <Link href="/test">Go to test1</Link>
    </div>
  );
};

export async function getServerSideProps() {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/posts/5"
  );

  return {
    props: { data }, // will be passed to the page component as props
  };
}
export default TestPage2;
