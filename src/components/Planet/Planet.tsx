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
    const planetRef = useRef<THREE.Object3D>(null);

    const gltfPath = name ? `/3d-objects/${name}.glb` : '';
    const { scene: planetScene } = useGLTF(gltfPath);

    const copiedScene = useMemo(() => {
        return planetScene ? planetScene.clone() : null;
    }, [planetScene]);

    useFrame(() => {
        if (planetRef.current) {
            planetRef.current.rotation.x = 3;
            planetRef.current.rotation.y += 0.004;
        }
    });

    if (!name || !copiedScene) {
        return null;
    }

    return (
        <primitive
            ref={planetRef}
            object={copiedScene}
            {...primitiveProps}
        />
    );
}

export default React.memo(Planet);