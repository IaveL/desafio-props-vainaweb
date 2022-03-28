import React from "react";
import styled from "styled-components";

const AboutInfo = styled.div`
  background-color: #8d8daa;
  width: 600px;
  height: 400px;
  margin: 20px 0 20px 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #f7f5f2;
`;

const About = ({ name, age, weapon }) => {
  return (
    <AboutInfo>
      <h2>Olá, meu nome é {name}!</h2>
      <h2>tenho {age} anos</h2>
      <h2>e minha arma é {weapon}.</h2>
    </AboutInfo>
  );
};

export default About;
