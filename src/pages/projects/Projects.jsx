import React from 'react';
import { portfolio } from "../../assets/data";
import ProjectsItems from "../../components/ProjectItems";
import './projects.css';

function Projects() {
    return (
        <section className='portfolio section'>
            <h2 className='section__title'>My <span>Projects</span></h2>
            <div className='portfolio__container container grid'>
                {portfolio.map((item) => {
                    return <ProjectsItems key={item.id} {...item}/>;
                })}
            </div>
        </section>
    );
}

export default Projects;


