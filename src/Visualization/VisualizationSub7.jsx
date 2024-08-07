import React, { Suspense, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { TextPlugin } from 'gsap/TextPlugin';
import { SplitText } from "gsap/all";
import { ScrollTrigger } from "gsap/all";
import transition from "../Transition";
import { useAnimateText } from "../ScrollAnimations";
import { initializeCursors } from "../Cursor";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

gsap.registerPlugin(SplitText, ScrollTrigger, TextPlugin);

const VisualizationSub7 = () => {

    useEffect(() => {
        // Scroll to the top when the component mounts
        window.scrollTo(0, 0);
      }, []);

    const navigate = useNavigate();

      useEffect(() => {
        initializeCursors();
      }, []);

    return (
        <>

<div className="cursor" id="ball"></div>
<div className="cursor-text" id="cursor-text">Scroll</div>

<section className="visualizationsub">

<h1 className="headline hotel-title-text" >Cityscapes</h1>

  <div className="visualizationsub-row">
    <div className="visualizationsub-image ci-1"/>
    <div className="visualizationsub-image ci-2"/>
  </div>

  <div className="visualizationsub-row">
    <div className="visualizationsub-image ci-3"/>
  </div>

</section>
        </>
      );
    };

export default transition(VisualizationSub7);