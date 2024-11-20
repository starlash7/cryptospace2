import Head from "next/head";
import Image from "next/image";
import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import styled from "@emotion/styled";
import Button from "@mui/material/Button";
import { Title } from "../components/Title";
import { MenuView } from "../components/MenuView";

const Home: NextPage = () => {
  return (
    <MainView>
      <MenuView>
        <Title>CRYPTO SPACE</Title>
        <MenuButton variant="outlined" size="large">Minting your Own Planet</MenuButton>
        <MenuButton variant="outlined" size="large">View All Planets</MenuButton>
      </MenuView>
    </MainView>
  )
}

const MainView = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const MenuButton = styled(Button)`
  margin: 4px 0;
  `

export default Home;
