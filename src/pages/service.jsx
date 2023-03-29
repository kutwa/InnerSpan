import React, { useEffect } from "react";

const Service = () => {

    useEffect(() => {
        document.title = "Service";
    }, []);

    return (
        <div>
            <h1>Service</h1>
        </div>
    )
}

export default Service;