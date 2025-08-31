import React from "react";

const Hero = () => {
    return (
        <div className="h-screen flex flex-col justify-center items-center bg-gradient-to-b from-blue-500 to-purple-600 text-white text-center px-4">
            <h1 className="text-5xl font-bold mb-4">Welcome to My Portfolio</h1>
            <p className="text-lg mb-8">I'm a passionate developer with a knack for creating stunning web applications.</p>
            <a href="#projects" className="bg-white text-blue-500 py-2 px-4 rounded-lg">View My Work</a>
        </div>
    )
}

export default Hero;