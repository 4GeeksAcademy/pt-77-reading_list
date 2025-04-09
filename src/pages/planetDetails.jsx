import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export const planetDetails = () => {
    const { uid } = useParams()
    const [planet, setPlanet] = useState({})
    const { store, dispatch } = useGlobalReducer()

    useEffect(() => {
        getEachPlanet()
    }, [])

    const getEachPlanet = async () => {
        let response = await fetch("https://www.swapi.tech/api/planets/" + uid)
        let data = await response.json();
        setPlanet(data.result.properties);
    }

    return (
        <div className="text-center mt-5">
            <h1>Name:</h1>
            <h3>{planet.name}</h3>
            
            <h1>Eye color</h1>
            <h3>{planet.terrain	}</h3>

            <h1>Birth Year</h1>
            <h3>{planet.gravity}</h3>

        </div>
    );
}; 