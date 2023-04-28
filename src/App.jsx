import React, { useEffect, useState, Suspense, useRef } from "react";
import "./style.css";
import Water from "./components/Water";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useSpring, animated } from "@react-spring/web";
import { Canvas } from "@react-three/fiber";
import ScrollShow from "./components/ScrollShow";
import { OrbitControls } from "@react-three/drei";
import Earth from "./components/Earth";
import { motion } from "framer-motion";

const url = (name, wrap = false) =>
  `${
    wrap ? "url(" : ""
  }https://awv3node-homepage.surge.sh/build/assets/${name}.svg${
    wrap ? ")" : ""
  }`;

// Card animation.
const cardVariants = {
  offscreen: {
    rotate: 0,
    scale: 1.0,
    x: 0,
  },
  onscreen: {
    rotate: 10,
    x: 30,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
  hover: {
    rotate: 0,
    scale: 1.1,
  },
};

export default class Scroll extends React.Component {
  render() {
    return (
      <Parallax
        ref={(ref) => (this.parallax = ref)}
        pages={10}
        style={{ backgroundColor: "#000000", userSelect: "none" }}
      >
        {/* The pink background */}
        <ParallaxLayer
          offset={2}
          factor={1.6}
          speed={0}
          style={{ backgroundColor: "#805E73" }}
        />
        {/* The top background */}
        <ParallaxLayer
          offset={0}
          factor={1}
          speed={0}
          style={{
            background: "#000000",
          }}
        />

        <ParallaxLayer
          offset={1}
          factor={1.5}
          speed={-0.4}
          style={{ background: "#000000" }}
        />

        {/* The earth */}
        <ParallaxLayer offset={0} speed={0.7}>
          <canvas
            style={{ height: "100vh", width: "100vw" }}
            id="earthCanvas"
          ></canvas>
          <img
            src="https://cdn.discordapp.com/attachments/1022090845865918545/1101467754302816256/MiljoUkaLogo.png_thumbnail.png"
            className="absolute"
            style={{
              top: "50px",
              left: "165px",
              transform: "scale(0.5)",
              userDrag: "none",
            }}
          />

          <ScrollShow />
        </ParallaxLayer>

        {/* The clouds at transfers at second image */}
        <ParallaxLayer
          offset={2.1}
          factor={0.3}
          speed={-0.1}
          style={{ opacity: 1, zIndex: 40 }}
        >
          <img
            src={url("cloud")}
            style={{
              display: "block",
              width: "15%",
              marginLeft: "10%",
              transform: "scale(1.3)",
              zIndex: 40,
            }}
          />
          <img
            src={url("cloud")}
            style={{
              display: "block",
              width: "20%",
              marginLeft: "75%",
              zIndex: 40,
            }}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={2.4} style={{ backgroundColor: "#999999" }}>
          <Water />
        </ParallaxLayer>

        <ParallaxLayer
          offset={3.4}
          speed={-0.001}
          style={{ backgroundColor: "#7e0e68" }}
        >
          <motion.div
            className="rounded-2xl w-80 h-80 bg-slate-950 shadow-slate-950 shadow-sm text-white dark:invert-0"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
            whileHover="hover"
            variants={cardVariants}
          >
            <img src="https://media.discordapp.net/attachments/1022090845865918545/1101478064438915112/last_ned.jpg?width=1000&height=523" />
            <div className="flex mt-6">
              <div className="row w-44 text-center align-middle">
                <h3>26</h3>
                <span className="mt-72">April</span>
              </div>
              <div className="row">
                <h1 className="font-medium text-1xl text-center">
                  Bærekraftige klesforhold - tilpasning, omsøm og drømmeplagg v/
                  Sigrid Løvlie
                </h1>
                <span className="font-thin mt-4">Uff x Resirkula, Sy-den</span>
              </div>
            </div>
          </motion.div>
        </ParallaxLayer>
        <Earth />
      </Parallax>
    );
  }
}
