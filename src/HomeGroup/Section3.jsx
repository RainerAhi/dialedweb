import React, { useEffect, useRef, useState } from "react";
import { useAnimateText, useSmallTextAnimation, useImageAnimation } from "../ScrollAnimations";
import Typewriter from 'typewriter-effect';
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

export const Section3 = () => {

  useAnimateText(".three-title, .three-top-text-animate");

  const isMobile = window.innerWidth <= 768;

  const [dragging, setDragging] = useState(false);
  const [percentage, setPercentage] = useState(0);
  const containerRef = useRef(null);
  const sliderRef = useRef(null);

  const handleMouseDown = () => {
    setDragging(true);
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!dragging) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    let x = e.clientX - containerRect.left;
    const width = containerRect.width;

    // Constrain the x position to within the container boundaries
    x = Math.max(0, Math.min(x, width));
    const newPercentage = (x / width) * 100;

    setPercentage(newPercentage);
    sliderRef.current.style.left = `${newPercentage}%`;
    containerRef.current.style.setProperty('--mask-width', `${newPercentage}%`);
  };

  const handleTouchMove = (e) => {
    if (!dragging) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    let x = e.touches[0].clientX - containerRect.left;
    const width = containerRect.width;

    // Constrain the x position to within the container boundaries
    x = Math.max(0, Math.min(x, width));
    const newPercentage = (x / width) * 100;

    setPercentage(newPercentage);
    sliderRef.current.style.left = `${newPercentage}%`;
    containerRef.current.style.setProperty('--mask-width', `${newPercentage}%`);
  };

  useEffect(() => {
    const handleMouseUpOutside = () => {
      setDragging(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUpOutside);
    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('touchend', handleMouseUpOutside);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUpOutside);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleMouseUpOutside);
    };
  }, [dragging]);

  return (
    <>
      <section className="three">
        <img className="scroll-indicator" src="/scroll3.gif" alt="" />
        {!isMobile && (
          <div className="three-content-box-right">
            <div className="container hover-area" data-cursor-text="SCROLL" onMouseMove={handleMouseMove} ref={containerRef}>
              <div className="video video1">
                <video className="three-video" src="/laptop4.webm" autoPlay="autoplay" muted="true" playsInline="true" data-wf-ignore="true" preload="auto" loop></video>
              </div>
              <div className="video video2">
                <video className="three-video" src="/laptop3.webm" autoPlay="autoplay" muted="true" playsInline="true" data-wf-ignore="true" preload="auto" loop></video>
              </div>
            </div>
          </div>
        )}
        <div className="slider-container">
          <div className="slider-line"></div>
          <div
            className="slider"
            onMouseDown={handleMouseDown}
            onTouchStart={handleMouseDown}
            ref={sliderRef}
            style={{ backgroundColor: percentage >= 50 ? '#AAA3FF' : '#fefeff' }}
          >
            <div className="circle">
              <i className="fas fa-arrows-alt-h"></i>
            </div>
          </div>
        </div>
        <div className="three-content">
          <div className="three-content-box-left">
            <h1 className="headline three-title">Virtual Turns <br />Tangible</h1>
            <p className="description three-description purple">To innovate and enhance digital experiences by crafting tailored, user-centric web solutions. We elevate and engage audiences through creativity and technology, delivering modern, intuitive websites that drive business’s success.</p>
            <div className="typewriter-box">
              <h1 className="typewriter">
                <span className='typewriter-main'>We<span className="typewriter-text"></span></span>
              </h1>
            </div>
          </div>
          {isMobile && (
            <div className="three-content-box-right">
              <div className="container" onMouseMove={handleMouseMove} ref={containerRef}>
                <div className="video video1">
                  <video className="three-video" src="/laptop4.webm" autoPlay="autoplay" muted="true" playsInline="true" data-wf-ignore="true" preload="auto" loop></video>
                </div>
                <div className="video video2">
                  <video className="three-video" src="/laptop3.webm" autoPlay="autoplay" muted="true" playsInline="true" data-wf-ignore="true" preload="auto" loop></video>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};