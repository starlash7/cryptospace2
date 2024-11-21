import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { CanvasHTMLAttributes, useContext } from "react";
import dynamic from "next/dynamic";
import { SpaceContext } from "../../../context/useSpace";

const Stars = dynamic(() => import('@react-three/drei').then(mod => mod.Stars), {
    ssr: false,
});

const Planet = dynamic(() => import('../Planet').then(mod => mod.Planet), {
    ssr: false,
});

export const Space = (props: CanvasHTMLAttributes<any>) => {
    const { planet, showPlanet } = useContext(SpaceContext)
    return (
        <Canvas onCreated={(state) => state.gl.setClearColor("black")}{...props}>
            <Stars />
            <Planet name="earth" position={[0, 1.5, 0]} />
            <ambientLight intensity={0.3} />
            <spotLight position={[100, 100, 80]} distance={200} intensity={20} angle={1} />
        </Canvas>
    )
}
