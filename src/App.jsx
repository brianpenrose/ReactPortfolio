import { useState, useRef } from 'react';
import Body from "./Hero";
import Navbar from "./NavBar";
import About from "./About";
import Projects from "./Projects";
import Modal from "./Modal";
import Footer from "./Footer";

export default function App() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState('');
  const projectsRef = useRef(null);

  const openModal = (content) => {
    setModalContent(content);
    setModalOpen(true);
  };

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  const scrollToProjects = () => {
    projectsRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <Navbar openModal={openModal} scrollToProjects={scrollToProjects}/>
      <Body openModal={toggleModal} scrollToProjects={scrollToProjects} />
      <About/>
      <div ref={projectsRef}><Projects/></div>
      <Modal isOpen={isModalOpen} toggleModal={toggleModal} content={modalContent} />
      <Footer/>
    </div>
  );
}