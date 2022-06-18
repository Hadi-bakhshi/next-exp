import { Box, Container, Grid, Typography } from "@mui/material";
import axios from "axios";
import type { NextPage } from "next";
import Link from "next/link";
import { useEffect } from "react";
import Cards from "../components/Cards/Cards";
import Navbar from "../components/Navbar/Navbar";
import http from "../services/axiosConfig/interceptors";

const dummy_data = [
  {
    id: 1,
    title: "نمایندگی 114 سایپا",
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.",
    time: 2,
  },
  {
    id: 2,
    title: "نمایندگی 118 سایپا",
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.",
    time: 5,
  },
  {
    id: 3,
    title: "نمایندگی 120 سایپا",
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.",
    time: 4,
  },
];

const Home: NextPage = () => {


  return (
    <main>
      <Navbar />
      <Container maxWidth={"xl"}>
        <Typography variant="h6" component="div" sx={{ marginBottom: 2 }}>
          نمایندگی های تعیین شده جهت بازرسی:
        </Typography>
        <Grid container spacing={2}>
          {dummy_data.map((item) => (
            <Grid item xs={12} sm={6} md={4} key={item.id}>
              <Cards
                title={item.title}
                description={item.description}
                time={item.time}
              />
            </Grid>
          ))}
        </Grid>
        <Link href='/test'>Go to test</Link>
      </Container>
    </main>
  );
};

export default Home;
