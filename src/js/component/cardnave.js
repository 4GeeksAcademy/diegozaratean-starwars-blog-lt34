import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import { Link } from "react-router-dom";

export const Cardnave = (props) => {
	return (
		<div className="card" style={{width: "18rem"}}>
			<img src={rigoImage} className="card-img-top" alt="..."/>
			<div className="card-body">
				<h5 className="card-title">{props.name}</h5>
				<p className="card-text">Info.{props.model}</p>
				<Link to={"/nave/" + props.uid} className="btn btn-primary">Ver {props.uid}</Link>
			</div>
		</div>
	);
};
