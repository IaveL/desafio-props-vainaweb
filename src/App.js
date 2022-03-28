import React, { Component } from "react";
import About from "./components/About";
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MainTitle = styled.h1`
  background-color: #f56d91;
  margin: 35px 35px;
`;

const ContainerInfo = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
  }
  body{
   background-color:#DFDFDE;
  }
`;

const App = () => {
  return (
    <Container>
      <GlobalStyle />
      <ContainerInfo>
        <MainTitle>Personagens e suas armas:</MainTitle>
        <About name="Guts" age="24" weapon="a Dragon Slayer" />
        <About name="Itachi" age="21" weapon="o Sharingan" />
        <About name="Saitama" age="25" weapon="meu soco" />
      </ContainerInfo>
    </Container>
  );
};

export default App;
