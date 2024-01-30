import React from "react";

function Project(props) {
    return <div id={props.id} className="card project" style={{minWidth: "200px"}}>
        <h2>{props.title}</h2>
        <a href={props.link} target="_blank"><span className="projectLink"></span></a>
        <img src = {props.image}></img>
        <p>{props.description}</p>
    </div>
}

export default Project 