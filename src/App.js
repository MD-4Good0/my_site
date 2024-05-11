import React from "react";

import C from './Components/Assets/C.png';

import handwave from './Components/Assets/handwave.png';
import photo from './Components/Assets/Photo.png';

import github from './Components/Assets/github.png';
import linkedin from './Components/Assets/linkedin.png';

import react from './Components/Assets/react.png';
import html from './Components/Assets/html.png';
import css from './Components/Assets/css.png';
import javascript from './Components/Assets/javascript.png';

import frontend from './Components/Assets/Frontend.png';

import medlabview from './Components/Assets/medlabview.png';
import medlabview_logo from './Components/Assets/medlabview-logo.png';
import upm_ir from './Components/Assets/upm-ir.png';
import upm_ir_logo from './Components/Assets/upm-ir-logo.png';

import underline from './Components/Assets/underline.png';

import location from './Components/Assets/location.png';
import email from './Components/Assets/email.png';
import phone from './Components/Assets/phone.png';

import redirect from './Components/Assets/redirect.png';

import { useRef } from "react";

import './App.css';

function App() {
  const Me = useRef();
  const About = useRef();
  const Projects = useRef();
  const Contact = useRef();

  return (
    <div className="App">
        <div className='header'>
          <div className="left-stuff">
              <img src={C} alt="C" />
              <div className="title">ael.DNA</div>

          </div>

          <div className="right-stuff">
            <button className="button1" onClick={() => {
              Me.current?.scrollIntoView({
                behavior: 'smooth'
              })
            }}>
                Home
            </button>
            <button className="button2" onClick={() => {
                About.current?.scrollIntoView({
                  behavior: 'smooth'
                })
              }}>
                  About
            </button>
            <button className="button" onClick={() => {
                Projects.current?.scrollIntoView({
                  behavior: 'smooth'
                })
              }}>
                Projects
            </button>
            <button className="button" onClick={() => {
                Contact.current?.scrollIntoView({
                  behavior: 'smooth'
                })
              }}>
                Contact
            </button>
          </div>
      </div>

      <div ref={Me} id="Me"></div>

      <section className="Me">
        <div className="Me-column">
          <div className="Me-row">
            <div className="Me-left">
              <div className="Me-left-1strow">
                Front-End React
              </div>
              <div className="Me-left-2ndrow">
                Developer 
                <img src={handwave} alt="handwave"/>
              </div>
              <div className="Me-left-3rdrow">
                Hi, I'm Michael David N Agudo. A learning Front-end React
              </div>
              <div className="Me-left-4throw">
                Developer from the University of the Philippines Manila. 📍
              </div>
              <div className="Me-left-5throw">
                <a href="https://www.linkedin.com/in/cael-dna" classname="linkedin">
                  <button className="Me-1">
                    <img src={linkedin} alt="linkedin"/>
                  </button>
                </a>
                <div className="round">
                  <a href="https://github.com/MD-4Good0" classname="github">
                    <button className="Me-2">
                      <img src={github} alt="github"/>
                    </button>
                  </a>
                </div>
              </div>
              <div className="Me-Tech-Stack">
                Tech Stack
                <span className="divider">|</span>
                <img src={react} alt="react"/>
                <img src={html} alt="html"/>
                <img src={css} alt="css"/>
                <img src={javascript} alt="javascript"/>
              </div>
            </div>

            <div className="Me-right">
              <img src={photo} alt="cael"/>
            </div>          
          </div>
        </div>
      </section>
      
      <div ref={About} id="About">.</div>

      <section className="About">
        <div className="about">
          <img src={frontend} alt="frontend"/>
          <div className="About-Me">
            <div className="About-Me-1strow">
            📌 About Me ~
            </div>
            <div className="About-Me-2ndrow">
              A passionate Front-end Developer from the University of the Philippines Manila
            </div>
            <div className="About-Me-3rdrow">
              I am an enthusiastic front-end developer with a passion 
              for designing and creating websites, and a deep understanding 
              of user interfaces and experiences. My creativity and curiosity 
              fuel my dedication to continuously improve and advance my skills 
              in front-end development.
            </div>
            <div className="About-Me-4throw">
              I possess an entry-level set of skills in HTML, CSS, JavaScript,
              and the React bootstrap, however, I am willing to learn and improve 
              on these skills in hopes that I may reach my goal of becoming a
              well-versed and well-equipped front-end developer. 
            </div>
          </div>
        </div>
      </section>

      <div ref={Projects} id="Projects">.</div>

      <section className="Projects">
        <div className="projects">
          <div className="Projects-1strow">
            🧩 Projects ~
          </div>
          <div className="Projects-2ndrow">
            The pieces that create the full picture.
          </div>
          <div className="Projects-column">
            <div className="Projects-3rdrow">
              <div className="Projects-photo">
                <img src={medlabview} alt="medlabview"/>
              </div>
              <div className="Projects-info">
                  <div className="Projects-title-1">
                    <img src={medlabview_logo} alt="medlabview logo"/>
                    ~ MEDLABVIEW (WIP) ~
                  </div>
                  <div className="Projects-description-1">
                    MedLabView is a Laboratory Test Portal wherein 
                    Doctors and Nurses may view, Medical Technologists may input, 
                    Pathologists may approve such laboratory tests.
                  </div>
                  <div className="Projects-used">
                    <div className="Projects-used-1">
                      REACT
                    </div>
                    <div className="Projects-used-2">
                      CSS
                    </div>
                  </div>
                  <div className="Projects-gitdemo">
                    <a href="https://github.com/BohemianRasberry/medlabview/tree/neoneo" className="medlabview">
                      <button>
                        Code
                        <img src={github} alt="github"/>
                      </button>
                    </a>
                    <a href="https://bohemianrasberry.github.io/medlabview/" className="medlabview-site">
                      <button>
                        Live View
                        <img src={redirect} alt="redirect"/>
                      </button>
                    </a>
                  </div>
              </div>
            </div>
            <div className="Projects-4throw">
              <div className="Projects-info">
                  <div className="Projects-title-2">
                    <img src={upm_ir_logo} alt="upm_ir_logo"/>
                    ~ UPM IR (WIP) ~
                  </div>
                  <div className="Projects-description-2">
                    UPM IR is an Institutional Repository System where in documents,
                    journals, files, and any such work from the University of the 
                    Philippines Manila may be available to anyone around the world.
                  </div>
                  <div className="Projects-used">
                    <div className="Projects-used-1">
                      REACT
                    </div>
                    <div className="Projects-used-2">
                      CSS
                    </div>
                  </div>
                  <div className="Projects-gitdemo">
                    <a href="https://github.com/BohemianRasberry/CS-122-IR/tree/react-proj" className="medlabview-site">
                      <button>
                        Code
                        <img src={github} alt="github"/>
                      </button>
                    </a>
                    <div className="Projects-gitdemo-temp">
                      <button>
                        To Be Posted!
                      </button>
                    </div>
                  </div>
              </div>
              <div className="Projects-photo">
                <img src={upm_ir} alt="upm_ir"/>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="Contact">
        <div ref={Contact} id="contact">
          <div className="Contact-1strow">
            📱 Contact ~
          </div>
          <div className="Contact-2ndrow">
            "I'm only one call away..." - Sun Tzu
          </div>
          <div className="underline">
            <img src={underline} alt="underline"/>
          </div>
          <div className="Contact-3rdrow">
            <div className="Contact-address">
              <img src={location} alt="location"/>
              <a href="https://www.google.com/maps/place/Antipolo" className="address">
                Antipolo City, Rizal
              </a>
            </div>
            <div className="Contact-email">
              <img src={email} alt="email"/>
              <a href="mailto:agudo.mdn@gmail.com" className="email">
                agudo.mdn@gmail.com
              </a>
            </div>
            <div className="Contact-phone">
              <img src={phone} alt="phone"/>
              <div className="Contact-phone-column">
                <a href="tel:+63960-609-0601" className="Contact-phone-1">
                  +63 960 609 0601
                </a>
                <a href="tel:+63976-338-5485" className="Contact-phone-2">
                  +63 976 338 5485
                </a>
              </div>
            </div>
          </div>
          <a href="https://drive.google.com/file/d/1GfvEnUtM2n5zLldvbAxMKSye-CnyToz-/view?usp=sharing" className="Contact-CV">
            <button> ~ Curriculum Vitae ~ </button>
          </a>
        </div>
      </section>
    </div>
  );
}

export default App;
