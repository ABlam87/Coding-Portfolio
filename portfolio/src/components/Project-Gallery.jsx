import React from "react";
import projects from '../data/projects.json'

function ProjectGallery() {
    <p>This is a list of my projects</p>;
    <div>
        { projects.map((project) => {
            return <Project key={project.id} title={project.title} description={project.description} />
        })}
    </div>
}