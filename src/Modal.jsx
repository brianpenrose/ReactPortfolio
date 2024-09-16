import { useState, useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import './Modal.css';
import emailjs from 'emailjs-com';
import { FaTimes, FaSpinner } from 'react-icons/fa';
import Code from './assets/objects/code.png';
import ReactIcon from './assets/objects/reacticon.png';
import JavaScriptIcon from './assets/objects/javaScript.png';
import MySql from './assets/objects/mySql.png';
import Html from './assets/objects/html.png';
import Aws from './assets/objects/aws.png';

const Modal = ({ isOpen, toggleModal }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const modalRef = useRef(null);
    const navbarHeight = 150; // Replace this with your actual navbar height
  
    useEffect(() => {
      if (isOpen && modalRef.current) {
        const modalPosition = modalRef.current.getBoundingClientRect().top + window.scrollY;
        const scrollToPosition = modalPosition - navbarHeight;
        window.scrollTo({ top: scrollToPosition, behavior: 'smooth' });
      }
    }, [isOpen]);
  
    const contact = (event) => {
        event.preventDefault();
        setIsLoading(true);
  
        // Sending email via EmailJS
        emailjs.sendForm(
          'service_k62c3lm', // Replace with your EmailJS service ID
          'template_9m658jb', // Replace with your EmailJS template ID
          event.target,
          'TKA3jXiPZAIRs4M3c' // Replace with your EmailJS user ID
        ).then(
          (result) => {
            console.log(result.text);
            setIsLoading(false);
            setIsSuccess(true);
  
            // Hide the success message after a few seconds
            setTimeout(() => {
              setIsSuccess(false);
              toggleModal();
            }, 3000);
  
            event.target.reset();
          },
          (error) => {
            console.log(error.text);
            setIsLoading(false);
            // You can add error handling logic here if needed
          }
        );
      };

  return (
    <>
      <button className="mail__btn click" onClick={toggleModal}>
        <i className="fas fa-envelope"></i>
      </button>
      <div ref={modalRef} className={`modal ${isOpen ? 'modal--open' : ''}`}>
        <div className="modal__half modal__about">
          <h3 className="modal__title">Here`s a bit about me...</h3>
          <p className="modal__para">
            As an experienced <b className="orange">Software Engineer</b>, I possess a diverse set of technical skills in Software Programming, Web Development, UI Design, and Database & Cloud Structures. <br /><br />I am proficient in both front-end and back-end development, with recent expertise in the latest AWS Cloud technologies.
            <br /><br />
            Feel free to get in touch with any inquiries. <b className="orange">Thank you!</b>
          </p>
          <div className="modal__languages">
            <figure className="modal__language">
              <div className="icon1"><img src={ReactIcon} alt="ReactIcon" /></div>
            </figure>
            <figure className="modal__language">
              <div className="icon2"><img src={JavaScriptIcon} alt="JsIcon" /></div>
            </figure>
            <figure className="modal__language">
              <div className="icon8"><img src={Aws} alt="Aws" /></div>
            </figure>
            <figure className="modal__language">
              <div className="icon3"><img src={Code} alt="C#" /></div>
            </figure>
            <figure className="modal__language">
              <div className="icon6"><img src={MySql} alt="MySql" /></div>
            </figure>
            <figure className="modal__language">
              <div className="icon6"><img src={Html} alt="Html" /></div>
            </figure>
          </div>
        </div>
        <div className="modal__half modal__contact">
          <FaTimes className="modal__exit click" onClick={toggleModal} />
          <h3 className="modal__title">Like To Hear More?</h3>
          <h3 className="modal__sub-title">I`m currently open to new opportunities.</h3>
          <form id="contact__form" onSubmit={contact}>
            <div className="form__item">
              <label className="form__item--label">Name</label>
              <input className="input" name="user_name" type="text" required />
            </div>
            <div className="form__item">
              <label className="form__item--label">Email</label>
              <input className="input" name="user_email" type="email" required />
            </div>
            <div className="form__item">
              <label className="form__item--label">Message</label>
              <textarea className="input" name="message" required></textarea>
            </div>
            <button id="contact__submit" className="form__submit">Send it my way</button>
          </form>
          {isLoading && (
            <div className="modal__overlay modal__overlay--loading modal__overlay--visible">
              <FaSpinner className="spinner" />
            </div>
          )}
          {isSuccess && (
            <div className="modal__overlay modal__overlay--success modal__overlay--visible">
              Thanks for the message! Looking forward to speaking to you soon.
            </div>
          )}
        </div>
      </div>
    </>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired,
};

export default Modal;
