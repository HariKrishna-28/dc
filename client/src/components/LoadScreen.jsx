import React from 'react'
import { ScaleLoader } from "react-spinners";

const LoadScreen = () => {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignContent: "center",
                textAlign: "center",
                height: "100vh",
            }}
        >
            <ScaleLoader color="#4149a9" />
        </div>
    )
}

export default LoadScreen