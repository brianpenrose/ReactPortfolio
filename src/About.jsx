import './About.css'; // Import your CSS file
import Screenshot from './assets/CareerPath.png'; // Import the image
import AboutMeIcon from './assets/objects/aboutMe.png';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer'; // Correctly import useInView

const AboutMe = () => {
  const { ref: leftRef, inView: leftInView } = useInView({ triggerOnce: true });
  const { ref: rightRef, inView: rightInView } = useInView({ triggerOnce: true });

  return (
    <div className="about-me-container">
      <div className="about-me-content">
        <motion.div 
          className="about-me-item-left"
          ref={leftRef}
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: leftInView ? 0 : -100, opacity: leftInView ? 1 : 0 }}
          transition={{ duration: 1 }}
        >
          <h3>About me</h3>
          <p>I bring extensive expertise as a Software Engineer, adept in both front and back-end development. By day, I thrive in the back-end realm, leveraging technologies like C#, .NET, and AWS Cloud. Meanwhile, my evenings and free time are dedicated to crafting captivating front-end experiences using HTML, CSS, JavaScript, and React for diverse clientele. <br/><br/>Like what you hear?<br/> Get in touch.</p>
        </motion.div>
        <motion.div 
          className="about-me-item-img"
          ref={leftRef}
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: leftInView ? 0 : 100, opacity: leftInView ? 1 : 0 }}
          transition={{ duration: 1 }}
        >
          <img src={AboutMeIcon} alt="AboutMe" />
        </motion.div>
      </div>
      <motion.div 
        className="about-me-item-right-img"
        ref={rightRef}
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: rightInView ? 0 : 100, opacity: rightInView ? 1 : 0 }}
        transition={{ duration: 1 }}
      >
        <h3>Career Roadmap</h3>
        <img src={Screenshot} alt="Career Roadmap" />
      </motion.div>
    </div>
  );
};

export default AboutMe;
