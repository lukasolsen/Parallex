import React, { useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom";
import "./style.css";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useSpring, animated } from "@react-spring/web";

function App() {
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(
                window.scrollY /
                    (document.body.clientHeight - window.innerHeight)
            );
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const url = (name, wrap = false) =>
        `${
            wrap ? "url(" : ""
        }https://awv3node-homepage.surge.sh/build/assets/${name}.svg${
            wrap ? ")" : ""
        }`;

    const rotationLoop = useSpring({
        from: { transform: "rotate(0deg)" },
        to: { transform: "rotate(360deg)" },
        config: { duration: 7000 },
        reset: true,
        loop: true,
    });

    const horizontalBoat = useSpring({
        transform: `translateX(${scrollPosition * 100}%)`,
    });

    return (
        <Parallax pages={3} style={{ backgroundColor: "#253237" }}>
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

            <ParallaxLayer offset={0.1}>
                <animated.img
                    src={
                        "https://www.pngall.com/wp-content/uploads/11/Flying-Plane-PNG-Free-Image.png"
                    }
                    height={200}
                    style={{ marginTop: "10%", marginLeft: "20%" }}
                ></animated.img>
            </ParallaxLayer>

            <ParallaxLayer offset={0.3}>
                <animated.img
                    src={
                        "https://www.pngall.com/wp-content/uploads/11/Flying-Plane-PNG-Free-Image.png"
                    }
                    height={200}
                    style={{ marginTop: "5%", marginLeft: "75%" }}
                ></animated.img>
            </ParallaxLayer>

            {/* The sun in the first page */}
            <ParallaxLayer offset={0} speed={0.17}>
                <animated.img
                    src="https://www.freepnglogos.com/uploads/sun-png/file-sun-icon-svg-wikimedia-commons-18.png"
                    height={150}
                    style={rotationLoop}
                />
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

            {/* The fish 1 */}
            <ParallaxLayer
                offset={1}
                speed={0.1}
                factor={3}
                style={{
                    backgroundImage:
                        "url(https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Fish.svg/2560px-Fish.svg.png)",
                    backgroundSize: "cover",
                    height: "3%",
                    width: "10%",
                    opacity: 0.5,
                }}
            />
            {/* The fish 2 */}
            <ParallaxLayer
                offset={1.2}
                speed={0.1}
                factor={3}
                style={{
                    backgroundImage:
                        "url(https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Fish.svg/2560px-Fish.svg.png)",
                    backgroundSize: "cover",
                    height: "3%",
                    width: "10%",
                    opacity: 0.5,
                    marginLeft: "70%",
                }}
            />

            {/* The fish 3 */}
            <ParallaxLayer
                offset={1.5}
                speed={0.1}
                factor={3}
                style={{
                    backgroundImage:
                        "url(https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Fish.svg/2560px-Fish.svg.png)",
                    backgroundSize: "cover",
                    height: "3%",
                    width: "10%",
                    opacity: 0.5,
                    marginLeft: "10%",
                    marginTop: "1%",
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
            <ParallaxLayer offset={0.3} speed={0.2} style={{ opacity: 0.2 }}>
                <img
                    src={url("cloud")}
                    style={{
                        display: "block",
                        width: "10%",
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

            <ParallaxLayer offset={0.4} speed={0}>
                <animated.img
                    src="https://i.pinimg.com/originals/59/da/87/59da8768d2f742d00a77deed3c628f64.png"
                    style={horizontalBoat}
                />
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

            {/* The clouds at transfers at second image */}
            <ParallaxLayer
                offset={0.8}
                speed={0}
                style={{ zIndex: 5 }}
            ></ParallaxLayer>

            {/* The clouds at transfers at second image */}
            <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
                <img
                    src={url("cloud")}
                    style={{
                        display: "block",
                        width: "20%",
                        marginLeft: "55%",
                    }}
                />
                <img
                    src={url("cloud")}
                    style={{
                        display: "block",
                        width: "10%",
                        marginLeft: "15%",
                    }}
                />
            </ParallaxLayer>

            {/* The clouds at transfers at second image */}
            <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
                <img
                    src={url("cloud")}
                    style={{
                        display: "block",
                        width: "20%",
                        marginLeft: "70%",
                    }}
                />
                <img
                    src={url("cloud")}
                    style={{
                        display: "block",
                        width: "20%",
                        marginLeft: "40%",
                    }}
                />
            </ParallaxLayer>

            {/* The clouds at transfers at second image */}
            <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
                <img
                    src={url("cloud")}
                    style={{
                        display: "block",
                        width: "10%",
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

            {/* The clouds at transfers at second image */}
            <ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 0.4 }}>
                <img
                    src={url("cloud")}
                    style={{
                        display: "block",
                        width: "20%",
                        marginLeft: "60%",
                    }}
                />
                <img
                    src={url("cloud")}
                    style={{
                        display: "block",
                        width: "25%",
                        marginLeft: "30%",
                    }}
                />
                <img
                    src={url("cloud")}
                    style={{
                        display: "block",
                        width: "10%",
                        marginLeft: "80%",
                    }}
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

            {/* The small client looking windows at the top page. */}
            {/* Hiding this element
            <ParallaxLayer
                offset={0}
                speed={0.1}
                onClick={() => window.scrollTo(1)}
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <img src={url("server")} style={{ width: "20%" }} />
            </ParallaxLayer>
              */}

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
            </ParallaxLayer>
        </Parallax>
    );
}
export default App;
