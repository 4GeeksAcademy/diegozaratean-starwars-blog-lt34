import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Nave = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
    const [starshipData, setStarshipData] = useState({})
    console.log(params)

    useEffect(()=>{
		console.log('se cargo nave')
		fetch('https://www.swapi.tech/api/starships/'+params.nave_id)
		.then((response)=>response.json())
		// .then((data)=> console.log(data.result.properties))
        .then((data)=> setStarshipData(data.result.properties))
		// .then((data)=> setStarships(data.results))

	},[])
	return (
		<div className="jumbotron">
			<h1 className="display-4">This will show the demo element: {params.nave_id}</h1>

            <p>Model: {starshipData.model}</p>
            <p>Manufacturer: {starshipData.manufacturer}</p>
            <p>Name: {starshipData.name}</p>

			<hr className="my-4" />

			<Link to="/">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Back home
				</span>
			</Link>
		</div>
	);
};

Nave.propTypes = {
	match: PropTypes.object
};
