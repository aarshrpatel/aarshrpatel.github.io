import React, { useState } from 'react';
import './App.css';

const skillsData = [
  { name: 'Python', level: 3 },
  { name: 'Java', level: 4 },
  { name: 'C++', level: 2 },
  { name: 'HTML', level: 5 },
  { name: 'CSS', level: 4 },
  { name: 'JavaScript', level: 3 },
  { name: 'Git', level: 4 },
  { name: 'VS Code', level: 4 },
  { name: 'SQL', level: 3 },
  { name: 'MySQL', level: 3 },
  { name: 'Business Administration', level: 4 }
];

function Skill({ skill }) {
  const [level, setLevel] = useState(skill.level);

  return (
    <div className="skill">
      <span>{skill.name}</span>
      <div className="squares">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className={`square ${i < level ? 'filled' : ''}`}
            onClick={() => setLevel(i + 1)}
          />
        ))}
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header>
        <h1>Aarsh Patel</h1>
        <p>Computer Science Student at the University of South Carolina</p>
        <nav>
          <ul>
            <li><a href="#about">About Me</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <section id="landing">
          <h2>Welcome to My Personal Webpage</h2>
          <p>Explore to learn more about me, my education, skills, projects, and how to get in touch.</p>
        </section>
        <section id="about">
          <h2>About Me</h2>
          <p>I am a computer science student at the University of South Carolina, minoring in Business Administration. Passionate about software engineering, I am currently seeking internships in the field. As a vegetarian who also eats eggs, I am committed to a healthy lifestyle and fitness goals, aiming to lose weight without losing muscle mass. Additionally, I am working on improving my skin health due to acne scarring.</p>
        </section>
        <section id="education">
          <h2>Education</h2>
          <ul>
            <li><strong>University of South Carolina</strong> - Bachelor of Science in Computer Science, Minor in Business Administration</li>
          </ul>
        </section>
        <section id="skills">
          <h2>Skills</h2>
          <div className="skills-container">
            {skillsData.map(skill => (
              <Skill key={skill.name} skill={skill} />
            ))}
          </div>
        </section>
        <section id="projects">
          <h2>Projects</h2>
          <ul>
            <li><strong>Project 1</strong> - Description of Project 1.</li>
            <li><strong>Project 2</strong> - Description of Project 2.</li>
            <li><strong>Project 3</strong> - Description of Project 3.</li>
          </ul>
        </section>
        <section id="contact">
          <h2>Contact</h2>
          <p>Email: <a href="mailto:aarshpatel2004@gmail.com">aarshpatel2004@gmail.com</a></p>
          <p>LinkedIn: <a href="https://www.linkedin.com/in/aarsh-r-patel" target="_blank">linkedin.com/in/aarsh-r-patel</a></p>
          <p>GitHub: <a href="https://github.com/aarshrpatel" target="_blank">github.com/aarshrpatel</a></p>
        </section>
      </main>
    </div>
  );
}

export default App;
