import { useGLTF } from "@react-three/drei";
import React, { useRef } from "react";
import { useMemo } from "react";
import { PrimitiveProps, useFrame } from "@react-three/fiber";

export type PlanetName =
    "earth" | "mars" | "jupiter" | "saturn" | "uranus" | "neptune" | null;

export const PlanetList = [
    "earth", "mars", "jupiter", "saturn", "uranus", "neptune"
] as PlanetName[];

interface PlanetProps extends Partial<PrimitiveProps> {
    name: PlanetName;
}

export const Planet = ({ name, ...primitiveProps }: PlanetProps) => {
    const planetRef = useRef<any>();
    const { scene: earth } = useGLTF("/3d-objects/earth.glb")
    const { scene: mars } = useGLTF("/3d-objects/mars.glb")
    const { scene: jupiter } = useGLTF("/3d-objects/jupiter.glb")
    const { scene: saturn } = useGLTF("/3d-objects/saturn.glb")
    const { scene: uranus } = useGLTF("/3d-objects/uranus.glb")
    const { scene: neptune } = useGLTF("/3d-objects/neptune.glb")

    const scene = useMemo(() => name ? {
        earth,
        mars,
        jupiter,
        saturn,
        uranus,
        neptune,
    }[name] : null, [earth, mars, jupiter, saturn, uranus, neptune, name]);

    const copiedScene = useMemo(() => scene ? scene.clone() : null, [scene]);

    useFrame(() => {
        if (planetRef.current) {
            planetRef.current.rotation.x = 3;
            planetRef.current.rotation.y += 0.004;
        }
    })

    return copiedScene !== null ? <group key="planet" dispose={null}>
        <primitive ref={planetRef} object={copiedScene.children[copiedScene.children.length - 1]}
            {...primitiveProps}
        />
    </group> : null;
}