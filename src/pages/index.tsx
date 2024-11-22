import Head from "next/head";
import Image from "next/image";
import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import styled from "@emotion/styled";
import Button from "@mui/material/Button";
import { Title } from "../components/Title";
import { MenuView } from "../components/MenuView";
import Link from "next/link";
const Home: NextPage = () => {
  return (
    <MainView>
      <MenuView>
        <Title>CRYPTO SPACE</Title>

        <Link href="/mint">
          <MenuButton variant="outlined" size="large">Minting your Own Planet</MenuButton>
        </Link>
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