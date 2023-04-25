import { useSpring, animated } from "@react-spring/web";

export default function MyComponent() {
    const springs = useSpring({
        from: { width: "0px" },
        to: { width: "100px" },
    });

    return (
        <animated.div
            style={{
                width: "100px",
                height: "100px",
                backgroundColor: "red",
                borderRadius: 8,
                ...springs,
            }}
        ></animated.div>
    );
}
