import React from "react";
import Project from "./Project";
import projects from '../data/projects.json'

function ProjectGallery() {
    return <div id='projectPage'>
        <br></br>
        <div className="container-fluid projectsBox row">
            { projects.map((project) => {
            return <Project key={project.id} link= {project.link} id={project.id} title={project.title} image={project.image} description={project.description} />
            })}
        </div>
    </div>
}

export default ProjectGallery