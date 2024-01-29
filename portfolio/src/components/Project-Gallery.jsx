import React from "react";
import Project from "./Project";
import projects from '../data/projects.json'

function ProjectGallery() {
    return <div>
        <br></br>
        <p>This is a list of my projects</p>;
        <div className="container projectsBox row">
            { projects.map((project) => {
            return <Project key={project.id} link= {project.link} id={project.id} title={project.title} image={project.image} description={project.description} />
            })}
        </div>
    </div>
}

export default ProjectGallery