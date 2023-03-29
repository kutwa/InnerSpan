import React, { useEffect } from "react";
import { Canvas } from "react-three-fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";

const Main = () => {

    useEffect(() => {
        document.title = "Home";
    }, []);

    return (
        <div className="home-container">
            <div className="home-info-container">
                <h1>InnerSpan Solutions: Crafting Seamless Digital Experiences</h1>
                <p>
                    Welcome to InnerSpan Solutions, where we create cutting-edge, modern websites utilizing the power of ReactJS. Experience the future of web development and let your business thrive in the digital world.
                </p>
                <p>
                    <i>Innovate, Create, Inspire</i>
                </p>
            </div>
            <div className="home-info-container">

                <Canvas camera={{ fov: 25, position: [5, 5, 5]}}>
                    <OrbitControls enableZoom={false} autoRotate />
                    <ambientLight intensity={1} />
                        <Sphere args={[1, 100, 200]} scale={1}>
                            <MeshDistortMaterial color="#b8b8b8" attach="material" distort={0.4} speed={1} />
                        </Sphere>
                </Canvas>

            </div>
        </div>
    );
}

export default Main;