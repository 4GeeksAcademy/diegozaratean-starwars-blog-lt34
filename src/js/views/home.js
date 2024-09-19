import React, { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext";

import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Cardnave } from "../component/cardnave";

export const Home = () => {

	const { store, actions } = useContext(Context);
	const [starships, setStarships] = useState([])
	const [prueba, setPrueba] = useState(['pintar','ciclismo','correr','leer','fotografia','bailar'])
	
	// useEffect(()=>{
	// 	console.log('se cargo Home')
	// 	fetch('https://www.swapi.tech/api/starships')
	// 	.then((response)=>response.json())
	// 	// .then((data)=> console.log(data.results))
	// 	.then((data)=> setStarships(data.results))

	// },[])

	return(
		<div className="text-center mt-5">
			
		

			<h1>naves desde FLUX!</h1>			

			{ store.starships.map( (nave)=> <Cardnave key={nave.url} uid={nave.url} model={nave.model} name={nave.name}/> ) }
			
			
		</div>
	);
	
} 