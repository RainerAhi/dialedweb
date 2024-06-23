import React, { useEffect, useRef, useState } from "react";
import { useAnimateText, useDivAnimation, useSmallTextAnimation } from "../ScrollAnimations";

export const Section3 = () => {

  useAnimateText('.split');

  useSmallTextAnimation(".small-text-animate");

  useDivAnimation(".div-animation")

    return (
      <>
        <section className="three">
          <div className="three-content" >
            <div className="three-content-left">
              <h1 className="headline-purple split" >Our Mission</h1>
              <p className="description small-text-animate" >Our mission at DialedWeb is to innovate and enhance <br /> digital experiences by crafting tailored, usercentric web<br /> solutions. We elevate and engage audiences through <br /> creativity and technology, delivering modern, intuitive <br /> websites that drive business’s international success.</p>
            </div>
            <div className="three-content-right">
              <div className="three-content-right-visual div-animation" >

              </div>
            </div>
          </div>
        </section>
      </>
    )
}