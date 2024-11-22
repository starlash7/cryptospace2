import { NextPage } from "next";
import React, { useContext, useState, useEffect } from "react";
import { Title } from "../components/Title";
import { MenuView } from "../components/MenuView";
import Button from "@mui/material/Button";
import styled from "@emotion/styled";
import dynamic from 'next/dynamic';
import { SpaceContext } from "../context/useSpace";
import { useRouter } from "next/router";
const PlanetList = dynamic(() => import('../components/Planet/Planet').then(mod => mod.PlanetList), {
    ssr: false
});

const Mint: NextPage = () => {
    const router = useRouter();
    const { showPlanet, clearPlanet } = useContext(SpaceContext);
    const [planetIndex, setPlanetIndex] = useState(-1);

    const showRandomPlanet = () => {
        setPlanetIndex(Math.floor(Math.random() * PlanetList.length));
    }

    useEffect(() => {
        if (planetIndex >= 0) {
            showPlanet(PlanetList[planetIndex]);
        }
        return () => clearPlanet();
    }, [planetIndex, showPlanet, clearPlanet]);

    useEffect(() => {
        const interval = setInterval(() => showRandomPlanet(), 1000);
        showRandomPlanet();

        return () => clearInterval(interval);
    }, []);

    return (
        <MainView>
            <MenuView>
                <Title>Mint Your Own Planet</Title>

                <Description>
                    You can mint your own planet by paying the minting fee.
                </Description>

                <ButtonView>
                    <MenuButton variant="contained" size="large">
                        Mint Planet
                    </MenuButton>

                    <MenuButton variant="outlined" size="large" onClick={() => router.back()}>
                        Go Previous
                    </MenuButton>
                </ButtonView>
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
const Description = styled.div`
    font-size: 16px;
    line-height: 24px;
    font-weight: 100;
    color: #ffffff;
    text-align: center;
    `;

const ButtonView = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 24px;
    `;

const MenuButton = styled(Button)`
margin: 4px 0;
`;

export default Mint;