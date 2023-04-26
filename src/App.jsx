import React, { useEffect, useState, Suspense, useRef } from "react";
import "./style.css";
import Duck from "./components/Earth";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useSpring, animated } from "@react-spring/web";
import { Canvas } from "@react-three/fiber";
import { Mesh, SphereGeometry } from "three";
import * as THREE from "three";
import { OrbitControls } from "@react-three/drei";

const url = (name, wrap = false) =>
    `${
        wrap ? "url(" : ""
    }https://awv3node-homepage.surge.sh/build/assets/${name}.svg${
        wrap ? ")" : ""
    }`;

export default class Scroll extends React.Component {
    render() {
        return (
            <Parallax
                ref={(ref) => (this.parallax = ref)}
                pages={4}
                style={{ backgroundColor: "#253237", userSelect: "none" }}
            >
                {/* The pink background */}
                <ParallaxLayer
                    offset={0.87}
                    factor={1.6}
                    speed={0}
                    style={{ backgroundColor: "#805E73" }}
                />
                {/* The last [blue] background */}
                <ParallaxLayer
                    offset={0}
                    factor={0.87}
                    speed={0}
                    style={{
                        background: "rgb(25,83,153)",
                        background:
                            "linear-gradient(0deg, rgba(25,83,153,1) 0%, rgba(18,33,51,1) 100%)",
                    }}
                />

                <ParallaxLayer offset={0} speed={0.7}>
                    <Canvas
                        style={{ height: "100vh", width: "100vw" }}
                        camera={{
                            position: [0, 0, 15],
                            up: [0, 1, 0],
                            near: 0.01,
                            far: 1000,
                        }}
                    >
                        <OrbitControls />
                        <directionalLight intensity={0.5} />
                        <Suspense fallback={null}>
                            <Duck />
                        </Suspense>
                    </Canvas>
                </ParallaxLayer>

                {/* The stars, Located everywhere. starts at page 0, ends at final page */}
                <ParallaxLayer
                    offset={0.9}
                    speed={0}
                    factor={3}
                    style={{
                        backgroundImage: url("stars", true),
                        backgroundSize: "cover",
                    }}
                />

                {/* The stars, Located everywhere. the sky */}
                <ParallaxLayer
                    offset={0}
                    speed={0}
                    factor={0.4}
                    style={{
                        backgroundImage: url("stars", true),
                        backgroundSize: "cover",
                    }}
                />

                {/* The clouds at transfers at second image */}
                <ParallaxLayer
                    offset={0.3}
                    speed={0.2}
                    style={{ opacity: 0.2 }}
                >
                    <img
                        src={url("cloud")}
                        style={{
                            display: "block",
                            width: "15%",
                            marginLeft: "10%",
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

                <ParallaxLayer offset={0.3} speed={0}>
                    <animated.img src="https://i.pinimg.com/originals/59/da/87/59da8768d2f742d00a77deed3c628f64.png" />
                </ParallaxLayer>

                {/* Not sure what this does, but starts at second image, and has a speed of negative. [Satelite i guess]*/}
                <ParallaxLayer
                    offset={1.3}
                    speed={-0.3}
                    style={{ pointerEvents: "none" }}
                >
                    <img
                        src={url("satellite4")}
                        style={{ width: "15%", marginLeft: "70%" }}
                    />
                </ParallaxLayer>

                {/* The earth at the end of the page */}
                <ParallaxLayer
                    offset={2.5}
                    speed={-0.4}
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        pointerEvents: "none",
                    }}
                >
                    <img src={url("earth")} style={{ width: "60%" }} />
                </ParallaxLayer>

                {/* The earth at the end of the page */}
                <ParallaxLayer
                    offset={2}
                    speed={-0.3}
                    style={{
                        backgroundSize: "80%",
                        backgroundPosition: "center",
                        backgroundImage: url("clients", true),
                    }}
                />

                {/* The small server looking window at the middle page. */}
                <ParallaxLayer
                    offset={1}
                    speed={0.1}
                    onClick={() => this.parallax.scrollTo(2)}
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <img src={url("bash")} style={{ width: "40%" }} />
                </ParallaxLayer>

                {/* The big server looking window at the last page. */}
                <ParallaxLayer
                    offset={2}
                    speed={-0}
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                    onClick={() => this.parallax.scrollTo(0)}
                >
                    <img src={url("clients-main")} style={{ width: "40%" }} />
                    <h3>Hello World</h3>
                </ParallaxLayer>

                {/* The fish 1 */}
                <ParallaxLayer
                    offset={1}
                    speed={0.1}
                    factor={3}
                    id="fish"
                    style={{
                        backgroundImage:
                            "url(https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Fish.svg/2560px-Fish.svg.png)",
                        backgroundSize: "cover",
                        height: "5%",
                        width: "15%",
                        opacity: 0.5,
                    }}
                />
                {/* The fish 2 */}
                <ParallaxLayer
                    offset={1.2}
                    speed={0.1}
                    factor={3}
                    id="fish"
                    style={{
                        backgroundImage:
                            "url(https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Fish.svg/2560px-Fish.svg.png)",
                        backgroundSize: "cover",
                        height: "5%",
                        width: "15%",
                        opacity: 0.5,
                        marginLeft: "70%",
                    }}
                />

                {/* The fish 3 */}
                <ParallaxLayer
                    offset={1.5}
                    speed={0.1}
                    factor={3}
                    id="fish"
                    style={{
                        backgroundImage:
                            "url(https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Fish.svg/2560px-Fish.svg.png)",
                        backgroundSize: "cover",
                        height: "5%",
                        width: "15%",
                        opacity: 0.5,
                        marginLeft: "10%",
                        marginTop: "1%",
                    }}
                />
            </Parallax>
        );
    }
}
