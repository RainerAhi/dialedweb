import React, { Suspense, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import transition from "./Transition";
import { useAnimateText } from "./ScrollAnimations";
import { initializeCursors } from "./Cursor";

const SectionProjects = () => {

    useEffect(() => {
        // Scroll to the top when the component mounts
        window.scrollTo(0, 0);
      }, []);

    const navigate = useNavigate();

    const handleNavigateClick = (linkUrl) => {
      navigate(linkUrl);
    };

    const handleClick = (linkUrl) => {
        window.open(linkUrl, '_blank');
      };

      useAnimateText(".projects-animate-text")

      useEffect(() => {
        initializeCursors();
      }, []);

      const isMobile = window.innerWidth <= 768;

      const hoverSound = new Audio('/fx.mp3');

      const hoverSoundStart = () => {
        if (!isMobile) {
          hoverSound.play();
          hoverSound.currentTime = 0;
        }
      };
      
      const hoverSoundEnd = () => {
        if (!isMobile) {
          hoverSound.pause();
          hoverSound.currentTime = 0;
        }
      };
      
      const hoverSoundMobile = () => {
        if (isMobile) {
          hoverSound.play();
        }
      };

    return (
        <>

<div className="cursor" id="ball"></div>
<div className="cursor-text" id="cursor-text">Scroll</div>

        <section className="projects-section">
          <div className="projects-section-content">
            <div className="projects-top-texts">
              <h1 className="headline projects-animate-text" >Projects</h1>
              {/* <div className="projects-top-texts-bottom">
                <h1 className="projects-section-title-small" >Liran Stalik</h1>
                <p className="projects-section-title-description"  >Maintenance Of Luxury Homes and Project Management</p>
              </div> */}
            </div>
            <div className="projects-section-container">
              
              <div className="project" onClick={() => { hoverSoundMobile(); handleClick('https://www.instagram.com/dialedweb/'); }} onMouseEnter={hoverSoundStart} onMouseLeave={hoverSoundEnd} >
                <div className="project-image hover-area" data-cursor-text="CLICK" >
                  <img src="/project1.png" alt="Project 1" />
                </div>
                <div className="project-text-container">
                  <div className="project-text-container-title">
                    <p className="project-text-title" >Project title 1</p>
                  </div>
                  <p className="project-text-description" >Description text</p>
                  <p className="project-text-description" >(2024)</p>
                </div>
              </div>
    
              <div className="project" onClick={() => { hoverSoundMobile(); handleClick('https://www.instagram.com/dialedweb/'); }} onMouseEnter={hoverSoundStart} onMouseLeave={hoverSoundEnd} >
                <div className="project-image hover-area" data-cursor-text="CLICK" >
                    <img src="/project2.png" alt="Project 1" />
                </div>
                <div className="project-text-container">
                  <div className="project-text-container-title">
                    <p className="project-text-title" >Project title 2</p>
                  </div>
                  <p className="project-text-description" >Description text</p>
                  <p className="project-text-description" >(2024)</p>
                </div>
              </div>
    
              <div className="project" onClick={() => { hoverSoundMobile(); handleClick('https://www.instagram.com/dialedweb/'); }} onMouseEnter={hoverSoundStart} onMouseLeave={hoverSoundEnd} >
                <div className="project-image hover-area" data-cursor-text="CLICK" >
                    <img src="/project3.png" alt="Project 1" />
                </div>
                <div className="project-text-container">
                  <div className="project-text-container-title">
                    <p className="project-text-title" >Project title 3</p>
                  </div>
                  <p className="project-text-description" >Description text</p>
                  <p className="project-text-description" >(2024)</p>
                </div>
              </div>
    
              <div className="project" onClick={() => { hoverSoundMobile(); handleClick('https://www.instagram.com/dialedweb/'); }} onMouseEnter={hoverSoundStart} onMouseLeave={hoverSoundEnd} >
                <div className="project-image hover-area" data-cursor-text="CLICK" >
                    <img src="/project4.png" alt="Project 1" />
                </div>
                <div className="project-text-container">
                  <div className="project-text-container-title">
                    <p className="project-text-title" >Project title 4</p>
                  </div>
                  <p className="project-text-description" >Description text</p>
                  <p className="project-text-description" >(2024)</p>
                </div>
              </div>

              <div className="project" onClick={() => { hoverSoundMobile(); handleClick('https://www.instagram.com/dialedweb/'); }} onMouseEnter={hoverSoundStart} onMouseLeave={hoverSoundEnd} >
                <div className="project-image hover-area" data-cursor-text="CLICK" >
                    <img src="/project1.png" alt="Project 1" />
                </div>
                <div className="project-text-container">
                  <div className="project-text-container-title">
                    <p className="project-text-title" >Project title 5</p>
                  </div>
                  <p className="project-text-description" >Description text</p>
                  <p className="project-text-description" >(2024)</p>
                </div>
              </div>

              <div className="project" onClick={() => { hoverSoundMobile(); handleClick('https://www.instagram.com/dialedweb/'); }} onMouseEnter={hoverSoundStart} onMouseLeave={hoverSoundEnd} >
                <div className="project-image hover-area" data-cursor-text="CLICK" >
                    <img src="/project2.png" alt="Project 1" />
                </div>
                <div className="project-text-container">
                  <div className="project-text-container-title">
                    <p className="project-text-title" >Project title 6</p>
                  </div>
                  <p className="project-text-description" >Description text</p>
                  <p className="project-text-description" >(2024)</p>
                </div>
              </div>
    
            </div>
          </div>
        </section>
        </>
      );
    };

export default transition(SectionProjects);