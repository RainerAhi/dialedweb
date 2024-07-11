import React, { Suspense, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import transition from "./Transition";
import { useAnimateText } from "./ScrollAnimations";
import { initializeCursors } from "./Cursor";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";

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
              
              <ParallaxProvider>
                <div className="project" onClick={() => { hoverSoundMobile(); handleClick('https://www.instagram.com/dialedweb/'); }} onMouseEnter={hoverSoundStart} onMouseLeave={hoverSoundEnd} >
                  <div className="project-image hover-area" data-cursor-text="CLICK" >
                    <Parallax speed={ -10 } >
                      <img src="/project1.png" alt="Project 1" />
                    </Parallax>
                  </div>
                  <div className="project-text-container">
                    <div className="project-text-container-title">
                      <p className="project-text-title" >Project title 2</p>
                    </div>
                    <p className="project-text-description" >Description text 2</p>
                    <p className="project-text-description" >(2024)</p>
                  </div>
                </div>
              </ParallaxProvider>
    
              <ParallaxProvider>
                <div className="project" onClick={() => { hoverSoundMobile(); handleClick('https://www.instagram.com/dialedweb/'); }} onMouseEnter={hoverSoundStart} onMouseLeave={hoverSoundEnd} >
                  <div className="project-image hover-area" data-cursor-text="CLICK" >
                    <Parallax speed={ -10 } >
                      <img src="/project2.png" alt="Project 2" />
                    </Parallax>
                  </div>
                  <div className="project-text-container">
                    <div className="project-text-container-title">
                      <p className="project-text-title" >Project title 2</p>
                    </div>
                    <p className="project-text-description" >Description text 2</p>
                    <p className="project-text-description" >(2024)</p>
                  </div>
                </div>
              </ParallaxProvider>
    
              <ParallaxProvider>
                <div className="project" onClick={() => { hoverSoundMobile(); handleClick('https://www.instagram.com/dialedweb/'); }} onMouseEnter={hoverSoundStart} onMouseLeave={hoverSoundEnd} >
                  <div className="project-image hover-area" data-cursor-text="CLICK" >
                    <Parallax speed={ -10 } >
                      <img src="/project3.png" alt="Project 3" />
                    </Parallax>
                  </div>
                  <div className="project-text-container">
                    <div className="project-text-container-title">
                      <p className="project-text-title" >Project title 3</p>
                    </div>
                    <p className="project-text-description" >Description text 3</p>
                    <p className="project-text-description" >(2024)</p>
                  </div>
                </div>
              </ParallaxProvider>
    
              <ParallaxProvider>
                <div className="project" onClick={() => { hoverSoundMobile(); handleClick('https://www.instagram.com/dialedweb/'); }} onMouseEnter={hoverSoundStart} onMouseLeave={hoverSoundEnd} >
                  <div className="project-image hover-area" data-cursor-text="CLICK" >
                    <Parallax speed={ -10 } >
                      <img src="/project4.png" alt="Project 4" />
                    </Parallax>
                  </div>
                  <div className="project-text-container">
                    <div className="project-text-container-title">
                      <p className="project-text-title" >Project title 4</p>
                    </div>
                    <p className="project-text-description" >Description text 4</p>
                    <p className="project-text-description" >(2024)</p>
                  </div>
                </div>
              </ParallaxProvider>

              <ParallaxProvider>
                <div className="project" onClick={() => { hoverSoundMobile(); handleClick('https://www.instagram.com/dialedweb/'); }} onMouseEnter={hoverSoundStart} onMouseLeave={hoverSoundEnd} >
                  <div className="project-image hover-area" data-cursor-text="CLICK" >
                    <Parallax speed={ -10 } >
                      <img src="/project1.png" alt="Project 5" />
                    </Parallax>
                  </div>
                  <div className="project-text-container">
                    <div className="project-text-container-title">
                      <p className="project-text-title" >Project title 5</p>
                    </div>
                    <p className="project-text-description" >Description text 5</p>
                    <p className="project-text-description" >(2024)</p>
                  </div>
                </div>
              </ParallaxProvider>

              <ParallaxProvider>
                <div className="project" onClick={() => { hoverSoundMobile(); handleClick('https://www.instagram.com/dialedweb/'); }} onMouseEnter={hoverSoundStart} onMouseLeave={hoverSoundEnd} >
                  <div className="project-image hover-area" data-cursor-text="CLICK" >
                    <Parallax speed={ -10 } >
                      <img src="/project2.png" alt="Project 6" />
                    </Parallax>
                  </div>
                  <div className="project-text-container">
                    <div className="project-text-container-title">
                      <p className="project-text-title" >Project title 6</p>
                    </div>
                    <p className="project-text-description" >Description text 6</p>
                    <p className="project-text-description" >(2024)</p>
                  </div>
                </div>
              </ParallaxProvider>
    
            </div>
          </div>
        </section>
        </>
      );
    };

export default transition(SectionProjects);