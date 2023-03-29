import React, { useEffect } from "react";

const About = () => {

    useEffect(() => {
        document.title = "About";
    }, []);

    return (
        <div>
            <h1>About</h1>
        </div>
    )
}

export default About;