import { Box, Container, Grid, Typography } from "@mui/material";
import type { NextPage } from "next";
import Link from "next/link";
import Cards from "../components/Cards/Cards";
import Navbar from "../components/Navbar/Navbar";

const Home: NextPage = () => {
  return (
    <main style={{backgroundColor:"#ccc" , width:"100vw", height:"100vh"}}>
      <Navbar />
      <Container maxWidth={"xl"}>
        <Typography variant="h6" component='div' sx={{marginBottom:2}} >
          نمایندگی های تعیین شده جهت بازرسی:
        </Typography> 
      </Container>
    </main>
  );
};

export default Home;
