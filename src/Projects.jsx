import { useState } from 'react';
import './Projects.css';
import ReactCardFlip from 'react-card-flip';
import LocateMeImage from './assets/LocateMe.jpg';
import TwitterImage from './assets/Twitter2.png';
import PortfolioImage from './assets/Portfolio.png';
import MyPortfolioWebsite from './assets/MyPortfolioWebsite.png';
import WebsiteLive from './assets/objects/webSiteLive.png';
import Github from './assets/objects/github.png';
import { motion} from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const projects = [
  { id: 1, name: 'Locate Me', image: LocateMeImage, title: 'Locate Me', techStack: 'Html, CSS, JavaScript, Google MapsAPI', description: 'Locate Me is a web mapping platform application using Google`s Mapping API. It offers satellite imagery, aerial photography, street maps, 360° interactive panoramic views of streets, real-time traffic conditions, and route planning for traveling by foot, car, bike, air and public transportation.', sourceCode: 'https://github.com/brianpenrose/locateme', liveVersion: 'https://brianpenrose.github.io/locateme/' },
  { id: 2, name: 'Twitter Replica', image: TwitterImage, title: 'Twitter Replica', techStack: 'Html, CSS, JavaScript, TwitterAPI`s, Firebase', description: 'This React built project focuses on replicating the popular social media platform Twitter. In this project I was able to link my front end to a real-time database through the platform Firebase. User`s tweets are stored in the database when posted and returned to the feed section instantly like Twitter. Twitter API`s such as Embedded Tweets, Timelines and Buttons were used to provide a responsive website.', sourceCode: 'https://github.com/brianpenrose/twitter', liveVersion: 'https://twitter-b7ada.firebaseapp.com' },
  { id: 3, name: 'Portfolio Website', image: PortfolioImage, title: 'Client eportfolio', techStack: 'Html, CSS, JavaScript', description: 'This E-Portfolio was built for a client using HTML, CSS and JavaScript. In this Project I focused on creating a dynamic and responsive with an attractive UI Design. As per clients request I implemented his choice of projects, languages and way of contact. Feedback from the client was that employers instantly became impressed with his e-portfolio which resulted in a lot more job interviews.', sourceCode: 'https://github.com/brianpenrose/clientportfolio', liveVersion: 'https://brianpenrose.github.io/clientportfolio' },
  { id: 4, name: 'MyPortfolio Website', image: MyPortfolioWebsite, title: 'React eportfolio', techStack: 'React, JSX, Html, CSS', description: 'This ePortfolio website, is a dynamic and interactive platform built with React. This site showcases my professional journey, skills, and projects in a visually appealing and user-friendly manner. I`ve used a variety of React components such as use-states, typewriter effects, flip card and other eye-catching animations.', sourceCode: 'https://github.com/username/locate-me', liveVersion: 'https://locate-me.example.com' }
];

const Projects = () => {
  const [flippedCards, setFlippedCards] = useState(Array(projects.length).fill(false));
  const { ref, inView } = useInView({ triggerOnce: true });

  const handleFlip = (index) => {
    const newFlippedCards = [...flippedCards];
    newFlippedCards[index] = !newFlippedCards[index];
    setFlippedCards(newFlippedCards);
  };

  return (
    <div id="projects-section" className="projects-section">
      <h1>Explore projects</h1>
      <div className="projects-container" ref={ref}>
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="project-card"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <ReactCardFlip isFlipped={flippedCards[index]} flipDirection="vertical">
              <div
                className="project-image"
                style={{ backgroundImage: `url(${project.image})` }}
                onClick={() => handleFlip(index)}
              >
                <div className="project-info">
                  <h3 className="project-name">{project.name}</h3>
                  <button onClick={() => handleFlip(index)} className="project-button">View Project</button>
                </div>
              </div>

              <div className="project-info-back" onClick={() => handleFlip(index)}>
                <h2>{project.title}</h2>
                <p><strong className="tech-stack-bold">Tech Stack: </strong>{project.techStack}</p>
                <p>{project.description}</p>
                <div className="project-links">
                  <a href={project.sourceCode} target="_blank" rel="noopener noreferrer">
                    <img src={Github} alt="Source Code" className="project-link-image" />
                    <span>Source Code</span>
                  </a>
                  <a href={project.liveVersion} target="_blank" rel="noopener noreferrer">
                    <img src={WebsiteLive} alt="Live Version" className="project-link-image" />
                    <span>Live Version</span>
                  </a>
                </div>
                <button onClick={() => handleFlip(index)} className="project-button">Back</button>
              </div>
            </ReactCardFlip>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
