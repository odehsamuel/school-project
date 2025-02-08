import React from "react";
import SideBar from "./components/SideBar";
import { HomeStyled, MainHome } from "./components/styles/home.styled";

function Home({ children }) {
  return (
    <HomeStyled>
      <SideBar />
      <MainHome>{children}</MainHome>
    </HomeStyled>
  );
}

export default Home;
