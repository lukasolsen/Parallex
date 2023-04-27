import React, { useEffect, useState, Suspense, useRef } from "react";
import "./style.css";
import Water from "./components/Water";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useSpring, animated } from "@react-spring/web";
import { Canvas } from "@react-three/fiber";
import ScrollShow from "./components/ScrollShow";
import { OrbitControls } from "@react-three/drei";
import Earth from "./components/Earth";
const url = (name, wrap = false) =>
    `${
        wrap ? "url(" : ""
    }https://awv3node-homepage.surge.sh/build/assets/${name}.svg${
        wrap ? ")" : ""
    }`;

const handleScroll = () => {
    console.log("scrolling");
};

export default class Scroll extends React.Component {
    render() {
        return (
            <Parallax
                ref={(ref) => (this.parallax = ref)}
                pages={10}
                style={{ backgroundColor: "#253237", userSelect: "none" }}
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

                <ParallaxLayer offset={1.1} factor={1.5}>
                    <img
                        src="https://e1.pngegg.com/pngimages/1004/204/png-clipart-screentones-action-lines-black-flashing-illustration-thumbnail.png"
                        style={{ width: "100%" }}
                    ></img>
                </ParallaxLayer>

                {/* The earth */}
                <ParallaxLayer offset={0} speed={0.7} onScroll={handleScroll}>
                    <canvas
                        style={{ height: "100vh", width: "100vw" }}
                        id="earthCanvas"
                    ></canvas>

                    <ScrollShow />
                </ParallaxLayer>

                {/* The clouds at transfers at second image */}
                <ParallaxLayer
                    offset={2.1}
                    factor={0.3}
                    speed={-0.1}
                    style={{ opacity: 1 }}
                >
                    <img
                        src={url("cloud")}
                        style={{
                            display: "block",
                            width: "15%",
                            marginLeft: "10%",
                            transform: "scale(1.3)",
                        }}
                    />
                    <img
                        src={url("cloud")}
                        style={{
                            display: "block",
                            width: "20%",
                            marginLeft: "75%",
                        }}
                    />
                </ParallaxLayer>

                <ParallaxLayer offset={2.4} factor={5}>
                    <Water />
                </ParallaxLayer>
                <Earth />
            </Parallax>
        );
    }
}
