import { Container, Grid, Typography } from "@mui/material";
import type { NextPage } from "next";
import Link from "next/link";
import Cards from "../components/Cards/Cards";
import Navbar from "../components/Navbar/Navbar";

const Home: NextPage = () => {
  return (
    <div
      style={{ backgroundColor: "#e5e7eb", width: "100vw", height: "100vh" }}
    >
      <Navbar />
      <Container maxWidth={"xl"}>
        <Typography variant="h6" component='div' sx={{marginBottom:2}} >
          نمایندگی های تعیین شده جهت بازرسی:
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Cards />
          </Grid>
          <Grid item xs={4}>
            <Cards />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Home;
