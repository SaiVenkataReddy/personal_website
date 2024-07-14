import React from 'react';
import './Skills.css';
import { skillsData } from '../../assets/data';

const Skills = () => {
    return (
        <>
            {skillsData.map((section, index) => (
                <div className="skills-section" key={index}>
                    <h4>{section.section}</h4>
                    {section.skills.map((skill, skillIndex) => (
                        <div className="skill" key={skillIndex}>
                            <div className="icon-container">{skill.icon}</div>
                            {skill.title}
                        </div>
                    ))}
                </div>
            ))}
        </>
    );
};

export default Skills;

