import React from 'react';
import PropTypes from 'prop-types';
import Typewriter from 'typewriter-effect'; // Import Typewriter component
import './Hero.css'; // Import your CSS file
import Code from './assets/objects/code.png';
import Brackets from './assets/objects/brackets.png';
import ReactIcon from './assets/objects/reacticon.png';
import JavaScriptIcon from './assets/objects/javaScript.png';
import SeIcon from './assets/objects/seIcon.png';
import MySql from './assets/objects/mySql.png';
import Api from './assets/objects/api.png';
import Aws from './assets/objects/aws.png';


const TypewriterWrapper = () => {
  return (
    <Typewriter
      className="welcome-message"
      options={{
        strings: ["Hey there, I'm Brian"],
        autoStart: true,
      }}
      onInit={(typewriter) => {
        typewriter.typeString("Hey there, I'm Brian!").pauseFor(2500).start();
      }}
    />
  );
};

const Body = ({openModal, scrollToProjects}) => {
  const [role, setRole] = React.useState('A Software Engineer');
  const [animationClass, setAnimationClass] = React.useState('');

  React.useEffect(() => {
    const roles = ['Software Engineer', 'Web Developer', 'Designer', 'Creator'];
    let index = 0;

    const changeRole = () => {
      setAnimationClass('slide-out');

      setTimeout(() => {
        index = (index + 1) % roles.length;
        setRole(roles[index]);
        setAnimationClass('slide-in');
      }, 500);
    };

    const intervalId = setInterval(changeRole, 3000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="hero-container">
      <div className="falling-icon">
      <div className="icon1"><img src={ReactIcon} alt="ReactIcon" /></div>
      <div className="icon2"><img src={JavaScriptIcon} alt="JsIcon" /></div>
        <div className="icon3"><img src={Code} alt="CIcon" /></div>
        <div className="icon4"><img src={Brackets} alt="Bracket"/></div>
        <div className="icon5"><img src={SeIcon} alt="SeIcon" /></div>
        <div className="icon6"><img src={MySql} alt="MySql" /></div>
        <div className="icon7"><img src={Api} alt="Api" /></div>
        <div className="icon8"><img src={Aws} alt="Aws" /></div>
      </div>
      <div className="hero-header">
      <TypewriterWrapper />
      </div>
      <span className="wave">👋</span>
      <p>
         <br></br> <strong className={animationClass} style={{color: '#0071e3',fontWeight: 'bold', fontSize: '30px'}}>{role}</strong> <br></br>with a passion for crafting exceptional web applications. <br />
        Let`s build something amazing together.
      </p>
      <div className="buttons-container">
        <button className="get-in-touch-button"onClick={openModal}>Get in touch</button>
        <button className="view-my-work-button" onClick={scrollToProjects}>View my work</button>
      </div>
      <div className="scroll" onClick={scrollToProjects}>
      <div className="scroll__text">Click here to Explore Projects </div>
      <div className="scroll__icon click"> </div>
    </div>
</div>
  );
};

Body.propTypes = {
  openModal: PropTypes.func.isRequired,
  scrollToProjects: PropTypes.func.isRequired,
};

export default Body;
