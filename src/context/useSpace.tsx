import { PlanetName } from "@/components/Planet/Planet";
import { createContext, useState } from "react";

interface ISpaceContext {
    planet: PlanetName
    showPlanet: (planet: PlanetName) => void;
    clearPlanet: () => void;
}

export const SpaceContext = createContext<ISpaceContext>({
    planet: null,
    showPlanet: () => { },
    clearPlanet: () => { },
});

export const SpaceContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [planet, setPlanet] = useState<PlanetName | null>(null);

    return <SpaceContext.Provider value={{ planet, showPlanet: (planet: PlanetName) => setPlanet(planet), clearPlanet: () => setPlanet(null) }}>{children}</SpaceContext.Provider>
}

