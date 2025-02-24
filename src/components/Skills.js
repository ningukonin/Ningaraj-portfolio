import React from 'react';

const skills = [
  'Core Java , Spring Boot Framework , and MySQL',
  'HTML , CSS , JavaScript (Basics) & ReactJS (Basics) ',
];

const tools = [
  'Eclipse IDE , EditPlus , VS Code & GitHub',
  'MySQL WorkBench & MongoDB'
];

function Skills() {
  return (
    <section>
      <h2>Skills & Tools</h2>
      <div className="skills-tools-container">
        <div className="skills-tools">
          {skills.map((skill, index) => (
            <div key={index} className="skills-tools-item">{skill}</div>
          ))}
        </div>
        <div className="skills-tools">
          {tools.map((tool, index) => (
            <div key={index} className="skills-tools-item">{tool}</div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
